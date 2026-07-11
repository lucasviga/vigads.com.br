import { ChatCloseIcon } from "@/components/home-dashboard/chat/ChatIcons";
import { ChatComposer } from "@/components/home-dashboard/chat/ChatComposer";
import { CHAT_SIDEBAR_TITLE } from "@/components/home-dashboard/chat/chat.constants";
import { ChatMessageList } from "@/components/home-dashboard/chat/ChatMessageList";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

interface ChatSidebarProps {
  isOpen: boolean;
  isStreaming: boolean;
  loadingPhrase: string | null;
  messages: ChatMessage[];
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export function ChatSidebar({
  isOpen,
  isStreaming,
  loadingPhrase,
  messages,
  query,
  onQueryChange,
  onSubmit,
  onClose,
}: ChatSidebarProps) {
  return (
    <aside
      className="chatSidebar"
      aria-label={CHAT_SIDEBAR_TITLE}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
    >
      <header className="chatSidebarHeader">
        <h2 className="chatSidebarTitle">{CHAT_SIDEBAR_TITLE}</h2>
        <button
          type="button"
          className="chatSidebarClose"
          onClick={onClose}
          aria-label="Close chat sidebar"
        >
          <ChatCloseIcon />
        </button>
      </header>
      <div className="chatSidebarMessages">
        <ChatMessageList messages={messages} loadingPhrase={loadingPhrase} />
      </div>
      <ChatComposer
        query={query}
        isDisabled={isStreaming}
        onQueryChange={onQueryChange}
        onSubmit={onSubmit}
      />
    </aside>
  );
}
