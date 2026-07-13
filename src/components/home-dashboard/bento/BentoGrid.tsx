import type { CardId } from "@/components/home-dashboard/home-dashboard.types";
import { AboutCardBody } from "@/components/home-dashboard/about/AboutCardBody";
import { BentoCard } from "@/components/home-dashboard/bento/BentoCard";
import { EducationCardBody } from "@/components/home-dashboard/education/EducationCardBody";
import { ExperienceCardBody } from "@/components/home-dashboard/experience/ExperienceCardBody";
import { FollowCardBody } from "@/components/home-dashboard/follow/FollowCardBody";
import { SkillsCardBody } from "@/components/home-dashboard/skills/SkillsCardBody";

interface BentoGridProps {
  onOpenCard: (id: CardId) => void;
}

export function BentoGrid({ onOpenCard }: BentoGridProps) {
  return (
    <section className="grid" aria-label="Portfolio highlights">
      <BentoCard
        id="about"
        title="About me"
        areaClass="cardAbout cardFlush"
        hideTitle
        onOpen={onOpenCard}
      >
        <AboutCardBody />
      </BentoCard>

      <BentoCard
        id="experience"
        areaClass="cardExperience"
        interactive={false}
      >
        <ExperienceCardBody onViewAll={onOpenCard} />
      </BentoCard>

      <BentoCard
        id="education"
        areaClass="cardEducation"
        interactive={false}
      >
        <EducationCardBody onViewAll={onOpenCard} />
      </BentoCard>

      <BentoCard id="skills" areaClass="cardSkills" interactive={false}>
        <SkillsCardBody onViewAll={onOpenCard} />
      </BentoCard>

      <BentoCard id="follow" areaClass="cardFollow" interactive={false}>
        <FollowCardBody />
      </BentoCard>
    </section>
  );
}
