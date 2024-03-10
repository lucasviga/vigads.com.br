'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import { experienceCarousel, favThingsSection, introExperience, introExperienceBox, linkRedirect, main, me, resumeDownload, techCard } from './styles';
import meImg from '../../public/images/me.png';

import jsIcon from '../../public/images/js.svg';
import reactIcon from '../../public/images/react.svg';
import nextjsIcon from '../../public/images/nextjs.svg';
import figmaIcon from '../../public/images/figma.svg';

import { SkillsCarousel } from './components/SkillsCarousel';

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({    
    mode: "free-snap",
    breakpoints: {
      '(min-width: 320px)': {
        slides: {
          perView: 1.5,
          spacing: 25,
        },
      },
      '(min-width: 1280px)': {        
        slides: {          
          perView: 2.5,
          spacing: 35,
        },
      },
      '(min-width: 1920)': {        
        slides: {          
          perView: 2.5,
          spacing: 45,
        },
      },
    },
  })

  return (
    <main className={main}>
      <section className={me}>
        <Image src={meImg} alt="Lucas's avatar" />
        <div>
          <h1>Hi, I’m Lucas</h1>
          <p>
            During my <span>4 years</span> as <span>Front-End Software Engineer</span>, My role has 
            extended beyond coding to effective communication with various 
            departments, to define new features and spearheading the development 
            of new apps.
          </p>

          <div>
            <a className={resumeDownload} href="/downloads/lucasviga-frontend-se.pdf" download>Download CV</a>
            <Link className={linkRedirect} href="/experience">See experiences</Link>
          </div>
        </div>
      </section>

      <section className={introExperience}>
        <div className={introExperienceBox}>
          <p>4 years of</p>
          <strong>XP</strong>
          <p>working with JS universe</p>
        </div>

        <div className={experienceCarousel}>
          <div ref={ref} className="keen-slider">
            <li className={`keen-slider__slide ${techCard({ theme: 'js'})}`}>
              <Image src={jsIcon} alt='JavaScript Icon' />
              <span>JavaScript</span>
            </li>

            <li className={`keen-slider__slide ${techCard({ theme: 'react'})}`}>
              <Image src={reactIcon} alt='React Icon' />
              <span>React</span>
            </li>

            <li className={`keen-slider__slide ${techCard({ theme: 'nextjs'})}`}>
              <Image src={nextjsIcon} alt='Next.JS Icon' />
              <span>Next.JS</span>
            </li>

            <li className={`keen-slider__slide ${techCard({ theme: 'figma'})}`}>
              <Image src={figmaIcon} alt='Figma Icon' />
              <span>Figma</span>
            </li>
          </div>
        </div>    
      </section>

      <section className={favThingsSection}>
        <div>
          <h2>JavaScript</h2>
          <h2>React</h2>
          <h2>Coffee</h2>
        </div>
      </section>

      <SkillsCarousel />
    </main>
  )
}