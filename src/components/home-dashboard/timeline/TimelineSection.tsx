import type { ReactNode } from "react";

interface TimelineSectionProps {
  label: string;
  children: ReactNode;
}

export function TimelineSection({ label, children }: TimelineSectionProps) {
  return (
    <section className="timelineSection">
      <h4 className="timelineSectionLabel">{label}</h4>
      <div className="timelineSectionBody">{children}</div>
    </section>
  );
}
