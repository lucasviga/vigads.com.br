import Image from "next/image";
import Link from "next/link";
import { Aboutme, SummaryExperience } from "../../styles/pages/home";

import {experiences} from '../data/techs';

export default function Home() {
  return (
    <>
      <Aboutme>
        <div className="about-me">
          <h1>Hi, I{"'"}m Lucas;</h1>
          <span>Front-end Engineering</span>          
        </div>

        <div className="bio">
          <p>
            I’ve been working as a developer for more than 2 years. During this 
            time, I’ve been developing with theses techs: React JS/Native, Next JS, JS and TS, 
            Chakra UI, Styled Components and more.
          </p>

          <p>
            In a one-off project , I developed a back-end using Node JS, Express, and Prisma.
          </p>
        </div>

        <div className="avatar">
          <Image alt="Picture of the author" src="/images/me.png" width={212} height={298} />
        </div>
      </Aboutme>

      <SummaryExperience>
        <div className="content">
          <header>
            <span>
              <h1>Quick summary</h1>              
              <Link href="/experience">{"<see all experiences>"}</Link>
            </span>
            
            <h2>Theses are the technologies I’ve had experience creating applications:</h2>          
          </header>
        </div>

        <div className="techs">
          {experiences.map(item => (
            <div key={item.id}>
              <p>{item.role}</p>
              <ul>
                {item.techs.map(tech => (
                  <li key={tech.id}>
                    <Image alt="React" src={tech.url} height={25} width={25} />
                  </li>
                ))}                
              </ul>
            </div>
          ))}
        </div>
      </SummaryExperience>
    </>
  )
}
