"use client";

import { techs } from "@/data/techs";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";
import { InsightCard } from "@/components/home-dashboard/insight/InsightCard";
import { InsightHeader } from "@/components/home-dashboard/insight/InsightHeader";
import { SkillsIcon } from "@/components/home-dashboard/insight/InsightIcons";
import { SkillsCategorySlide } from "@/components/home-dashboard/skills/SkillsCategorySlide";
import { SkillsStoryProgress } from "@/components/home-dashboard/skills/SkillsStoryProgress";
import type { CardId } from "@/components/home-dashboard/home-dashboard.types";

interface SkillsCardBodyProps {
  onViewAll: (id: CardId) => void;
}

export function SkillsCardBody({ onViewAll }: SkillsCardBodyProps) {
  const categories = techs;
  const carousel = useAutoCarousel(categories.length);
  const category = categories[carousel.index] ?? categories[0];

  return (
    <InsightCard>
      <div
        className="skillsCardShell"
        onMouseEnter={carousel.pause}
        onMouseLeave={carousel.resume}
      >
        <InsightHeader
          title="Skills"
          icon={SkillsIcon}
          cardId="skills"
          onViewAll={onViewAll}
          viewAllLabel="See more"
        />
        <SkillsStoryProgress
          index={carousel.index}
          total={carousel.total}
          paused={carousel.paused}
          reduceMotion={carousel.reduceMotion}
          intervalMs={carousel.intervalMs}
          onGoTo={carousel.goTo}
        />
        <SkillsCategorySlide role={category.role} skills={category.techs} />
      </div>
    </InsightCard>
  );
}
