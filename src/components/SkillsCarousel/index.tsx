import { useKeenSlider } from "keen-slider/react"
import {techs} from '../../data/techs';
import { ListItemSkill } from "./ListItemSkill";

export function SkillsCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3.5, spacing: 40 },
    range: {
      min: -8,
      max: 8,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {techs.map((tech) => (
        <ListItemSkill key={tech.id} tech={tech} />
      ))}
    </div>
  )
}