import {
  CHAT_API_BASE_URL,
  CHAT_ERROR_FALLBACK,
} from "@/components/home-dashboard/chat/chat.constants";
import { emitSseChunks } from "@/components/home-dashboard/chat/emitSseChunks";
import type { ChatSseEvent } from "@/components/home-dashboard/chat/chat.types";

interface StreamChatInput {
  question: string;
  signal: AbortSignal;
  onEvent: (event: ChatSseEvent) => void;
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { error?: string };
    if (typeof body.error === "string" && body.error.trim()) return body.error;
  } catch {
    /* fall through */
  }
  return CHAT_ERROR_FALLBACK;
}

export async function streamChatResponse({
  question,
  signal,
  onEvent,
}: StreamChatInput): Promise<void> {
  const response = await fetch(CHAT_API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
    body: JSON.stringify({ question }),
    signal,
  });

  if (!response.ok) {
    onEvent({ type: "error", message: await readErrorMessage(response) });
    return;
  }
  if (!response.body) {
    onEvent({ type: "error", message: CHAT_ERROR_FALLBACK });
    return;
  }

  await emitSseChunks(response.body.getReader(), onEvent);
}
