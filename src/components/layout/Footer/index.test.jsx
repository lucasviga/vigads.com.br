import { render, screen } from "@testing-library/react"
import Footer from './';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('redirects to my github profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('github');

    expect(githubURL).toHaveAttribute('href', 'https://github.com/lucasviga');
  })

  it('redirects to my linkedin profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('linkedin');

    expect(githubURL).toHaveAttribute('href', 'https://linkedin.com/in/lucasviga');
  })

  it('redirects to my email profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('email');

    expect(githubURL).toHaveAttribute('href', 'mailto:lucasviga12@gmail.com');
  })

  it('redirects to my instagram profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('instagram');

    expect(githubURL).toHaveAttribute('href', 'https://instagram.com/vigads.dev');
  })
})