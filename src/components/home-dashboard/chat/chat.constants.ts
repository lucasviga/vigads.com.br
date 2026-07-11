export const CHAT_EMPTY_HINT =
  "Type a question about my skills, experience, or education.";

export const CHAT_SIDEBAR_TITLE = "Ask Lucas";

export const CHAT_ERROR_FALLBACK =
  "Something went wrong while answering. Please try again in a moment.";

export const CHAT_LOADING_PHRASE_MS = 2400;

export const CHAT_MIN_LOADING_MS = 3200;

export const CHAT_LOADING_PHRASES = [
  "☕ Brewing a coffee...",
  "☕ Grinding the beans...",
  "☕ Pouring the espresso...",
  "☕ Almost ready...",
  "git pull knowledge...",
  "npm run think...",
  "Searching commits...",
  "Resolving dependencies...",
  "Compiling thoughts...",
  "Returning 200 OK...",
] as const;

export const CHAT_API_BASE_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL ?? "http://localhost:3333";
