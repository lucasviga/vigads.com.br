import type { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return <ol className="timeline">{children}</ol>;
}
