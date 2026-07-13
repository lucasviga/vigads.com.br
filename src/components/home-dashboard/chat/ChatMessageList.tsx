import { ChatMessageBody } from "@/components/home-dashboard/chat/ChatMessageBody";
import { CHAT_SIDEBAR_EMPTY } from "@/components/home-dashboard/chat/chat.constants";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface ChatMessageItemProps {
  message: ChatMessage;
  loadingPhrase: string | null;
}

function ChatMessageItem({ message, loadingPhrase }: ChatMessageItemProps) {
  const isStreaming = message.status === "streaming";
  const displayText =
    isStreaming && !message.text && loadingPhrase ? loadingPhrase : message.text;
  const isLoadingPhrase = Boolean(isStreaming && !message.text && loadingPhrase);

  return (
    <li
      className={
        message.role === "user"
          ? "chatMessage chatMessageUser"
          : "chatMessage chatMessageAssistant"
      }
    >
      <span className="chatMessageRole">
        {message.role === "user" ? "You" : "Lucas"}
      </span>
      <ChatMessageBody
        text={displayText}
        isLoadingPhrase={isLoadingPhrase}
        isStreaming={isStreaming}
      />
    </li>
  );
}

interface ChatMessageListProps {
  messages: ChatMessage[];
  loadingPhrase: string | null;
}

export function ChatMessageList({ messages, loadingPhrase }: ChatMessageListProps) {
  if (messages.length === 0) {
    return <p className="chatSidebarEmpty">{CHAT_SIDEBAR_EMPTY}</p>;
  }

  return (
    <ul className="chatMessageList" role="log" aria-live="polite" aria-relevant="additions">
      {messages.map((message) => (
        <ChatMessageItem key={message.id} message={message} loadingPhrase={loadingPhrase} />
      ))}
    </ul>
  );
}
