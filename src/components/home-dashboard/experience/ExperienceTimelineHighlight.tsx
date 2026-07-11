interface Highlight {
  title: string;
  description: string;
  impact?: string;
  technologies?: string[];
}

interface ExperienceTimelineHighlightProps {
  highlight: Highlight;
}

export function ExperienceTimelineHighlight({
  highlight,
}: ExperienceTimelineHighlightProps) {
  return (
    <article className="timelineHighlight">
      <h4 className="timelineHighlightTitle">{highlight.title}</h4>
      {highlight.impact ? (
        <p className="timelineHighlightImpact">{highlight.impact}</p>
      ) : null}
      <p className="timelineHighlightText">{highlight.description}</p>
      {highlight.technologies?.length ? (
        <ul className="timelineChipRow">
          {highlight.technologies.map((tech) => (
            <li key={tech} className="timelineChip">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
