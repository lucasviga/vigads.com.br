'use client';

import Link from "next/link";
import Image from "next/image";

import ghIcon from '../../../../public/images/github.svg';
import inIcon from '../../../../public/images/linkedin.svg';
import mdIcon from '../../../../public/images/medium.svg';
import figmaIcon from '../../../../public/images/figma-purple.svg';

import { container } from "./styles";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: 'lucasviga', href: '/' },
  { name: 'experience', href: '/experience' },
  { name: 'education', href: '/education' },
]

export function MenuNav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return href === pathname;
  }

  return (
    <header className={container}>
      <nav>        
        <ul>
          {navLinks.map((link =>  (
              <li key={link.name} className={isActive(link.href) ? "activeLink" : ''}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            )
          ))}

          <span>
            <a target="_blank" href="https://github.com/lucasviga">
              <Image src={ghIcon} alt="GitHub Icon" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/lucasviga/">
              <Image src={inIcon} alt="LinkedIn Icon" />
            </a>
            <a target="_blank" href="https://medium.com/@lucasviga">
              <Image src={mdIcon} alt="Medium Icon" />
            </a>
            <a target="_blank" href="https://www.figma.com/@lucasviga">
              <Image src={figmaIcon} alt="Medium Icon" />
            </a>            
          </span>
        </ul>
      </nav>
    </header>
  )
}