import type { ReactElement } from "react";

import type { CardId } from "@/components/home-dashboard/home-dashboard.types";
import { ModalAbout } from "@/components/home-dashboard/about/ModalAbout";
import { ModalEducation } from "@/components/home-dashboard/education/ModalEducation";
import { ModalExperience } from "@/components/home-dashboard/experience/ModalExperience";
import { ModalSkills } from "@/components/home-dashboard/skills/ModalSkills";

interface ModalBodyProps {
  cardId: CardId;
}

const MODAL_CONTENT: Partial<Record<CardId, () => ReactElement>> = {
  about: ModalAbout,
  experience: ModalExperience,
  education: ModalEducation,
  skills: ModalSkills,
};

export function ModalBody({ cardId }: ModalBodyProps) {
  const Content = MODAL_CONTENT[cardId];
  if (!Content) return null;
  return <Content />;
}
