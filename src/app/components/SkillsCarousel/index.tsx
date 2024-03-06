import { techs } from "@/data/techs";
import { useKeenSlider } from "keen-slider/react"

import Image from "next/image";
import { skills } from "./styles";


export function SkillsCarousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",    
    breakpoints: {
      '(min-width: 320px)': {
        slides: {
          origin: "center", 
          perView: 1.2,
          spacing: 20,
        },
      },
      '(min-width: 1280px)': {        
        slides: {
          origin: "center", 
          perView: 3.5,
          spacing: 80,
        },
      },
    },
  })

  return (
    <section className={skills}>
      <h2>These are the technologies I’ve been using</h2>
        
      <div ref={ref} className="keen-slider">
        {techs.map((skill) => (
          <li key={skill.id} className="keen-slider__slide">
            <h3>{skill.role}</h3>

            {skill.techs.map((tech) => (
              <span key={tech.id}>
                <div>
                  <Image src={tech.url} width={20} height={20} alt={tech.label + "Logo"} />
                </div>

                {tech.label}
              </span>    
            ))}                    
          </li>
        ))}        
      </div>
    </section>
  )
}