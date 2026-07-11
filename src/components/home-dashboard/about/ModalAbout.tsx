import { ABOUT_INTRO, CV_HREF } from "@/components/home-dashboard/about/about.constants";

export function ModalAbout() {
  return (
    <>
      <p>{ABOUT_INTRO}</p>
      <p>
        I partner across product and design to define features, then lead
        delivery on web and mobile - including mentoring juniors and shipping
        the first React Native app for my current company.
      </p>
      <a className="cvButton" href={CV_HREF} download>
        Download CV
      </a>
    </>
  );
}
