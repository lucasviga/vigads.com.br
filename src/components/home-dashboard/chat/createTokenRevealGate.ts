import type { Dispatch, SetStateAction } from "react";

import { CHAT_MIN_LOADING_MS } from "@/components/home-dashboard/chat/chat.constants";
import { patchAssistantMessage } from "@/components/home-dashboard/chat/chatMessages";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface TokenRevealGateInput {
  assistantId: string;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  onFirstToken: () => void;
  signal: AbortSignal;
}

export function createTokenRevealGate(input: TokenRevealGateInput) {
  const startedAt = Date.now();
  let buffer = "";
  let revealed = false;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const clear = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = null;
  };

  const flush = () => {
    if (revealed || input.signal.aborted) return;
    revealed = true;
    clear();
    input.onFirstToken();
    input.setMessages((prev) =>
      patchAssistantMessage(prev, input.assistantId, { text: buffer, status: "streaming" }),
    );
  };

  const pushToken = (content: string) => {
    buffer += content;
    if (revealed) {
      input.setMessages((prev) =>
        prev.map((m) =>
          m.id === input.assistantId ? { ...m, text: `${m.text}${content}` } : m,
        ),
      );
      return;
    }
    const remaining = CHAT_MIN_LOADING_MS - (Date.now() - startedAt);
    if (remaining <= 0) flush();
    else if (!timer) timer = setTimeout(flush, remaining);
  };

  return { get revealed() { return revealed; }, get buffer() { return buffer; }, flush, clear, pushToken };
}
