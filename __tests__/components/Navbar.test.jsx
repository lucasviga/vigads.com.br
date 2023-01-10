import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Navbar from '../../src/components/layout/Navbar/index';
import NavbarMobile, { Toggle } from '../../src/components/layout/NavbarMobile';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next/link');

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

describe('Navbar', () => {
  // it('renders nav links correctly', async () => {
  //   render(<Navbar />);

  //   expect(screen.getByText('Lucas Viga')).toBeInTheDocument();
  //   expect(screen.getByText('education')).toBeInTheDocument();
  //   expect(screen.getByText('experience')).toBeInTheDocument();
  // })

  it('should not display on desktop', () => {
    const {queryByTestId} = render(<NavbarMobile />);

    expect(queryByTestId('open-menu')).toBeInTheDocument();
  })

  it('should display only mobile devices', () => {
    const {getByTestId} = render(<NavbarMobile />);    
    
    resizeWindow(390, 844);
    expect(getByTestId('open-menu')).toBeInTheDocument();
  }) 

  it('should be able to open and close menu', async () => {    
    resizeWindow(390, 844);
    
    const {getByTestId, findByTestId, queryByTestId} = render(<NavbarMobile />);    
    
    const openMenuBtn = await findByTestId('open-menu');

    fireEvent.click(openMenuBtn)        

    await waitFor(() => expect(getByTestId('navlink')).toBeInTheDocument())
    
    fireEvent.click(openMenuBtn)
    const navlink = queryByTestId('navlink')

     waitFor(() => expect(navlink).toBeNull());
  })
})