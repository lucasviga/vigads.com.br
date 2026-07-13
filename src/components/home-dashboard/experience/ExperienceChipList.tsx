import { TimelineSection } from "@/components/home-dashboard/timeline/TimelineSection";

interface ExperienceChipListProps {
  label: string;
  items: string[];
}

export function ExperienceChipList({ label, items }: ExperienceChipListProps) {
  if (!items.length) return null;

  return (
    <TimelineSection label={label}>
      <ul className="timelineChipRow">
        {items.map((item) => (
          <li key={item} className="timelineChip">
            {item}
          </li>
        ))}
      </ul>
    </TimelineSection>
  );
}
