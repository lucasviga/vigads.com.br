import {
  BuildingIcon,
  CalendarIcon,
} from "@/components/home-dashboard/insight/InsightIcons";
import type { HighlightSlide } from "@/components/home-dashboard/home-dashboard.types";

interface InsightSlideProps {
  slide: HighlightSlide;
}

export function InsightSlide({ slide }: InsightSlideProps) {
  return (
    <div className="insightBody" aria-live="polite">
      <h3 className="insightTitle">{slide.title}</h3>
      <div className="insightMeta">
        {slide.company ? (
          <span className="insightMetaItem">
            <BuildingIcon />
            {slide.company}
          </span>
        ) : null}
        {slide.period ? (
          <span className="insightMetaItem">
            <CalendarIcon />
            {slide.period}
          </span>
        ) : null}
      </div>
      {slide.detail ? (
        <p className="insightDetail">{slide.detail}</p>
      ) : null}
    </div>
  );
}
