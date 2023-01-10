import { render, screen } from "@testing-library/react";
import Experience from '../src/pages/experience';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Experience Page', () => {
  it('renders link to download my resume', () => {
    render(<Experience />)

    expect(screen.getByText('Download')).toBeInTheDocument();
    expect(screen.getByText('Download')).toHaveAttribute('href', '/downloads/lucas-viga-frontend-developer.pdf');    
  })
})