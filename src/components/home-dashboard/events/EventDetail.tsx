import { EventCarousel } from "@/components/home-dashboard/events/EventCarousel";
import { EventMetaRow } from "@/components/home-dashboard/events/EventMetaRow";
import type { CommunityEvent } from "@/components/home-dashboard/events/events.types";

interface EventDetailProps {
  event: CommunityEvent;
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="eventDetail">
      <EventCarousel key={event.slug} photos={event.photos} title={event.title} />
      <header className="eventDetailHeader">
        <h3 className="eventDetailTitle">{event.title}</h3>
        <EventMetaRow dateLabel={event.dateLabel} location={event.location} />
      </header>
      <div className="eventDetailStory">
        {event.story.map((paragraph, index) => (
          <p key={`${event.slug}-${index}`} className="eventDetailParagraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
