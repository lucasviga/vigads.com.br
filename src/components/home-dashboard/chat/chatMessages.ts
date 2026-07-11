import type { ChatMessage, ChatRole } from "@/components/home-dashboard/chat/chat.types";

export function createChatMessage(
  role: ChatRole,
  text: string,
  status?: ChatMessage["status"],
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    status,
  };
}

export function patchAssistantMessage(
  messages: ChatMessage[],
  assistantId: string,
  patch: Partial<Pick<ChatMessage, "text" | "status">>,
): ChatMessage[] {
  return messages.map((message) => {
    if (message.id !== assistantId) return message;
    return {
      ...message,
      text: patch.text ?? message.text,
      status: patch.status ?? message.status,
    };
  });
}
