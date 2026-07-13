import {
  decodeChatSsePayload,
  pullSseDataLines,
} from "@/components/home-dashboard/chat/parseChatSse";
import type { ChatSseEvent } from "@/components/home-dashboard/chat/chat.types";

export async function emitSseChunks(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  onEvent: (event: ChatSseEvent) => void,
): Promise<void> {
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const parsed = pullSseDataLines(buffer);
    buffer = parsed.rest;
    for (const raw of parsed.events) {
      const event = decodeChatSsePayload(raw);
      if (event) onEvent(event);
    }
  }

  if (!buffer.trim()) return;
  const { events } = pullSseDataLines(`${buffer}\n\n`);
  for (const raw of events) {
    const event = decodeChatSsePayload(raw);
    if (event) onEvent(event);
  }
}
