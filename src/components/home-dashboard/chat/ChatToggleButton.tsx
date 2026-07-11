import {
  ChatBubbleIcon,
  ChatCloseIcon,
} from "@/components/home-dashboard/chat/ChatIcons";

interface ChatToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatToggleButton({ isOpen, onToggle }: ChatToggleButtonProps) {
  return (
    <button
      type="button"
      className="chatToggleButton"
      onClick={onToggle}
      aria-label={isOpen ? "Close chat sidebar" : "Open chat sidebar"}
      aria-pressed={isOpen}
    >
      {isOpen ? <ChatCloseIcon /> : <ChatBubbleIcon />}
    </button>
  );
}
