"use client";

import { useCallback, useState } from "react";

import type { CardId } from "@/components/home-dashboard/home-dashboard.types";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { usePortfolioChat } from "@/hooks/usePortfolioChat";

export function useHomeDashboard() {
  const chat = usePortfolioChat();
  const [openCard, setOpenCard] = useState<CardId | null>(null);
  const closeCard = useCallback(() => setOpenCard(null), []);

  useEscapeKey(chat.isChatOpen && !openCard, chat.closeChat);

  return {
    query: chat.query,
    messages: chat.messages,
    heroHint: chat.heroHint,
    isChatOpen: chat.isChatOpen,
    isStreaming: chat.isStreaming,
    loadingPhrase: chat.loadingPhrase,
    openCard,
    setQuery: chat.setQuery,
    submitChat: chat.submitChat,
    openChat: chat.openChat,
    closeChat: chat.closeChat,
    toggleChat: chat.toggleChat,
    setOpenCard,
    closeCard,
  };
}
