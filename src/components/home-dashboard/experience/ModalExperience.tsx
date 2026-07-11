import { experience } from "@/data/experience";
import { ExperienceCurrentSummary } from "@/components/home-dashboard/experience/ExperienceCurrentSummary";
import { ExperienceTimelineItem } from "@/components/home-dashboard/experience/ExperienceTimelineItem";
import { Timeline } from "@/components/home-dashboard/timeline/Timeline";

export function ModalExperience() {
  const currentJob =
    experience.find((job) => job.period.current) ?? experience[0];

  return (
    <div className="experienceModalLayout">
      <aside className="experienceModalAside">
        <ExperienceCurrentSummary job={currentJob} />
      </aside>
      <div className="experienceModalMain">
        <Timeline>
          {experience.map((job) => (
            <ExperienceTimelineItem key={job.id} job={job} />
          ))}
        </Timeline>
      </div>
    </div>
  );
}
