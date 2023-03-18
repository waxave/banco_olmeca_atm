import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MessageProvider } from './context/message'
import { CardProvider } from './context/card'
import { CARD_PLACEHOLDER, PIN_PLACEHOLDER } from './constants'

describe('App', () => {
  it('should render login without problems', async () => {
    render(
      <MessageProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </MessageProvider>
    )

    const cardInput = await screen.findByTestId('card')
    const pinInput = await screen.findByTestId('pin')

    expect(cardInput.placeholder).toBe(CARD_PLACEHOLDER)
    expect(pinInput.placeholder).toBe(PIN_PLACEHOLDER)
  })
})
