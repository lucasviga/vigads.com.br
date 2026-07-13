import { ExperienceBulletList } from "@/components/home-dashboard/experience/ExperienceBulletList";
import { ExperienceChipList } from "@/components/home-dashboard/experience/ExperienceChipList";
import { ExperienceProjectCard } from "@/components/home-dashboard/experience/ExperienceProjectCard";
import { TimelineSection } from "@/components/home-dashboard/timeline/TimelineSection";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceJobSectionsProps {
  job: ExperienceJob;
}

export function ExperienceJobSections({ job }: ExperienceJobSectionsProps) {
  return (
    <>
      {job.responsibilities?.length ? (
        <ExperienceBulletList
          label="Responsibilities"
          items={job.responsibilities}
        />
      ) : null}
      {job.projects?.length ? (
        <TimelineSection label="Key Projects">
          <div className="timelineProjectList">
            {job.projects.map((project) => (
              <ExperienceProjectCard key={project.name} project={project} />
            ))}
          </div>
        </TimelineSection>
      ) : null}
      {job.technologies?.length ? (
        <ExperienceChipList label="Technologies" items={job.technologies} />
      ) : null}
    </>
  );
}
