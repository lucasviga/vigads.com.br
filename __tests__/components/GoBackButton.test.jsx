import { render, screen, fireEvent } from "@testing-library/react"
import GoBackButton from '../../src/components/GoBackButton';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
})) 

describe('GoBackButton', () => {
  // useRouter.mockReturnValue({ back: backMock })

  it('renders correctly', () => {
    render(<GoBackButton />)
    
    expect(screen.getByRole('button')).toBeInTheDocument();      
  }) 
})