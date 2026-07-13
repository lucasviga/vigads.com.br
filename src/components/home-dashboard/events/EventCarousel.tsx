"use client";

import { EventCarouselDots } from "@/components/home-dashboard/events/EventCarouselDots";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";

interface EventCarouselProps {
  photos: string[];
  title: string;
}

export function EventCarousel({ photos, title }: EventCarouselProps) {
  const carousel = useAutoCarousel(photos.length);

  if (photos.length === 0) return null;

  return (
    <div
      className="eventCarousel"
      onMouseEnter={carousel.pause}
      onMouseLeave={carousel.resume}
      onFocusCapture={carousel.pause}
      onBlurCapture={carousel.resume}
    >
      <div className="eventCarouselFrame" aria-live="polite">
        <img
          key={photos[carousel.index]}
          src={photos[carousel.index]}
          alt={`${title} photo ${carousel.index + 1} of ${photos.length}`}
          className="eventCarouselImage"
        />
      </div>
      {photos.length > 1 ? (
        <EventCarouselDots
          photos={photos}
          title={title}
          index={carousel.index}
          intervalMs={carousel.intervalMs}
          isPaused={carousel.paused || carousel.reduceMotion}
          onGoTo={carousel.goTo}
        />
      ) : null}
    </div>
  );
}
