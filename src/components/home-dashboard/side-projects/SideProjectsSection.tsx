import { SideProjectCard } from "@/components/home-dashboard/side-projects/SideProjectCard";
import { getSideProjects } from "@/data/side-projects";

export function SideProjectsSection() {
  const projects = getSideProjects();

  return (
    <section className="sideProjects" aria-labelledby="side-projects-heading">
      <header className="sideProjectsHeader">
        <h2 id="side-projects-heading" className="sideProjectsTitle">
          Side projects
        </h2>
      </header>
      <div className="sideProjectsGrid">
        {projects.map((project) => (
          <SideProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
