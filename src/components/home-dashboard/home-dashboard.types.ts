export type CardId =
  | "about"
  | "experience"
  | "education"
  | "skills"
  | "follow";

export interface SocialLink {
  label: string;
  href: string;
  iconSrc: string;
}

export interface HighlightSlide {
  title: string;
  detail: string;
  meta?: string;
  company?: string;
  period?: string;
  fullDetail?: string;
}
