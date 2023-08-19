import Image from 'next/image'

import { Aboutme, Slogan } from '../../styles/pages/home'
import { SkillsCarousel } from '../components/SkillsCarousel';

import avatar from '../../public/images/me.png';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Aboutme>
        <div className='about-me-content'>
          <div className="about-me">
            <span>Software Engineer</span>
            <h1>Hi, I{"'"}m Lucas;</h1>
          </div>

          <div className="bio">
            <p>
              I’ve been working as a software developer for 3 years. During this
              time I’ve been developing with: React JS/Native, Next JS, JS and TS,
              CSS in JS, Unit tests and e2e tests, Zustand and more.
            </p>

            <p>
              In a one-off project , I developed a back-end using Node JS,
              Express, and Prisma.
            </p>
          </div>

          <div className="avatar">
            <Image
              alt="Lucas's avatar profile"
              src={avatar}                        
            />
          </div>
        </div>
      </Aboutme>

      <Slogan>
        <h1>JavaScript</h1>
        <h2>React</h2>
        <h3>Coffee</h3>
      </Slogan>

      {/* <MyExperience>
        <div>
          Experience
        </div>

        <Link href="/experience">see all experiences</Link>
      </MyExperience> */}

      <SkillsCarousel />
    </>
  )
}
