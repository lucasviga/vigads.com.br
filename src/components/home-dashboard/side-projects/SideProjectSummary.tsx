import type { SideProject } from "@/components/home-dashboard/side-projects/side-projects.types";

interface SideProjectSummaryProps {
  project: SideProject;
}

function ProjectExternalLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className="projectMetaLink"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function SideProjectSummary({ project }: SideProjectSummaryProps) {
  return (
    <header className="projectSummary">
      <h1 className="projectTitle">{project.title}</h1>
      <p className="projectLead">{project.summary}</p>
      <p className="projectMotivation">{project.motivation}</p>
      <div className="projectSummaryMeta">
        {project.websiteUrl ? (
          <ProjectExternalLink href={project.websiteUrl} label="Website" />
        ) : null}
        {project.githubUrl ? (
          <ProjectExternalLink href={project.githubUrl} label="GitHub" />
        ) : null}
      </div>
      <ul className="projectTechRow" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech} className="projectTechChip">
            {tech}
          </li>
        ))}
      </ul>
    </header>
  );
}
