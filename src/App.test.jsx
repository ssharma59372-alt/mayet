import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const element = screen.getByText(/vite/i)
  expect(element).toBeInTheDocument()
})


