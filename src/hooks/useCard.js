import { useContext, useMemo } from 'react'
import { CardContext } from '../context/card'

export function useCard () {
  const {
    card
  } = useContext(CardContext)

  const balanceDisplayable = useMemo(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(card.balance)
  }, [card])

  return {
    card,
    balanceDisplayable
  }
}


