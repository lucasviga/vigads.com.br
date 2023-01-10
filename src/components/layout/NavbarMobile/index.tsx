import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ListMenu, Nav } from "./styles";

interface ShowMenuProps {
  onCloseMenu: () => void;
}

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  onToggleMenu: () => void;  
}

export function Toggle({alt, onToggleMenu, src, ...rest}: ToggleProps) {
  return (
    <button data-testid="open-menu" type="button" onClick={onToggleMenu} {...rest}>
      <Image        
        src={src} 
        alt={alt}
        width={18}
        height={18}
      />
    </button>
  )
}

function ShowMenu({ onCloseMenu }: ShowMenuProps ) {
  return (
    <ListMenu>
      <li data-testid="navlink">
        <Link href="/" onClick={onCloseMenu}>Home</Link>

        <Link href="/" onClick={onCloseMenu}>
          <Image 
              src="/images/arrow-right.svg" 
              alt="Icon arrow right" 
              width={18}
              height={18}
            />
        </Link>
      </li>

      <li>
        <Link href="/education" onClick={onCloseMenu}>education</Link>

        <Link href="/education" onClick={onCloseMenu}>
          <Image 
              src="/images/arrow-right.svg" 
              alt="Icon arrow right" 
              width={18}
              height={18}
            />
        </Link>
      </li>

      <li>
        <Link href="/experience" onClick={onCloseMenu}>experience</Link>

        <Link href="/experience" onClick={onCloseMenu}>
          <Image 
              src="/images/arrow-right.svg" 
              alt="Icon arrow right" 
              width={18}
              height={18}
            />
        </Link>
      </li>        
    </ListMenu>
  )
}

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <Nav>
      <div className="navbar-mobile-wrapper">
        <div>
          <Link href="/">Lucas Viga</Link>      

          {isMenuOpen ? (                       
            <Toggle 
              data-testid="open-menu"               
              onToggleMenu={handleOpenMenu}          
              src="/images/close.svg" 
                alt="Icon with X letter to close menu" 
            /> 
          ) : (    
            <Toggle 
              data-testid="open-menu"               
              onToggleMenu={handleOpenMenu}          
              src="/images/menu.svg" 
              alt="Icon with 3 lines to represent a Menu list" 
            />  
          )}
        </div>
      </div>

      {isMenuOpen && <ShowMenu onCloseMenu={() => setIsMenuOpen(!isMenuOpen)} />}
    </Nav>
  )
}