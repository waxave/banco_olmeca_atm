import { useCallback, useContext, useMemo } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_CARD } from '../constants'
import { authCard } from '../services/card'

export function useLogin () {
  const {
    cardNumber,
    setCardNumber,
    cardPin,
    setCardPin,
    pinInputRef,
    card,
    setCard,
    errors,
    setErrors
  } = useContext(CardContext)

  const cleanCardNumber = (card) => {
    return card.replace(/-/g, '').replace(/[^0-9]/g, '')
  }

  const changeCardNumber = useCallback((event)=> {
    const newCardNumber = cardNumber

    if (event.target.value.length === 16) {
      return setCardNumber(cleanCardNumber(event.target.value))
    }

    if(event.keyCode === 8) {
      return setCardNumber(cleanCardNumber(newCardNumber.slice(0, -1)))
    }

    if (newCardNumber.length === 16) return

    setCardNumber(cleanCardNumber(newCardNumber + event.key))
  }, [cardNumber])

  const authenticateCard = useCallback(() => {
    authCard({cardNumber, cardPin})
      .then(card => {
        setCard(card)
        setErrors(null)
      })
      .catch(error => {
        setErrors(error.message)
      })
  }, [cardNumber, cardPin])

  const clearLogin = useCallback(() => {
    setCardNumber(null)
    setCardPin(null)
  }, [])

  const cardNumberDisplay = useMemo(() => {
    const newCardNumber = cardNumber
    const cardToDisplay = newCardNumber?.match(/(.{1,4})/g)?.join('-')

    return newCardNumber?.length > 0 ? cardToDisplay?.match(/(.{1,1})/g)?.join(CLEAN_SPACES_CARD) : ''
  }, [cardNumber])

  const hasValidCard = useMemo(() => {
    return card
  }, [card])

  return {
    changeCardNumber,
    cardNumberDisplay,
    cardPin,
    setCardPin,
    pinInputRef,
    authenticateCard,
    card,
    hasValidCard,
    errors,
    clearLogin
  }
}


