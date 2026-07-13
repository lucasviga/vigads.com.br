"use client";

import { useHighlightCarousel } from "@/hooks/useHighlightCarousel";
import { EXPERIENCE_SLIDES } from "@/components/home-dashboard/experience/experience.mappers";
import { InsightCard } from "@/components/home-dashboard/insight/InsightCard";
import { InsightHeader } from "@/components/home-dashboard/insight/InsightHeader";
import { InsightNav } from "@/components/home-dashboard/insight/InsightNav";
import { InsightSlide } from "@/components/home-dashboard/insight/InsightSlide";
import { BriefcaseIcon } from "@/components/home-dashboard/insight/InsightIcons";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

interface ExperienceCardBodyProps {
  onViewAll: (id: CardId) => void;
}

export function ExperienceCardBody({ onViewAll }: ExperienceCardBodyProps) {
  const { slide, index, total, goTo, showPrevious, showNext } =
    useHighlightCarousel(EXPERIENCE_SLIDES);

  return (
    <InsightCard>
      <InsightHeader
        title="Experience"
        icon={BriefcaseIcon}
        cardId="experience"
        onViewAll={onViewAll}
      />
      <InsightSlide slide={slide} />
      <InsightNav
        title="Experience"
        index={index}
        total={total}
        onGoTo={goTo}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </InsightCard>
  );
}
