import type { InsightIcon } from "@/components/home-dashboard/insight/InsightIcons";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

interface InsightHeaderProps {
  title: string;
  icon: InsightIcon;
  cardId: CardId;
  onViewAll?: (id: CardId) => void;
  viewAllLabel?: string;
}

export function InsightHeader({
  title,
  icon: Icon,
  cardId,
  onViewAll,
  viewAllLabel = "View All",
}: InsightHeaderProps) {
  return (
    <div className="insightTop">
      <div className="insightBrand">
        <span className="insightIcon">
          <Icon />
        </span>
        <h2 className="insightLabel">{title}</h2>
      </div>
      {onViewAll ? (
        <button
          type="button"
          className="insightViewAll"
          onClick={(event) => {
            event.stopPropagation();
            onViewAll(cardId);
          }}
        >
          {viewAllLabel}
        </button>
      ) : null}
    </div>
  );
}
