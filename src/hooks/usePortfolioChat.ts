"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { submitPortfolioChat } from "@/components/home-dashboard/chat/submitPortfolioChat";
import type { ChatMessage } from "@/components/home-dashboard/chat/chat.types";

export function usePortfolioChat() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [heroHint, setHeroHint] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const phraseIndexRef = useRef(0);

  const openChat = useCallback(() => {
    setIsChatOpen(true);
    setHeroHint(null);
  }, []);
  const closeChat = useCallback(() => setIsChatOpen(false), []);
  const toggleChat = useCallback(() => {
    setIsChatOpen((open) => !open);
    setHeroHint(null);
  }, []);

  useEffect(() => () => abortRef.current?.abort(), []);

  const submitChat = useCallback(() => {
    void submitPortfolioChat({
      query,
      isChatOpen,
      isStreaming,
      abortRef,
      phraseIndexRef,
      setQuery,
      setMessages,
      setIsChatOpen,
      setHeroHint,
      setIsStreaming,
      setLoadingPhrase,
    });
  }, [isChatOpen, isStreaming, query]);

  return {
    query,
    messages,
    heroHint,
    isChatOpen,
    isStreaming,
    loadingPhrase,
    setQuery,
    submitChat,
    openChat,
    closeChat,
    toggleChat,
  };
}
