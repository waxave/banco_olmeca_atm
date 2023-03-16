import { createContext, useState, createRef } from 'react'

export const CardContext = createContext()

export function CardProvider ({ children }) {
  const [card, setCard] = useState(null)
  // const [card, setCard] = useState({"id":1,"number":"3368318879256599","expirationMonth":4,"expirationYear":2028,"kind":"debit","balance":"258000.0"})
  const [cardNumber, setCardNumber] = useState('3368318879256599')
  const [cardPin, setCardPin] = useState('9999')
  const [errors, setErrors] = useState(null)

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
      setErrors
    }}
    >
      {children}
    </CardContext.Provider>
  )
}
