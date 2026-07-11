import {
  FOLLOW_PROFILE,
  SOCIAL_LINKS,
} from "@/components/home-dashboard/follow/follow.constants";

export function FollowCardBody() {
  return (
    <div className="followProfile">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="followAvatar"
        src={FOLLOW_PROFILE.avatarSrc}
        alt={FOLLOW_PROFILE.name}
        width={88}
        height={88}
      />
      <h2 className="followName">{FOLLOW_PROFILE.name}</h2>
      <p className="followRole">{FOLLOW_PROFILE.role}</p>
      <p className="followLocation">{FOLLOW_PROFILE.location}</p>

      <ul className="followSocials" aria-label="Social profiles">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a
              className="followSocialLink"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={link.iconSrc} alt="" width={20} height={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
