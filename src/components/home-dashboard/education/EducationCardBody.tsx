import { InsightCard } from "@/components/home-dashboard/insight/InsightCard";
import { InsightHeader } from "@/components/home-dashboard/insight/InsightHeader";
import { GraduationIcon } from "@/components/home-dashboard/insight/InsightIcons";
import { EDUCATION_CARD_ITEMS } from "@/components/home-dashboard/education/education.mappers";
import { EducationListItem } from "@/components/home-dashboard/education/EducationListItem";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

interface EducationCardBodyProps {
  onViewAll: (id: CardId) => void;
}

export function EducationCardBody({ onViewAll }: EducationCardBodyProps) {
  return (
    <InsightCard>
      <InsightHeader
        title="Education"
        icon={GraduationIcon}
        cardId="education"
        onViewAll={onViewAll}
        viewAllLabel="See more"
      />
      <div className="eduListWrap">
        <ul className="eduList" aria-label="Education highlights">
          {EDUCATION_CARD_ITEMS.map((item) => (
            <EducationListItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="eduFade" aria-hidden="true" />
      </div>
    </InsightCard>
  );
}
