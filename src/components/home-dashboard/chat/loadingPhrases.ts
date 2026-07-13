import type { MutableRefObject } from "react";

import {
  CHAT_LOADING_PHRASE_MS,
  CHAT_LOADING_PHRASES,
} from "@/components/home-dashboard/chat/chat.constants";

export function startLoadingPhraseRotation(
  phraseIndexRef: MutableRefObject<number>,
  setLoadingPhrase: (phrase: string | null) => void,
): () => void {
  setLoadingPhrase(CHAT_LOADING_PHRASES[0]);
  phraseIndexRef.current = 0;

  const phraseTimer = window.setInterval(() => {
    phraseIndexRef.current += 1;
    setLoadingPhrase(CHAT_LOADING_PHRASES[phraseIndexRef.current % CHAT_LOADING_PHRASES.length]);
  }, CHAT_LOADING_PHRASE_MS);

  return () => {
    window.clearInterval(phraseTimer);
    setLoadingPhrase(null);
  };
}
