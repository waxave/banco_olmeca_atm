import { useContext, useMemo, useCallback } from 'react'
import { CardContext } from '../context/card'
import { formatMoney } from '../utils'
import { fetchCard } from '../services/card'
import { useError } from './useError'

export function useCard () {
  const { setError, clearErrors } = useError()
  const {
    card,
    operation,
    setCard
  } = useContext(CardContext)

  const refreshCard = useCallback(() => {
    fetchCard(card.id)
      .then(card => {
        setCard(card)
        clearErrors()
      })
      .catch(error => {
        setError(error.message)
      })
  }, [operation])

  const clearCard = useCallback(() => {
    setCard(null)
    clearErrors()
  }, [])

  const balanceDisplayable = useMemo(() => {
    return formatMoney(card?.balance)
  }, [card])

  const hasValidCard = useMemo(() => {
    return card
  }, [card])

  return {
    card,
    balanceDisplayable,
    refreshCard,
    clearCard,
    hasValidCard
  }
}
