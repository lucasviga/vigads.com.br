import { experience } from "@/data/experience";

import type { HighlightSlide } from "@/components/home-dashboard/home-dashboard.types";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

const CARD_DETAIL_LIMIT = 140;

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

function buildSlideMeta(job: ExperienceJob): string | undefined {
  if (job.workModel && job.employmentType) {
    return `${job.workModel} · ${job.employmentType}`;
  }
  return job.employmentType;
}

function buildSlideDetail(job: ExperienceJob): string {
  if (job.summary) return job.summary;
  return job.responsibilities?.join(" ") ?? "";
}

export function mapExperienceSlides(): HighlightSlide[] {
  return experience.map((job) => {
    const detail = buildSlideDetail(job);

    return {
      title: job.role,
      company: job.company.name,
      period: job.period.label,
      meta: buildSlideMeta(job),
      detail: truncateText(detail),
      fullDetail: detail,
    };
  });
}

export const EXPERIENCE_SLIDES = mapExperienceSlides();
