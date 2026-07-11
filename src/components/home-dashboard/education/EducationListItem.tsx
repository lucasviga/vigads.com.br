import Image from "next/image";

import { cn } from "@/utils/cn";
import { UniversityIcon } from "@/components/home-dashboard/insight/InsightIcons";
import type { EducationCardItem } from "@/components/home-dashboard/education/education.mappers";

interface EducationListItemProps {
  item: EducationCardItem;
}

export function EducationListItem({ item }: EducationListItemProps) {
  return (
    <li className={cn("eduItem", item.featured && "eduItemFeatured")}>
      <span className="eduAvatar" aria-hidden="true">
        {item.logoUrl ? (
          <Image
            src={item.logoUrl}
            alt=""
            width={22}
            height={22}
            className="eduAvatarImage"
          />
        ) : (
          <UniversityIcon />
        )}
      </span>
      <div className="eduCopy">
        <p className="eduTitle">{item.title}</p>
        <p className="eduMeta">{item.institution}</p>
      </div>
      <time className="eduPeriod">{item.period}</time>
    </li>
  );
}
