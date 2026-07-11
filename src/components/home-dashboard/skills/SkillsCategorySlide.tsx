interface SkillItem {
  id: number;
  url: string;
  label: string;
}

interface SkillsCategorySlideProps {
  role: string;
  skills: SkillItem[];
}

export function SkillsCategorySlide({ role, skills }: SkillsCategorySlideProps) {
  return (
    <div className="skillsSlide" aria-live="polite">
      <p className="skillsCategory">{role}</p>
      <ul className="skillsStack" aria-label={role}>
        {skills.map((skill) => (
          <li key={skill.id} className="skillsStackItem">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="skillsStackIcon"
              src={skill.url}
              alt=""
              width={22}
              height={22}
            />
            <span className="skillsStackLabel">{skill.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
