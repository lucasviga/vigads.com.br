interface ProjectListSectionProps {
  id: string;
  heading: string;
  items: string[];
}

function ProjectListSection({ id, heading, items }: ProjectListSectionProps) {
  return (
    <section className="projectSection" aria-labelledby={id}>
      <h2 id={id} className="projectSectionHeading">
        {heading}
      </h2>
      <ul className="projectSectionList">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

interface SideProjectArticleProps {
  contributions: string[];
  features: string[];
  fundamentals: string[];
}

export function SideProjectArticle({
  contributions,
  features,
  fundamentals,
}: SideProjectArticleProps) {
  return (
    <div className="projectArticle">
      <ProjectListSection
        id="contributions"
        heading="Contributions"
        items={contributions}
      />
      <ProjectListSection id="features" heading="Features" items={features} />
      <ProjectListSection
        id="fundamentals"
        heading="Fundamentals"
        items={fundamentals}
      />
    </div>
  );
}
