import { render, screen } from "@testing-library/react";
import Education from '../src/pages/education';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Education Page', () => {
  it('renders link to view my certificate', () => {
    render(<Education />)

    expect(screen.getByText('View certificate')).toBeInTheDocument();
    expect(screen.getByText('View certificate')).toHaveAttribute('href', 'https://files-plus.wiseup.com/?url=https%3A%2F%2Ffiles-plus.wiseup.com%2Fstorage%2Fcertificates%2Fwiseup-plus%2F%242b%2410%24W0UXziQvQ1qaaWI9Z082NO31ZCyI%2FqNcK4.H7KJl%2Fnovgad6Dflz6.pdf&text=Alcancei+minha+meta+e+conquistei+meu+certificado+no+curso+de+ingl%C3%AAs+na+Wise+Up&documentType=CERTIFICATE&title=Wise+Up+Certificate&documentImage=https%3A%2F%2Ffiles-plus.wiseup.com%2Fstorage%2Fimages%2Fwiseup-plus%2FcertificadoPlus.png');    
  })
})