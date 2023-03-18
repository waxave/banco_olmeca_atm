import { useCallback, useContext, useMemo } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_CARD } from '../constants'
import { authCard } from '../services/card'
import { useError } from './useError'
import { cleanCardNumber } from '../utils'

export function useLogin () {
  const { setError, clearErrors } = useError()

  const {
    cardNumber,
    setCardNumber,
    cardPin,
    setCardPin,
    setCard,
    pinInputRef
  } = useContext(CardContext)

  const changeCardNumber = useCallback((event) => {
    const newCardNumber = cardNumber

    if (event.target.value.length === 16) {
      return setCardNumber(cleanCardNumber(event.target.value))
    }

    if (event.keyCode === 8) {
      return setCardNumber(cleanCardNumber(newCardNumber.slice(0, -1)))
    }

    if (newCardNumber.length === 16) return

    setCardNumber(cleanCardNumber(newCardNumber + event.key))
  }, [cardNumber])

  const authenticateCard = useCallback(() => {
    if (cardNumber.length < 16 || cardPin.length < 4) return

    authCard({ cardNumber, cardPin })
      .then(card => {
        setCard(card)
        clearErrors()
      })
      .catch(error => {
        setError(error.message)
      })
  }, [cardNumber, cardPin])

  const clearLogin = useCallback(() => {
    setCardNumber('')
    setCardPin('')
  }, [])

  const cardNumberDisplay = useMemo(() => {
    const newCardNumber = cardNumber
    const cardToDisplay = newCardNumber?.match(/(.{1,4})/g)?.join('-')

    return newCardNumber?.length > 0 ? cardToDisplay?.match(/(.{1,1})/g)?.join(CLEAN_SPACES_CARD) : ''
  }, [cardNumber])

  return {
    changeCardNumber,
    cardNumberDisplay,
    authenticateCard,
    clearLogin,
    pinInputRef
  }
}
