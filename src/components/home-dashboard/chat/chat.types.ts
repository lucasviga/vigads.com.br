export type ChatRole = "user" | "assistant";

export type ChatMessageStatus = "streaming" | "complete" | "error";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  status?: ChatMessageStatus;
}

export type ChatSseEvent =
  | { type: "meta"; sources?: string[]; cached?: boolean }
  | { type: "token"; content: string }
  | { type: "done" }
  | { type: "error"; message: string };
