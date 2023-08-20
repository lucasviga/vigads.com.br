import Image from 'next/image'

import { Aboutme, MyExperience, Slogan } from './styles'
import { SkillsCarousel } from '../components/SkillsCarousel';

import avatar from '../../public/images/me.png';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import { getUserAgentSSR } from '../utils/getUserAgent';

interface HomeProps {
  isSsrMobile: boolean;
}

export default function Home({isSsrMobile}: HomeProps) {

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

      <MyExperience>
        <div>
          <header>
            <div>
              <Image src="/images/techs/rn.svg" width={24} height={24} alt="React Icon" />
            </div>
            <span>Experience</span>
          </header>

          <Link href="/experience">see all</Link>  
        </div>        

        <p>What technologies have I been using?</p>
      </MyExperience>

      <SkillsCarousel isMobile={isSsrMobile} />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) { 
  return {
    props: {
      isSsrMobile: getUserAgentSSR(ctx)
    }
  };
}