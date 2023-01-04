import { render, screen } from "@testing-library/react";
import Home from '../src/pages/';
import '@testing-library/jest-dom'

describe('Initial Page', () => {
  it('renders about me', () => {
    render(<Home />);

    const aboutme = screen.getByRole('heading', {
      name: "Hi, I'm Lucas;"
    })

    expect(aboutme).toBeInTheDocument();
  })
})