import type { Dispatch, SetStateAction } from "react";
import {
  CHAT_MIN_LOADING_MS,
  CHAT_REVEAL_CHARS,
} from "@/components/home-dashboard/chat/chat.constants";
import { createRevealPaceQueue } from "@/components/home-dashboard/chat/createRevealPaceQueue";
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
  let delayTimer: ReturnType<typeof setTimeout> | null = null;
  const pace = createRevealPaceQueue(input);

  const flush = () => {
    if (revealed || input.signal.aborted) return;
    revealed = true;
    if (delayTimer) clearTimeout(delayTimer);
    delayTimer = null;
    input.onFirstToken();
    const firstChunk = buffer.slice(0, CHAT_REVEAL_CHARS);
    const remaining = buffer.slice(CHAT_REVEAL_CHARS);
    buffer = "";
    input.setMessages((prev) =>
      patchAssistantMessage(prev, input.assistantId, { text: firstChunk, status: "streaming" }),
    );
    pace.enqueue(remaining);
  };

  const pushToken = (content: string) => {
    if (revealed) {
      if (pace.isBusy) pace.enqueue(content);
      else pace.appendNow(content);
      return;
    }
    buffer += content;
    const waitMs = CHAT_MIN_LOADING_MS - (Date.now() - startedAt);
    if (waitMs <= 0) flush();
    else if (!delayTimer) delayTimer = setTimeout(flush, waitMs);
  };

  return {
    get revealed() { return revealed; },
    get buffer() { return buffer; },
    flush,
    clear() { if (delayTimer) clearTimeout(delayTimer); delayTimer = null; pace.clear(); },
    pushToken,
    waitUntilIdle: pace.waitUntilIdle,
  };
}
