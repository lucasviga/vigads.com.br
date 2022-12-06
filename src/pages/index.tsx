import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

import { Aboutme, SummaryExperience } from "../../styles/pages/home";
import {experiences} from '../data/techs';

export default function Home() {  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Aboutme 
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
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
          {experiences.map((experience) => (
            <div key={experience.id}>
              <p>{experience.role}</p>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {experience.techs.map((tech) => (
                  <motion.li key={tech.id} variants={item}>
                    <Image alt="React" src={tech.url} height={25} width={25} />
                  </motion.li>
                ))}                
              </motion.ul>
            </div>
          ))}
        </div>
      </SummaryExperience>
    </>
  )
}
