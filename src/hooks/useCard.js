import { useContext, useMemo, useCallback } from 'react'
import { CardContext } from '../context/card'
import { formatMoney } from '../utils';
import { fetchCard } from '../services/card';

export function useCard () {
  const {
    card,
    operation,
    setCard,
    setErrors
  } = useContext(CardContext)

  const refreshCard = useCallback(() => {
    console.log('refetch card')
    fetchCard(card.id)
      .then(card => {
        setCard(card)
        setErrors(null)
      })
      .catch(error => {
        setErrors(error.message)
      })
  }, [operation])


  const balanceDisplayable = useMemo(() => {
    return formatMoney(card.balance)
  }, [card])

  return {
    card,
    balanceDisplayable,
    refreshCard
  }
}


