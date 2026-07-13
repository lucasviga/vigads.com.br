import { cn } from "@/utils/cn";

interface SkillsStoryProgressProps {
  index: number;
  total: number;
  paused: boolean;
  reduceMotion: boolean;
  intervalMs: number;
  onGoTo: (index: number) => void;
}

export function SkillsStoryProgress({
  index,
  total,
  paused,
  reduceMotion,
  intervalMs,
  onGoTo,
}: SkillsStoryProgressProps) {
  return (
    <div
      className="skillsStoryRow"
      role="tablist"
      aria-label="Skill categories"
    >
      {Array.from({ length: total }, (_, slideIndex) => {
        const isActive = slideIndex === index;
        const isPast = slideIndex < index;

        return (
          <button
            key={`${slideIndex}-${isActive ? index : "idle"}`}
            type="button"
            role="tab"
            className="skillsStorySegment"
            aria-label={`Skill category ${slideIndex + 1} of ${total}`}
            aria-selected={isActive}
            onClick={(event) => {
              event.stopPropagation();
              onGoTo(slideIndex);
            }}
          >
            <span
              className={cn(
                "skillsStoryFill",
                (isPast || (isActive && reduceMotion)) && "skillsStoryFillDone",
                isActive && !reduceMotion && "skillsStoryFillActive",
              )}
              style={
                isActive && !reduceMotion
                  ? {
                      animationDuration: `${intervalMs}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }
                  : undefined
              }
            />
          </button>
        );
      })}
    </div>
  );
}
