import { cn } from "@/utils/cn";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/home-dashboard/insight/InsightIcons";

interface InsightNavProps {
  title: string;
  index: number;
  total: number;
  onGoTo: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function InsightNav({
  title,
  index,
  total,
  onGoTo,
  onPrevious,
  onNext,
}: InsightNavProps) {
  return (
    <div className="insightFooter">
      <button
        type="button"
        className="insightArrow"
        aria-label={`Previous ${title} slide`}
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
      >
        <ChevronLeftIcon />
      </button>

      <div
        className="insightDashRow"
        role="tablist"
        aria-label={`${title} slides`}
      >
        {Array.from({ length: total }, (_, slideIndex) => {
          const isActive = slideIndex === index;

          return (
            <button
              key={slideIndex}
              type="button"
              role="tab"
              className={cn("insightDash", isActive && "insightDashActive")}
              aria-label={`${title} slide ${slideIndex + 1} of ${total}`}
              aria-selected={isActive}
              onClick={(event) => {
                event.stopPropagation();
                onGoTo(slideIndex);
              }}
            />
          );
        })}
      </div>

      <button
        type="button"
        className="insightArrow"
        aria-label={`Next ${title} slide`}
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
