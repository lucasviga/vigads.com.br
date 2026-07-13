import { formatTenure } from "@/components/home-dashboard/experience/experience.mappers";
import type { ExperienceJob } from "@/components/home-dashboard/experience/experience.types";

interface ExperienceCurrentSummaryProps {
  job: ExperienceJob;
}

export function ExperienceCurrentSummary({
  job,
}: ExperienceCurrentSummaryProps) {
  const location = `${job.location.city}, ${job.location.state}`;
  const tenure = formatTenure(job.period.start);

  return (
    <div className="experienceSummary" aria-label="Current role summary">
      <div className="experienceSummaryTop">
        <h3 className="experienceSummaryHeading">Current role</h3>
        {job.period.current ? (
          <span className="experienceLiveBadge">
            <span className="experienceLiveDot" aria-hidden="true" />
            {job.workModel ?? "Current"}
          </span>
        ) : null}
      </div>
      <dl className="experienceSummaryList">
        <div className="experienceSummaryRow">
          <dt>Role</dt>
          <dd>{job.role}</dd>
        </div>
        <div className="experienceSummaryRow">
          <dt>Company</dt>
          <dd>{job.company.name}</dd>
        </div>
        <div className="experienceSummaryRow">
          <dt>Tenure</dt>
          <dd>{tenure}</dd>
        </div>
        <div className="experienceSummaryRow">
          <dt>Type</dt>
          <dd>{job.employmentType}</dd>
        </div>
        <div className="experienceSummaryRow">
          <dt>Location</dt>
          <dd>{location}</dd>
        </div>
      </dl>
      {job.company.description ? (
        <p className="experienceSummaryNote">{job.company.description}</p>
      ) : null}
    </div>
  );
}
