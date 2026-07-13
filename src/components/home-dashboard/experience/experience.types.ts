export type ExperienceProject = {
  name: string;
  overview: string;
  contributions: string[];
};

export type ExperienceJob = {
  id: string;
  role: string;
  employmentType: string;
  workModel?: string;
  period: {
    start: string;
    end?: string | null;
    label: string;
    current?: boolean;
  };
  location: { city: string; state: string; country?: string };
  company: { name: string; description?: string };
  summary?: string;
  responsibilities?: string[];
  projects?: ExperienceProject[];
  technologies?: string[];
};
