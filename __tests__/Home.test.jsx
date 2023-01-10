import { render, screen } from "@testing-library/react";
import Home from '../src/pages';

describe('Initial Page', () => {  
  it('renders about me', () => {    
    render(<Home />);
    const aboutme = screen.getByRole('heading', {
      name: "Hi, I'm Lucas;"
    })

    expect(aboutme).toBeInTheDocument();
  })

  it('renders avatar correctly', () => {
    render(<Home />);

    const avatar = screen.getByRole('img', {
      name: "Lucas's avatar profile"
    })

    expect(avatar).toHaveAttribute('alt', "Lucas's avatar profile")
  })

  it('renders experience link correctly', () => {  
    render(<Home />);    
    const experienceLink = screen.getByRole('link', { name: "<see all experiences>" })

    expect(experienceLink).toHaveAttribute('href', '/experience')    
  })
})