import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { Header } from './styles';

export default function Navbar() {
  return (
    <Header>
      <nav>
        <span>
          <Link href='/'>Lucas Viga</Link>
        </span>

        <ul>
          <li>
            <ActiveLink href='/education' activeClassName='nav-active'>
              education
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href='/experience' activeClassName={2}>
              experience
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
