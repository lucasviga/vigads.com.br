import type { Dispatch, SetStateAction } from "react";
import {
  CHAT_REVEAL_CHARS,
  CHAT_REVEAL_TICK_MS,
} from "@/components/home-dashboard/chat/chat.constants";
import { appendAssistantChunk } from "@/components/home-dashboard/chat/chatMessages";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface RevealPaceQueueInput {
  assistantId: string;
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  signal: AbortSignal;
}

export function createRevealPaceQueue(input: RevealPaceQueueInput) {
  let queue = "";
  let paceTimer: ReturnType<typeof setTimeout> | null = null;
  let resolveIdle: (() => void) | null = null;
  let idlePromise: Promise<void> | null = null;
  const markIdle = () => {
    resolveIdle?.();
    resolveIdle = null;
    idlePromise = null;
  };

  const tick = () => {
    paceTimer = null;
    if (input.signal.aborted || !queue) {
      markIdle();
      return;
    }
    const chunk = queue.slice(0, CHAT_REVEAL_CHARS);
    queue = queue.slice(CHAT_REVEAL_CHARS);
    input.setMessages((prev) => appendAssistantChunk(prev, input.assistantId, chunk));
    paceTimer = setTimeout(tick, CHAT_REVEAL_TICK_MS);
  };

  return {
    get isBusy() {
      return Boolean(queue || paceTimer);
    },
    enqueue(text: string) {
      if (!text || input.signal.aborted) return;
      queue += text;
      if (!idlePromise) idlePromise = new Promise((r) => { resolveIdle = r; });
      if (!paceTimer) paceTimer = setTimeout(tick, CHAT_REVEAL_TICK_MS);
    },
    appendNow(text: string) {
      if (!text || input.signal.aborted) return;
      input.setMessages((prev) => appendAssistantChunk(prev, input.assistantId, text));
    },
    clear() {
      if (paceTimer) clearTimeout(paceTimer);
      paceTimer = null;
      queue = "";
      markIdle();
    },
    waitUntilIdle: async () => { if (idlePromise) await idlePromise; },
  };
}
