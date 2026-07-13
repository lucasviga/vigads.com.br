"use client";

interface EventCarouselDotsProps {
  photos: string[];
  title: string;
  index: number;
  intervalMs: number;
  isPaused: boolean;
  onGoTo: (nextIndex: number) => void;
}

export function EventCarouselDots({
  photos,
  title,
  index,
  intervalMs,
  isPaused,
  onGoTo,
}: EventCarouselDotsProps) {
  return (
    <div
      className="eventCarouselDots"
      role="tablist"
      aria-label={`${title} photos`}
      style={{
        ["--event-progress-ms" as string]: `${intervalMs}ms`,
        ["--event-progress-state" as string]: isPaused ? "paused" : "running",
      }}
    >
      {photos.map((photo, photoIndex) => {
        const isActive = photoIndex === index;
        return (
          <button
            key={photo}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Show photo ${photoIndex + 1}`}
            className="eventCarouselDot"
            data-active={isActive ? "true" : "false"}
            onClick={() => onGoTo(photoIndex)}
          >
            {isActive ? (
              <span key={index} className="eventCarouselDotProgress" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
