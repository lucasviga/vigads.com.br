import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

interface BentoCardProps {
  id: CardId;
  title?: string;
  areaClass: string;
  children: ReactNode;
  onOpen?: (id: CardId) => void;
  interactive?: boolean;
  hideTitle?: boolean;
}

export function BentoCard({
  id,
  title,
  areaClass,
  children,
  onOpen,
  interactive = true,
  hideTitle = false,
}: BentoCardProps) {
  const showTitle = Boolean(title) && !hideTitle;
  const cardClass = cn("card", areaClass);

  if (!interactive || !onOpen) {
    return (
      <article className={cardClass}>
        {showTitle ? <h2 className="cardTitle">{title}</h2> : null}
        {children}
      </article>
    );
  }

  return (
    <article
      className={cardClass}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${title ?? id}, open details`}
      onClick={() => onOpen(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(id);
        }
      }}
    >
      {showTitle ? <h2 className="cardTitle">{title}</h2> : null}
      {children}
    </article>
  );
}
