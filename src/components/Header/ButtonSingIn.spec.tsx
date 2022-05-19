import { render, screen } from '@testing-library/react';
import { ButtonSingIn } from './ButtonSingIn';

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('ButtonSingIn component', () => {
  it('renders correctly when user is not authenticated', () => {
    render(
      <ButtonSingIn />
    )
    expect(screen.getByText('Sign In')).toBeInTheDocument()    
  })
})