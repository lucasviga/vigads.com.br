import { techs } from "@/data/techs";

export function ModalSkills() {
  return (
    <ul className="skillsModalList">
      {techs.map((group) => (
        <li key={group.id} className="skillsModalGroup">
          <h3 className="skillsGroupTitle">{group.role}</h3>
          <ul className="skillsModalStack">
            {group.techs.map((tech) => (
              <li key={tech.id} className="skillsStackItem">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="skillsStackIcon"
                  src={tech.url}
                  alt=""
                  width={22}
                  height={22}
                />
                <span className="skillsStackLabel">{tech.label}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
