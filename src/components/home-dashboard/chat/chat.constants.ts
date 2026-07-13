export const CHAT_EMPTY_HINT =
  "Ask Lucas about experience, skills, or projects…";

export const CHAT_HERO_PLACEHOLDER =
  "Ask Lucas about experience, skills, or projects…";

export const CHAT_SIDEBAR_PLACEHOLDER = "Continue with Lucas…";

export const CHAT_SIDEBAR_EMPTY =
  "Ask about experience, skills, projects, or anything else about Lucas.";

export const CHAT_INPUT_LABEL = "Ask about experience, skills, or projects";

export const CHAT_SIDEBAR_TITLE = "Ask Lucas";

export const CHAT_ERROR_FALLBACK =
  "Something went wrong while answering. Please try again in a moment.";

export const CHAT_LOADING_PHRASE_MS = 2400;

export const CHAT_MIN_LOADING_MS = 1200;

export const CHAT_REVEAL_CHARS = 3;

export const CHAT_REVEAL_TICK_MS = 18;

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
  process.env.NEXT_PUBLIC_CHAT_API_URL ??
  "https://web-api.vigads.com.br/chat";
