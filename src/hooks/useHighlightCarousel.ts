"use client";

import { useCallback, useState } from "react";

export function useHighlightCarousel<T>(slides: T[]) {
  const [index, setIndex] = useState(0);
  const slide = slides[index] ?? slides[0];
  const total = slides.length;

  const showPrevious = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const goTo = useCallback((nextIndex: number) => {
    setIndex(nextIndex);
  }, []);

  return { slide, index, total, showPrevious, showNext, goTo };
}
