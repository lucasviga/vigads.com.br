import type { Dispatch, MutableRefObject, SetStateAction } from "react";

import { CHAT_ERROR_FALLBACK } from "@/components/home-dashboard/chat/chat.constants";
import {
  createChatMessage,
  patchAssistantMessage,
} from "@/components/home-dashboard/chat/chatMessages";
import { startLoadingPhraseRotation } from "@/components/home-dashboard/chat/loadingPhrases";
import { runChatStream } from "@/components/home-dashboard/chat/runChatStream";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface StartStreamInput {
  question: string;
  abortRef: MutableRefObject<AbortController | null>;
  phraseIndexRef: MutableRefObject<number>;
  setQuery: (value: string) => void;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  setIsChatOpen: (open: boolean) => void;
  setHeroHint: (hint: string | null) => void;
  setIsStreaming: (value: boolean) => void;
  setLoadingPhrase: (phrase: string | null) => void;
}

export async function startPortfolioChatStream(input: StartStreamInput): Promise<void> {
  input.abortRef.current?.abort();
  const controller = new AbortController();
  input.abortRef.current = controller;
  const assistant = createChatMessage("assistant", "", "streaming");

  input.setIsChatOpen(true);
  input.setHeroHint(null);
  input.setQuery("");
  input.setIsStreaming(true);
  input.setMessages((prev) => [...prev, createChatMessage("user", input.question), assistant]);
  const stopPhrases = startLoadingPhraseRotation(input.phraseIndexRef, input.setLoadingPhrase);

  try {
    await runChatStream({
      question: input.question,
      assistantId: assistant.id,
      signal: controller.signal,
      setMessages: input.setMessages,
      onFirstToken: stopPhrases,
    });
  } catch (error) {
    if (controller.signal.aborted) return;
    const text =
      error instanceof Error && error.message ? error.message : CHAT_ERROR_FALLBACK;
    input.setMessages((prev) =>
      patchAssistantMessage(prev, assistant.id, { text, status: "error" }),
    );
  } finally {
    stopPhrases();
    input.setIsStreaming(false);
    if (input.abortRef.current === controller) input.abortRef.current = null;
  }
}
