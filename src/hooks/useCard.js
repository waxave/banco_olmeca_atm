import { useCallback, useContext, useEffect, useMemo } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_CARD } from '../constants'

export function useCard () {
  const {
    cardNumber,
    setCardNumber,
    cardPin,
    setCardPin,
    pinInputRef
  } = useContext(CardContext)

  useEffect(() => {
    pinInputRef.current.focus()
  }, [])

  const cleanCardNumber = (card) => {
    return card.replace(/-/g, '').replace(/[^0-9]/g, '')
  }

  const changeCardNumber = useCallback((event)=> {
    const newCardNumber = cardNumber

    if(event.keyCode === 8) {
      return setCardNumber(cleanCardNumber(newCardNumber.slice(0, -1)))
    }

    if (newCardNumber.length === 16) return

    setCardNumber(cleanCardNumber(newCardNumber + event.key))
  }, [cardNumber])

  const authenticateCard = useCallback(() => {
    console.log({cardNumber})
    console.log({cardPin})
  }, [cardNumber, cardPin])

  const cardNumberDisplay = useMemo(() => {
    const newCardNumber = cardNumber
    const cardToDisplay = newCardNumber.match(/(.{1,4})/g)?.join('-')

    return newCardNumber.length > 0 ? cardToDisplay.match(/(.{1,1})/g).join(CLEAN_SPACES_CARD) : ''
  }, [cardNumber])

  return {
    changeCardNumber,
    cardNumberDisplay,
    cardPin,
    setCardPin,
    pinInputRef,
    authenticateCard
  }
}


