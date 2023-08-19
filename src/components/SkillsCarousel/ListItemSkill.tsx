import Image from 'next/image';
import { Container } from './styles'

interface ListItemSkillProps {
  tech: {
    id: number;
    role: string;
    techs: {
      id: number;
      url: string;
      label: string;
    } []
  }
}

export function ListItemSkill({ tech }: ListItemSkillProps) {
  return (
    <Container className="keen-slider__slide">
      <h1>{tech.role}</h1>
      {tech.techs.map((item) => (
        <li key={item.id}>
          <span>
            <Image src={item.url} alt={item.label} width={20} height={20} />
          </span>

          {item.label}
        </li>        
      ))}
    </Container>
  )
}