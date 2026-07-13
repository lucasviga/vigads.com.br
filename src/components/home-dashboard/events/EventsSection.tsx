import { EventsPanel } from "@/components/home-dashboard/events/EventsPanel";
import { getCommunityEvents } from "@/data/events";

export function EventsSection() {
  const events = getCommunityEvents();

  return (
    <section className="events" aria-labelledby="events-heading">
      <header className="eventsHeader">
        <h2 id="events-heading" className="eventsTitle">
          Events
        </h2>
      </header>
      <EventsPanel events={events} />
    </section>
  );
}
