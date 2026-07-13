"use client";

import { ChatSendIcon } from "@/components/home-dashboard/chat/ChatIcons";
import {
  CHAT_HERO_PLACEHOLDER,
  CHAT_INPUT_LABEL,
} from "@/components/home-dashboard/chat/chat.constants";

interface HomeChatProps {
  query: string;
  heroHint: string | null;
  isDisabled: boolean;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
}

export function HomeChat({
  query,
  heroHint,
  isDisabled,
  onQueryChange,
  onSubmit,
}: HomeChatProps) {
  return (
    <section className="hero" aria-label="Ask about Lucas">
      <header className="heroIntro">
        <h1 className="heroGreeting">Welcome</h1>
        <p className="heroTagline">
          {"< Get to know me better and explore my journey as Senior Software Engineer />"}
        </p>
      </header>
      <form
        className="chatForm"
        onSubmit={(event) => {
          event.preventDefault();
          if (!isDisabled) onSubmit();
        }}
      >
        <div className="chatBar">
          <label className="sr-only" htmlFor="home-chat-input">
            {CHAT_INPUT_LABEL}
          </label>
          <input
            id="home-chat-input"
            className="chatInput"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={CHAT_HERO_PLACEHOLDER}
            autoComplete="off"
            disabled={isDisabled}
          />
          <button type="submit" className="sendButton" aria-label="Send question" disabled={isDisabled}>
            <ChatSendIcon />
          </button>
        </div>
        {heroHint ? <p className="chatHeroHint" role="status">{heroHint}</p> : null}
      </form>
    </section>
  );
}
