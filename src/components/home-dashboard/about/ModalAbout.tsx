import { ABOUT_INTRO, CV_HREF } from "@/components/home-dashboard/about/about.constants";

export function ModalAbout() {
  return (
    <>
      <p>
        Lucas Viga is a Senior Software Engineer with over 6 years of experience designing and building modern web and mobile applications.      
      </p>
      <p>
        Throughout his career, he has worked across the entire software development lifecycle, collaborating with product managers, designers, backend engineers, and stakeholders to transform business requirements into scalable software solutions.
      </p>
      <p>Besides software development, Lucas enjoys improving engineering processes, mentoring developers, defining software architecture, and helping teams make better technical decisions.</p>
      <a className="cvButton" href={CV_HREF} download>
        Download CV
      </a>
    </>
  );
}
