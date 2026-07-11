"use client";

import { useEffect } from "react";

export function useEscapeKey(isActive: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!isActive) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isActive, onEscape]);
}
