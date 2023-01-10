import { render, screen } from "@testing-library/react";
import ActiveLink from '../../src/components/layout/Navbar/ActiveLink';
import Navbar from '../../src/components/layout/Navbar/';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/experience'
      }
    }
  }
})

// jest.mock('next/link')

describe('ActiveLink', () => {
  it('active link renders correctly', () => {
    render(
      <ActiveLink href="/experience" activeClassName="nav-active">
        experience
      </ActiveLink>
    );

    expect(screen.getByText('experience')).toBeInTheDocument()    
  })

  // it('should have active class', () => {
  //   render(
  //     <ActiveLink href="/experience" activeClassName="nav-active">
  //       experience
  //     </ActiveLink>
  //   );
    
  //   expect(screen.getByText('experience')).toHaveClass('nav-active')    
  // })
})