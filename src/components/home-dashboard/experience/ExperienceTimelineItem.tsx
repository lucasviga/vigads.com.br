import { BriefcaseIcon } from "@/components/home-dashboard/insight/InsightIcons";
import { ExperienceTimelineBody } from "@/components/home-dashboard/experience/ExperienceTimelineBody";
import { TimelineItem } from "@/components/home-dashboard/timeline/TimelineItem";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceTimelineItemProps {
  job: ExperienceJob;
}

export function ExperienceTimelineItem({ job }: ExperienceTimelineItemProps) {
  const tone = job.period.current ? "current" : "past";

  return (
    <TimelineItem icon={BriefcaseIcon} tone={tone}>
      <ExperienceTimelineBody job={job} />
    </TimelineItem>
  );
}
