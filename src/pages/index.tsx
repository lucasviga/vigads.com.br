import Image from 'next/image'
import Link from 'next/link'
import { Aboutme, Slogan } from '../../styles/pages/home'

import { experiences } from '../data/techs'

export default function Home() {
  return (
    <>
      <Aboutme>
        <div className="about-me">
          <span>Front-end Software Engineer</span>
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
            src="/images/me.png"
            width={212}
            height={298}
          />
        </div>
      </Aboutme>

      <Slogan>
        <h1>Javascript</h1>
        <h2>React</h2>
        <h3>Coffee</h3>
      </Slogan>
    </>
  )
}
