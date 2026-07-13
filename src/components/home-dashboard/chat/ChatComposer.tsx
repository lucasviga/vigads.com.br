import { ChatSendIcon } from "@/components/home-dashboard/chat/ChatIcons";
import {
  CHAT_INPUT_LABEL,
  CHAT_SIDEBAR_PLACEHOLDER,
} from "@/components/home-dashboard/chat/chat.constants";

interface ChatComposerProps {
  query: string;
  isDisabled: boolean;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
}

export function ChatComposer({
  query,
  isDisabled,
  onQueryChange,
  onSubmit,
}: ChatComposerProps) {
  return (
    <form
      className="chatSidebarComposer"
      onSubmit={(event) => {
        event.preventDefault();
        if (!isDisabled) onSubmit();
      }}
    >
      <label className="sr-only" htmlFor="sidebar-chat-input">
        {CHAT_INPUT_LABEL}
      </label>
      <textarea
        id="sidebar-chat-input"
        className="chatSidebarTextarea"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key !== "Enter" || event.shiftKey || isDisabled) return;
          event.preventDefault();
          onSubmit();
        }}
        placeholder={CHAT_SIDEBAR_PLACEHOLDER}
        rows={3}
        autoComplete="off"
        disabled={isDisabled}
      />
      <button
        type="submit"
        className="sendButton chatSidebarSend"
        aria-label="Send question"
        disabled={isDisabled}
      >
        <ChatSendIcon />
      </button>
    </form>
  );
}
