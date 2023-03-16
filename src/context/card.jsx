import { createContext, useState, createRef } from 'react'

export const CardContext = createContext()

export function CardProvider ({ children }) {
  const [cardNumber, setCardNumber] = useState('7391394654253844')
  const [cardPin, setCardPin] = useState('8969')
  const pinInputRef = createRef()

  return (
    <CardContext.Provider value={{
      cardNumber,
      setCardNumber,
      cardPin,
      setCardPin,
      pinInputRef
    }}
    >
      {children}
    </CardContext.Provider>
  )
}
