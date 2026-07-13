import Image from "next/image";

import { cn } from "@/utils/cn";
import type { TimelineItemProps } from "@/components/home-dashboard/timeline/timeline.types";

export function TimelineItem({
  icon: Icon,
  title,
  period,
  tone = "past",
  logoUrl,
  children,
}: TimelineItemProps) {
  const toneClass = tone === "current" ? "timelineItemCurrent" : "timelineItemPast";
  const showHeader = Boolean(title || period);

  return (
    <li className={cn("timelineItem", toneClass)}>
      <div className="timelineRail">
        <div className={cn("timelineNode", logoUrl && "timelineNodeLogo")}>
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt=""
              width={36}
              height={36}
              className="timelineNodeImage"
            />
          ) : (
            <Icon />
          )}
        </div>
      </div>
      <div className="timelineContent">
        {showHeader ? (
          <>
            {period ? <p className="timelinePeriod">{period}</p> : null}
            {title ? <h3 className="timelineTitle">{title}</h3> : null}
          </>
        ) : null}
        {children}
      </div>
    </li>
  );
}
