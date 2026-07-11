export type ExperienceJob = {
  id: string;
  role: string;
  employmentType: string;
  period: {
    start: string;
    label: string;
    current?: boolean;
  };
  location: { city: string; state: string };
  company: { name: string; description?: string };
  responsibilities?: string[];
  highlights?: Array<{
    title: string;
    description: string;
    impact?: string;
    technologies?: string[];
  }>;
  skills?: string[];
};
