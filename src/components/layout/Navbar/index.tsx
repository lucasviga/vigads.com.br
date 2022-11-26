import Link from 'next/link'
import { Header } from './styles'

export default function Navbar() {
  return (
    <Header>
      <nav>
        <span>
          <Link href="/"><b>Lucas</b> Viga</Link>
        </span>

        <ul>
          <li>
            <Link href="/education">education</Link>
          </li>

          <li>
            <Link href="/experience">experience</Link>
          </li>        
        </ul>
      </nav>
    </Header>
  )
}