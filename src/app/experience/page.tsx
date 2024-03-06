import { experience, intro, resumeDownload } from "./styles";

export default function Experience() {
  return (
    <main>
      <header className={intro}>
        <p>
        {'< '}
        This is where you can get to know me better and explore my journey as a <strong>Front-End Software Engineer</strong>
        {' />'}
        </p>
        <a className={resumeDownload} href="/downloads/lucasviga-frontend-se.pdf" download>Download CV</a>
      </header>

      <ul className={experience}>
        <li>
          <div className="experience-details">
            <h2>Front-end Software Engineer</h2>
            <span>Contract</span>
            <time>Jan 2020 - Present</time>
            <address>Manaus, AM, Brazil</address>
          </div>

          <div className="experience-activity">
            <h3>Grupo Clickip Tecnologia</h3>
            <p>Click IP is a Internet provider holding.</p>
          
            <p>• Developed React web app to avoid overloading the call center during Internet issues. (Vite, Zustand, Chakra UI). On average, we have reduced support tickets by 35% during a network issue.</p>
            <p>• Developed React web app to document all router models used by the company. (Next.JS, Zustand, Tailwind). Reducing the use of spreadsheets.</p>
            <p>• Developed React Native app to customers to get Bills, see contracts info, data used, and report payment. (React Native CLI, Styled Components, Context API). </p>
            <p>• Helped the team to implement Unit Test with Jest and React Testing Library for the Front-End applications.</p>

            <p>Main activities:</p>
            <p>• Led the development team Squad, and mentoring Front-End juniors developers. (JavaScript, React JS and React Native).</p>
            <p>• Designed interfaces for web and mobile apps using Figma.</p>
            <p>• Published the first company's React Native app on Google Play and App Store.</p>
            <p>• Automatized deployments for frontend and backend projects using GitHub Actions.</p>  
          </div>      
        </li>

        <li>
          <div className="experience-details">
            <h2>IT Support</h2>
            <span>Employee</span>
            <time>Jan 2019 - Sep 2019</time>
            <address>Manaus, AM, Brazil</address>
          </div>

          <div className="experience-activity">
            <h3>Grupo Clickip Tecnologia</h3>
            <p>
              Click IP is a holding of internet provider in Amazonas and Pará. Intlink, Wire, Fiber Network and Icom are part of this group.
            </p>

            <p>Main activities:</p>
            <p>• Customer service, user support, support for residential and business customers.</p>
            <p>• Network monitoring with Grafana and Zabbix.</p>
            <p>• Create and update site information frequently.</p>
          </div>
        </li>

        <li>
          <div className="experience-details">
            <h2>IT Intern</h2>
            <span>Intern</span>
            <time>Jan 2018 - Dez 2018</time>
            <address>Manaus, AM, Brazil</address>
          </div>

          <div className="experience-activity">
            <h3>Tribunal Regional do Trabalho da 11ª Região</h3>
            <p>Main activities:</p>
            <p>• Participe on migration of new software for the payments department.</p>
            <p>• Assistant of database Oracle. I updated information, reported and fix some errors.</p>
            <p></p>
          </div>
        </li>
      </ul>
    </main>
  )
}