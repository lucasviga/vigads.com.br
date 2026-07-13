import { EventMetaRow } from "@/components/home-dashboard/events/EventMetaRow";
import type { CommunityEvent } from "@/components/home-dashboard/events/events.types";

interface EventListProps {
  events: CommunityEvent[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

export function EventList({ events, selectedSlug, onSelect }: EventListProps) {
  return (
    <ul className="eventList" role="listbox" aria-label="Events">
      {events.map((event) => {
        const isSelected = event.slug === selectedSlug;
        return (
          <li key={event.slug} className="eventListItem">
            <button
              type="button"
              role="option"
              aria-selected={isSelected}
              className="eventListButton"
              data-active={isSelected ? "true" : "false"}
              onClick={() => onSelect(event.slug)}
            >
              <span className="eventListTitle">{event.title}</span>
              <EventMetaRow dateLabel={event.dateLabel} location={event.location} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
