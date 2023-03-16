import { createContext, useState, createRef } from 'react'

export const CardContext = createContext()

export function CardProvider ({ children }) {
  const [card, setCard] = useState(null)
  const [cardNumber, setCardNumber] = useState('')
  const [cardPin, setCardPin] = useState('')
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
