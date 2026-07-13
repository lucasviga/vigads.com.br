import { ABOUT_INTRO, CV_HREF } from "@/components/home-dashboard/about/about.constants";

export function AboutCardBody() {
  return (
    <div className="photoCard">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="photoBg"
        src="/images/lucas-viga-avatar.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="photoGlass">
        <div className="photoIdentity">
          <h2 className="photoTitle">Lucas Viga</h2>
          <p className="photoBody">{ABOUT_INTRO}</p>
        </div>
        <div className="photoFooter">
          <a
            className="photoCvButton"
            href={CV_HREF}
            download
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
