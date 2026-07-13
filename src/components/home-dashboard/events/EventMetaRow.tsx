import {
  CalendarIcon,
  MapPinIcon,
} from "@/components/home-dashboard/insight/InsightIcons";

interface EventMetaRowProps {
  dateLabel: string;
  location: string;
}

export function EventMetaRow({ dateLabel, location }: EventMetaRowProps) {
  return (
    <div className="eventMetaRow">
      <span className="eventMetaItem">
        <CalendarIcon />
        <span>{dateLabel}</span>
      </span>
      <span className="eventMetaItem">
        <MapPinIcon />
        <span>{location}</span>
      </span>
    </div>
  );
}
