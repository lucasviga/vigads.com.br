"use client";

interface HomeChatProps {
  query: string;
  reply: string | null;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
}

export function HomeChat({
  query,
  reply,
  onQueryChange,
  onSubmit,
}: HomeChatProps) {
  return (
    <section className="hero" aria-label="Ask about Lucas">
      <header className="heroIntro">
        <h1 className="heroGreeting">Hey there, welcome!</h1>
        <p className="heroTagline">
          {
            "< Explore my career, featured projects, and the technologies I use to create modern web experiences as a Front-End Software Engineer. />"
          }
        </p>
      </header>
      <form
        className="chatForm"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
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
          />
          <button
            type="submit"
            className="sendButton"
            aria-label="Send question"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </form>

      {reply ? (
        <p className="chatReply" role="status">
          {reply}
        </p>
      ) : null}
    </section>
  );
}
