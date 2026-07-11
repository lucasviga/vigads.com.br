import { ExperienceTimelineHighlight } from "@/components/home-dashboard/experience/ExperienceTimelineHighlight";
import { TimelineSection } from "@/components/home-dashboard/timeline/TimelineSection";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceTimelineBodyProps {
  job: ExperienceJob;
}

export function ExperienceTimelineBody({ job }: ExperienceTimelineBodyProps) {
  const location = `${job.location.city}, ${job.location.state}`;

  return (
    <>
      <div className="timelineMetaRow">
        <span className="timelinePeriod">{job.period.label}</span>
        <h3 className="timelineTitle">{job.role}</h3>
        <p className="timelineSupport">
          <span className="timelineCompany">{job.company.name}</span>
          <span className="timelineSupportSep" aria-hidden="true">
            ·
          </span>
          <span className="timelinePlace">{location}</span>
          <span className="timelineSupportSep" aria-hidden="true">
            ·
          </span>
          <span className="timelineType">{job.employmentType}</span>
        </p>
      </div>
      {job.responsibilities?.length ? (
        <TimelineSection label="Responsibilities">
          <ul className="timelineBody">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TimelineSection>
      ) : null}
      {job.highlights?.length ? (
        <TimelineSection label="Highlights">
          {job.highlights.map((highlight) => (
            <ExperienceTimelineHighlight
              key={highlight.title}
              highlight={highlight}
            />
          ))}
        </TimelineSection>
      ) : null}
      {job.skills?.length ? (
        <TimelineSection label="Skills">
          <ul className="timelineChipRow">
            {job.skills.map((skill) => (
              <li key={skill} className="timelineChip">
                {skill}
              </li>
            ))}
          </ul>
        </TimelineSection>
      ) : null}
    </>
  );
}
