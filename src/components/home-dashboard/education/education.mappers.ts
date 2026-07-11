import { educations } from "@/data/education";

const BACHELOR_INSTITUTION = "Universidade Paulista";

const EDUCATION_LOGOS: Record<string, string> = {
  "Wise Up": "/images/wiseup-logo.png",
  Rocketseat: "/images/rocketseat-logo.jpeg",
};

export interface EducationCardItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  featured: boolean;
  logoUrl?: string;
}

function isBachelorComputerScience(item: {
  institution: string;
  description: string;
}): boolean {
  const text = `${item.institution} ${item.description}`.toLowerCase();
  const isBachelor =
    text.includes("bachelor") || text.includes("bachelors");
  const isCs =
    text.includes("computer science") ||
    text.includes("ciência da computação");

  return item.institution === BACHELOR_INSTITUTION || (isBachelor && isCs);
}

function formatEducationYear(endDate: string): string {
  const year = endDate.match(/\d{4}/)?.[0];
  return year ? `in ${year}` : endDate;
}

export function mapEducationCardItems(): EducationCardItem[] {
  const items = educations.map((item) => {
    const featured = isBachelorComputerScience(item);

    return {
      id: item.id,
      title: item.description.replace(/\.$/, ""),
      institution: item.institution,
      period: formatEducationYear(item.end_date),
      featured,
      logoUrl: EDUCATION_LOGOS[item.institution],
    };
  });

  return [...items].sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getEducationLogoUrl(institution: string): string | undefined {
  return EDUCATION_LOGOS[institution];
}

export const EDUCATION_CARD_ITEMS = mapEducationCardItems();
