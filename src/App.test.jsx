import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('button text changes on click', () => {
  render(<App />)

  // Step 1: Check initial text
  const button = screen.getByText("Click Me")
  expect(button).toBeInTheDocument()

  // Step 2: Click the button
  fireEvent.click(button)

  // Step 3: Check updated text
  expect(screen.getByText("Button Clicked 🚀")).toBeInTheDocument()
})

