import { createContext, useState, createRef } from 'react'

export const CardContext = createContext()

export function CardProvider ({ children }) {
  const [card, setCard] = useState(null)
  const [cardNumber, setCardNumber] = useState('3368318879256599')
  const [cardPin, setCardPin] = useState('9999')
  const [errors, setErrors] = useState(null)
  const [operation, setOperation] = useState(null)

  const pinInputRef = createRef()

  return (
    <CardContext.Provider value={{
      cardNumber,
      setCardNumber,
      cardPin,
      setCardPin,
      pinInputRef,
      card,
      setCard,
      errors,
      setErrors,
      operation,
      setOperation
    }}
    >
      {children}
    </CardContext.Provider>
  )
}
