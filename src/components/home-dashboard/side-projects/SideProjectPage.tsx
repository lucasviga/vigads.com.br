import Link from "next/link";

import { SideProjectArticle } from "@/components/home-dashboard/side-projects/SideProjectArticle";
import { SideProjectSummary } from "@/components/home-dashboard/side-projects/SideProjectSummary";
import type { SideProject } from "@/components/home-dashboard/side-projects/side-projects.types";

interface SideProjectPageProps {
  project: SideProject;
}

export function SideProjectPage({ project }: SideProjectPageProps) {
  return (
    <div className="projectPage" data-home-shell>
      <div className="projectPageInner">
        <nav className="projectNav" aria-label="Project">
          <Link href="/" className="projectNavBrand">
            Lucas Viga
          </Link>
          <Link href="/" className="projectNavBack">
            ← Back home
          </Link>
        </nav>
        <article className="projectContent">
          <SideProjectSummary project={project} />
          <SideProjectArticle
            contributions={project.contributions}
            features={project.features}
            fundamentals={project.fundamentals}
          />
        </article>
      </div>
    </div>
  );
}
