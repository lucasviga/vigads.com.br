import type { ExperienceProject } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceProjectCardProps {
  project: ExperienceProject;
}

export function ExperienceProjectCard({
  project,
}: ExperienceProjectCardProps) {
  return (
    <article className="timelineProject">
      <h5 className="timelineProjectTitle">{project.name}</h5>
      <p className="timelineProjectOverview">{project.overview}</p>
      <ul className="timelineBody">
        {project.contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
