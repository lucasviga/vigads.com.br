import type { Dispatch, SetStateAction } from "react";

import { createTokenRevealGate } from "@/components/home-dashboard/chat/createTokenRevealGate";
import {
  finalizeAssistant,
  handleStreamEvent,
} from "@/components/home-dashboard/chat/handleStreamEvent";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";
import { streamChatResponse } from "@/components/home-dashboard/chat/streamChatResponse";

interface RunChatStreamInput {
  question: string;
  assistantId: string;
  signal: AbortSignal;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  onFirstToken: () => void;
}

export async function runChatStream({
  question,
  assistantId,
  signal,
  setMessages,
  onFirstToken,
}: RunChatStreamInput): Promise<void> {
  const gate = createTokenRevealGate({ assistantId, setMessages, onFirstToken, signal });
  const onAbort = () => gate.clear();
  signal.addEventListener("abort", onAbort);

  try {
    await streamChatResponse({
      question,
      signal,
      onEvent: (event) =>
        handleStreamEvent({ event, gate, assistantId, setMessages, onFirstToken }),
    });
    if (signal.aborted) return;
    if (!gate.revealed && gate.buffer) gate.flush();
    await gate.waitUntilIdle();
    if (signal.aborted) return;
    finalizeAssistant(setMessages, assistantId);
  } finally {
    signal.removeEventListener("abort", onAbort);
    gate.clear();
  }
}
