import { educations } from "@/data/education";
import { getEducationLogoUrl } from "@/components/home-dashboard/education/education.mappers";
import { GraduationIcon } from "@/components/home-dashboard/insight/InsightIcons";
import { Timeline } from "@/components/home-dashboard/timeline/Timeline";
import { TimelineItem } from "@/components/home-dashboard/timeline/TimelineItem";

export function ModalEducation() {
  return (
    <Timeline>
      {educations.map((item) => {
        const period = `${item.start_date} – ${item.end_date}`;
        const logoUrl = getEducationLogoUrl(item.institution);

        return (
          <TimelineItem
            key={item.id}
            icon={GraduationIcon}
            title={item.description}
            period={period}
            logoUrl={logoUrl}
          >
            <div className="timelineMeta">
              <span className="timelineLabel">{item.institution}</span>
            </div>
            {item.links.certificate_url ? (
              <a
                href={item.links.certificate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="timelineLink"
              >
                View certificate
              </a>
            ) : null}
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
