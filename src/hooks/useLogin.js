import { useCallback, useContext, useMemo } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_CARD } from '../constants'
import { authCard } from '../services/card'
import { useError } from './useError'
import { cleanCardNumber } from '../utils'

export function useLogin () {
  const { setError, clearErrors } = useError()
  const { cardNumber, setCardNumber, cardPin, setCardPin, setCard, pinInputRef } = useContext(CardContext)

  const changeCardNumber = useCallback((event) => {
    const clean = cleanCardNumber(event.target.value)
    setCardNumber(clean.slice(0, 16))
  }, [])

  const authenticateCard = useCallback(() => {
    if (cardNumber.length < 16 || cardPin.length < 4) return
    authCard({ cardNumber, cardPin })
      .then(card => { setCard(card); clearErrors() })
      .catch(error => setError(error.message))
  }, [cardNumber, cardPin])

  const clearLogin = useCallback(() => { setCardNumber(''); setCardPin('') }, [])

  const cardNumberDisplay = useMemo(() => {
    const newCardNumber = cardNumber
    const grouped = newCardNumber?.match(/.{1,4}/g)?.join('-')
    return newCardNumber?.length > 0 ? grouped?.split('').join(CLEAN_SPACES_CARD) : ''
  }, [cardNumber])

  return {
    changeCardNumber,
    cardNumberDisplay,
    cardNumber,
    authenticateCard,
    clearLogin,
    pinInputRef
  }
}
