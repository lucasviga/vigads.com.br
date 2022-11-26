import Image from "next/image";
import { Container, ListExperiences, Wrapper } from "../../styles/pages/experience";

export default function Experience() {
  return (
    <Container>
      <Wrapper>
                
        <h1>Experience</h1>        

        <ListExperiences>
          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-details">
                <h2>React JS/Native Developer</h2>
                <span className="experience-details-contract">Contract</span>
           
                <time>Jun 2020 <span>Present</span></time>    
                <p>Manaus, AM - Brazil</p>
              </div>

              <div className="experience-activity">
                <h2>Grupo Clickip Tecnologia</h2>

                <p>
                  Click IP is a holding of internet provider in Amazonas and Pará. Intlink, Wire, Fiber Network and Icom are part of this group.
                </p>

                <p>
                  - I am responsible for development of web and mobile applications (iOS/Android) using the framework React for all companies mentioned above.
                </p>

                
                <p>- Both web and also mobile applications, I have created whole the user interface (UI/UX) using Figma.</p>
                <p>- In these projects using React, I have experience creating styles using Chakra UI and Styled Components.</p>
                <p>- I have experience bulding versions of Android and iOS, and also publishing in their respective stores.</p>
                <p>- I also configured my repositories using Github Actions (CI/CD) to make automatic deploy.</p>
                <p>- In a one-off project , I developed a back-end using Node JS, Express, Prisma, Docker and Postgres to make integration with external APIs.</p>
              </div>
            </div>
          </div>    

          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-details">
                <h2>IT Support</h2>
                <span className="experience-details-contract">Employee</span>
           
                <time>Jan 2019 <span>Sep 2019</span></time>    
                <p>Manaus, AM - Brazil</p>
              </div>

              <div className="experience-activity">
                <h2>Grupo Clickip Tecnologia</h2>

                <p>Click IP is a holding of internet provider in Amazonas and Pará. Intlink, Wire, Fiber Network and Icom are part of this group.</p>

                <p>Main activities:</p>
                <p>- Customer service, user support, support for residential and business customers.</p>
                <p>- Network monitoring with Grafana and Zabbix.</p>
                <p>- Create and update site information frequently.</p>
              </div>
            </div>
          </div> 

          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-details">
                <h2>IT Intern</h2>
                <span className="experience-details-contract">Intern</span>
           
                <time>Jan 2018 <span>Dez 2018</span></time>    
                <p>Manaus, AM - Brazil</p>
              </div>

              <div className="experience-activity">
                <h2>Tribunal Regional do Trabalho da 11ª Região</h2>

                <p>Main activities:</p>
                <p>- Participe on migration of new software for the payments department.</p>
                <p>- Assistant of database Oracle. I updated information, reported and fix some errors.</p>
              </div>
            </div>
          </div> 

          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-details">
                <h2>IT Intern</h2>
                <span className="experience-details-contract">Intern</span>
           
                <time>May 2017 <span>Jan 2018</span></time>    
                <p>Manaus, AM - Brazil</p>
              </div>

              <div className="experience-activity">
                <h2>Intlink Tecnologia</h2>

                <p>Main activities:</p>
                <p>- User support.</p>
                <p>- It was developed a institutional website for the company. In this project was used Laravel to develop.and SASS.</p>
              </div>
            </div>
          </div> 
        </ListExperiences>
      </Wrapper>
    </Container>
  )
}