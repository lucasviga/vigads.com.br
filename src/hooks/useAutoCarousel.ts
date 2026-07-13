"use client";

import { useCallback, useEffect, useState } from "react";

const AUTO_INTERVAL_MS = 3500;

export function useAutoCarousel(total: number, intervalMs = AUTO_INTERVAL_MS) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (total <= 0) return;
      setIndex(((nextIndex % total) + total) % total);
    },
    [total],
  );

  const showNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);

    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || total <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, total, intervalMs, index]);

  return {
    index,
    total,
    paused,
    reduceMotion,
    intervalMs,
    goTo,
    showNext,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
