import type { ChatSseEvent } from "@/components/home-dashboard/chat/chat.types";

export function decodeChatSsePayload(raw: string): ChatSseEvent | null {
  try {
    const payload = JSON.parse(raw) as Record<string, unknown>;
    const type = payload.type;
    if (type === "meta") {
      return {
        type: "meta",
        sources: Array.isArray(payload.sources)
          ? payload.sources.filter((item): item is string => typeof item === "string")
          : undefined,
        cached: typeof payload.cached === "boolean" ? payload.cached : undefined,
      };
    }
    if (type === "token" && typeof payload.content === "string") {
      return { type: "token", content: payload.content };
    }
    if (type === "done") return { type: "done" };
    if (type === "error") {
      return {
        type: "error",
        message:
          typeof payload.message === "string" ? payload.message : "Request failed.",
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function pullSseDataLines(buffer: string): { events: string[]; rest: string } {
  const parts = buffer.split("\n\n");
  const rest = parts.pop() ?? "";
  const events: string[] = [];

  for (const part of parts) {
    for (const line of part.split("\n")) {
      if (!line.startsWith("data:")) continue;
      events.push(line.slice(5).trim());
    }
  }

  return { events, rest };
}
