import type { Dispatch, MutableRefObject, SetStateAction } from "react";

import { CHAT_EMPTY_HINT } from "@/components/home-dashboard/chat/chat.constants";
import { createChatMessage } from "@/components/home-dashboard/chat/chatMessages";
import { startPortfolioChatStream } from "@/components/home-dashboard/chat/startPortfolioChatStream";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface SubmitPortfolioChatInput {
  query: string;
  isChatOpen: boolean;
  isStreaming: boolean;
  abortRef: MutableRefObject<AbortController | null>;
  phraseIndexRef: MutableRefObject<number>;
  setQuery: (value: string) => void;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  setIsChatOpen: (open: boolean) => void;
  setHeroHint: (hint: string | null) => void;
  setIsStreaming: (value: boolean) => void;
  setLoadingPhrase: (phrase: string | null) => void;
}

export async function submitPortfolioChat(input: SubmitPortfolioChatInput): Promise<void> {
  const trimmed = input.query.trim();
  if (!trimmed) {
    if (input.isChatOpen) {
      input.setMessages((prev) => [...prev, createChatMessage("assistant", CHAT_EMPTY_HINT)]);
      return;
    }
    input.setHeroHint(CHAT_EMPTY_HINT);
    return;
  }
  if (input.isStreaming) return;

  await startPortfolioChatStream({
    question: trimmed,
    abortRef: input.abortRef,
    phraseIndexRef: input.phraseIndexRef,
    setQuery: input.setQuery,
    setMessages: input.setMessages,
    setIsChatOpen: input.setIsChatOpen,
    setHeroHint: input.setHeroHint,
    setIsStreaming: input.setIsStreaming,
    setLoadingPhrase: input.setLoadingPhrase,
  });
}
