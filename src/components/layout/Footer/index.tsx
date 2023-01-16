import Image from 'next/image';
import { Container } from './styles';

export default function Footer() {
  const today = new Date();

  return (
    <Container>
      <div className='footer-content'>
        <div>
          <span>Follow me</span>

          <a
            data-testid='github'
            href='https://github.com/lucasviga'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='Github profile'
              src='/images/github.svg'
              width={22}
              height={22}
            />
          </a>

          <a
            data-testid='linkedin'
            href='https://linkedin.com/in/lucasviga'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='Linkedin profile'
              src='/images/linkedin.svg'
              width={22}
              height={22}
            />
          </a>

          <a
            data-testid='email'
            href='mailto:lucasviga12@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <Image alt='Email' src='/images/mail.svg' width={22} height={22} />
          </a>

          <a
            data-testid='instagram'
            href='https://instagram.com/vigads.dev'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='Instagram profile'
              src='/images/instagram.svg'
              width={18}
              height={18}
            />
          </a>
        </div>

        <p>vigads © {today.getFullYear()}</p>
      </div>
    </Container>
  );
}
