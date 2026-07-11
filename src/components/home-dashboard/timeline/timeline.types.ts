import type { ReactNode } from "react";

import type { InsightIcon } from "@/components/home-dashboard/insight/InsightIcons";

export type TimelineTone = "current" | "past";

export interface TimelineItemProps {
  icon: InsightIcon;
  title?: string;
  period?: string;
  tone?: TimelineTone;
  logoUrl?: string;
  children?: ReactNode;
}
