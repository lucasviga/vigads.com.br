import Link from "next/link";

import type { SideProject } from "@/components/home-dashboard/side-projects/side-projects.types";

interface SideProjectCardProps {
  project: SideProject;
}

export function SideProjectCard({ project }: SideProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="sideProjectCard">
      <div className="sideProjectCover" aria-hidden="true">
        {project.coverSrc ? (
          <img src={project.coverSrc} alt="" className="sideProjectCoverImage" />
        ) : (
          <span className="sideProjectCoverMark">{project.title.slice(0, 1)}</span>
        )}
      </div>
      <div className="sideProjectCardBody">
        <h3 className="sideProjectCardTitle">
          {project.title}
          <span className="sideProjectCardArrow" aria-hidden="true">
            ↗
          </span>
        </h3>
        <p className="sideProjectCardDescription">{project.cardDescription}</p>
      </div>
    </Link>
  );
}
