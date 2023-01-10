import { render, screen } from "@testing-library/react"
import Footer from '../../src/components/layout/Footer';

describe('Footer component', () => {
  it('renders an icon and redirect to github profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('github');
    const githubIcon = screen.getByRole('img', { name: /github profile/i })

    expect(githubURL).toHaveAttribute('href', 'https://github.com/lucasviga');
    expect(githubIcon).toHaveAttribute('alt', 'Github profile');
  })

  it('renders an icon and redirect to linkedin', () => {
    render(<Footer />);

    const linkedinURL = screen.getByTestId('linkedin');
    const linkedinIcon = screen.getByRole('img', { name: "Linkedin profile" })

    expect(linkedinURL).toHaveAttribute('href', 'https://linkedin.com/in/lucasviga');
    expect(linkedinIcon).toHaveAttribute('alt', 'Linkedin profile')    
  })

  it('renders an icon and redirect to email', () => {
    render(<Footer />);

    const emailURL = screen.getByTestId('email');
    const emailIcon = screen.getByRole('img', { name: "Email"})

    expect(emailURL).toHaveAttribute('href', 'mailto:lucasviga12@gmail.com');
    expect(emailIcon).toHaveAttribute('alt', 'Email');
  })

  it('renders an icon and redirect to instagram profile', () => {
    render(<Footer />);

    const githubURL = screen.getByTestId('instagram');
    const instagramIcon = screen.getByRole('img', {name: 'Instagram profile' })

    expect(githubURL).toHaveAttribute('href', 'https://instagram.com/vigads.dev');
    expect(instagramIcon).toHaveAttribute('alt', 'Instagram profile');
  })
})