import { useKeenSlider } from "keen-slider/react"
import { KeenSliderOptions } from "keen-slider";

import { ListItemSkill } from "./ListItemSkill";
import {techs} from '../../data/techs';
import { Container } from "./styles";

import { keenSliderConfig } from "../../libs/keenSlider";

interface SkillsCarouselProps {
  isMobile: boolean;
}

export function SkillsCarousel({ isMobile }: SkillsCarouselProps) {
  const keenSliderOptions = keenSliderConfig(isMobile);
  
  const [sliderRef] = useKeenSlider(keenSliderOptions as KeenSliderOptions)

  return (
    <Container>
      <div ref={sliderRef} className="keen-slider">
        {techs.map((tech) => (
          <ListItemSkill key={tech.id} tech={tech} />
        ))}
      </div>
    </Container>
  )
}