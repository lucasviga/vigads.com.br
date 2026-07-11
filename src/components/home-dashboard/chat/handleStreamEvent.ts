import type { Dispatch, SetStateAction } from "react";

import { CHAT_ERROR_FALLBACK } from "@/components/home-dashboard/chat/chat.constants";
import type { createTokenRevealGate } from "@/components/home-dashboard/chat/createTokenRevealGate";
import { patchAssistantMessage } from "@/components/home-dashboard/chat/chatMessages";
import type { ChatMessage, ChatSseEvent } from "@/components/home-dashboard/chat/chat.types";

type TokenRevealGate = ReturnType<typeof createTokenRevealGate>;

interface HandleStreamEventInput {
  event: ChatSseEvent;
  gate: TokenRevealGate;
  assistantId: string;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  onFirstToken: () => void;
}

export function handleStreamEvent({
  event,
  gate,
  assistantId,
  setMessages,
  onFirstToken,
}: HandleStreamEventInput): void {
  if (event.type === "token") {
    gate.pushToken(event.content);
    return;
  }
  if (event.type === "done") {
    if (!gate.revealed && gate.buffer) gate.flush();
    setMessages((prev) => patchAssistantMessage(prev, assistantId, { status: "complete" }));
    return;
  }
  if (event.type !== "error") return;
  gate.clear();
  onFirstToken();
  setMessages((prev) =>
    patchAssistantMessage(prev, assistantId, {
      text: event.message || CHAT_ERROR_FALLBACK,
      status: "error",
    }),
  );
}

export function finalizeAssistant(
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>,
  assistantId: string,
) {
  setMessages((prev) => {
    const current = prev.find((message) => message.id === assistantId);
    if (current?.status === "error") return prev;
    if (current?.text) {
      return patchAssistantMessage(prev, assistantId, { status: "complete" });
    }
    return patchAssistantMessage(prev, assistantId, {
      text: CHAT_ERROR_FALLBACK,
      status: "error",
    });
  });
}
