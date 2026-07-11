import { experience } from "@/data/experience";

import type { HighlightSlide } from "@/components/home-dashboard/home-dashboard.types";

const CARD_DETAIL_LIMIT = 110;

function truncateText(text: string, limit = CARD_DETAIL_LIMIT): string {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).trimEnd()}…`;
}

export function formatTenure(start: string): string {
  const [year, month] = start.split("-").map(Number);
  if (!year || !month) return "";

  const startDate = new Date(year, month - 1, 1);
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearLabel = years === 1 ? "yr" : "yrs";
  const monthLabel = months === 1 ? "mo" : "mos";

  if (years === 0) return `${months} ${monthLabel}`;
  if (months === 0) return `${years} ${yearLabel}`;
  return `${years} ${yearLabel} ${months} ${monthLabel}`;
}

export function mapExperienceSlides(): HighlightSlide[] {
  return experience.map((job) => {
    const responsibilities = job.responsibilities?.join(" ") ?? "";

    return {
      title: job.role,
      company: job.company.name,
      period: job.period.label,
      detail: truncateText(responsibilities),
      fullDetail: responsibilities,
    };
  });
}

export const EXPERIENCE_SLIDES = mapExperienceSlides();
