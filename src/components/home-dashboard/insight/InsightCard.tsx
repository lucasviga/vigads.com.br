import type { ReactNode } from "react";

interface InsightCardProps {
  children: ReactNode;
}

export function InsightCard({ children }: InsightCardProps) {
  return <div className="insightCard">{children}</div>;
}
