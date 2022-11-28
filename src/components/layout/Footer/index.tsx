import Image from 'next/image'
import { Container } from './styles'

export default function Footer() {
  return (
    <Container>
      <div className='footer-content'>
        <div>
          <span>Follow me</span>
          
          <a href="https://github.com/lucasviga" target="_blank" rel="noreferrer">
            <Image alt="Github profile" src="/images/github.svg" width={22} height={22} />
          </a>

          <a href="https://linkedin.com/in/lucasviga" target="_blank" rel="noreferrer">
            <Image alt="Github profile" src="/images/linkedin.svg" width={22} height={22} />
          </a>

          <a href="mailto:lucasviga12@gmail.com" target="_blank" rel="noreferrer">
            <Image alt="Github profile" src="/images/mail.svg" width={22} height={22} />
          </a>
        </div>

        <p>vigads © 2022</p>
      </div>
    </Container>
  )
}