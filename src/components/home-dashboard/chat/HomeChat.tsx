"use client";

import { ChatSendIcon } from "@/components/home-dashboard/chat/ChatIcons";

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
        <h1 className="heroGreeting">Hey there, welcome!</h1>
        <p className="heroTagline">
          {"< Explore my career, featured projects, and the technologies I use to create modern web experiences as a Front-End Software Engineer. />"}
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
            Ask about skills, experience, or education
          </label>
          <input
            id="home-chat-input"
            className="chatInput"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Ask about my skills, experience, education..."
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
