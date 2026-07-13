"use client";

import { useMemo, useState } from "react";

import { EventDetail } from "@/components/home-dashboard/events/EventDetail";
import { EventList } from "@/components/home-dashboard/events/EventList";
import type { CommunityEvent } from "@/components/home-dashboard/events/events.types";

interface EventsPanelProps {
  events: CommunityEvent[];
}

export function EventsPanel({ events }: EventsPanelProps) {
  const [selectedSlug, setSelectedSlug] = useState(events[0]?.slug ?? "");

  const selectedEvent = useMemo(
    () => events.find((event) => event.slug === selectedSlug) ?? events[0],
    [events, selectedSlug],
  );

  if (!selectedEvent) return null;

  return (
    <div className="eventsPanel">
      <EventList
        events={events}
        selectedSlug={selectedEvent.slug}
        onSelect={setSelectedSlug}
      />
      <EventDetail event={selectedEvent} />
    </div>
  );
}
