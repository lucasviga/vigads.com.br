import { ExperienceJobSections } from "@/components/home-dashboard/experience/ExperienceJobSections";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceTimelineBodyProps {
  job: ExperienceJob;
}

export function ExperienceTimelineBody({ job }: ExperienceTimelineBodyProps) {
  const location = `${job.location.city}, ${job.location.state}`;
  const supportParts = [
    job.company.name,
    location,
    job.employmentType,
    job.workModel,
  ].filter(Boolean);

  return (
    <>
      <div className="timelineMetaRow">
        <span className="timelinePeriod">{job.period.label}</span>
        <h3 className="timelineTitle">{job.role}</h3>
        <p className="timelineSupport">
          {supportParts.map((part, index) => (
            <span key={`${part}-${index}`}>
              {index > 0 ? (
                <span className="timelineSupportSep" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <span
                className={
                  index === 0 ? "timelineCompany" : "timelineSupportPart"
                }
              >
                {part}
              </span>
            </span>
          ))}
        </p>
      </div>
      {job.summary ? <p className="timelineSummary">{job.summary}</p> : null}
      <ExperienceJobSections job={job} />
    </>
  );
}
