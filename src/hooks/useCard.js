import { useCallback, useContext, useEffect, useMemo } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_CARD } from '../constants'
import { authCard } from '../services/card'

export function useCard () {
  const {
    cardNumber,
    setCardNumber,
    cardPin,
    setCardPin,
    pinInputRef,
    card,
    setCard,
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
    console.log({cardNumber})
    console.log({cardPin})

    // const somekey = import.meta.env.VITE_BANCO_OLMECA_API
    // console.log({somekey})
    authCard({cardNumber, cardPin})
      .then(card => {
        setCard(card)
      })
      .catch(error => {
        console.log({ error })
        // setLoading(false)
      })
  }, [cardNumber, cardPin])

  const cardNumberDisplay = useMemo(() => {
    const newCardNumber = cardNumber
    const cardToDisplay = newCardNumber.match(/(.{1,4})/g)?.join('-')

    return newCardNumber.length > 0 ? cardToDisplay.match(/(.{1,1})/g).join(CLEAN_SPACES_CARD) : ''
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
    hasValidCard
  }
}


