"use client";

import { useCallback, useState } from "react";

import { CHAT_STUB_REPLY } from "@/components/home-dashboard/chat/chat.constants";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

export function useHomeDashboard() {
  const [query, setQuery] = useState("");
  const [reply, setReply] = useState<string | null>(null);
  const [openCard, setOpenCard] = useState<CardId | null>(null);

  const submitChat = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setReply("Type a question about my skills, experience, or education.");
      return;
    }
    setReply(CHAT_STUB_REPLY);
  }, [query]);

  const closeCard = useCallback(() => {
    setOpenCard(null);
  }, []);

  return {
    query,
    reply,
    openCard,
    setQuery,
    submitChat,
    setOpenCard,
    closeCard,
  };
}
