import {
  Container,
  ListEducations,
  Wrapper,
} from '../../styles/pages/education';
import GoBackToPreviousPage from '../components/GoBackButton';
import { educations } from '../data/education';

export default function Education() {
  return (
    <Container>
      <Wrapper>
        <GoBackToPreviousPage />
        <h1>Education</h1>

        <ListEducations>
          {educations.map((item) => (
            <div className='education-item' key={item.id}>
              <h1>{item.institution}</h1>
              <p>{item.description}</p>
              <time>
                {item.start_date} <span>{item.end_date}</span>
              </time>

              {item.links.certificate_url && (
                <a
                  href={item.links.certificate_url}
                  target='_blank'
                  rel='noreferrer'
                >
                  View certificate
                </a>
              )}
            </div>
          ))}
        </ListEducations>
      </Wrapper>
    </Container>
  );
}
