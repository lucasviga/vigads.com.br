import { TimelineSection } from "@/components/home-dashboard/timeline/TimelineSection";

interface ExperienceBulletListProps {
  label: string;
  items: string[];
}

export function ExperienceBulletList({
  label,
  items,
}: ExperienceBulletListProps) {
  if (!items.length) return null;

  return (
    <TimelineSection label={label}>
      <ul className="timelineBody">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </TimelineSection>
  );
}
