import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_PIN } from '../constants'

export function usePinPad () {
  const [pinVisible, setPinVisible] = useState(false)

  const {
    cardPin,
    setCardPin,
    pinInputRef
  } = useContext(CardContext)

  const cleanCardPin = (pin) => {
    return pin.replace(/w/g, '').replace(/[^0-9]/g, '')
  }

  const changeCardPin = useCallback((event) => {
    const newPin = cardPin

    if (event.keyCode === 8) {
      return setCardPin(cleanCardPin(newPin.slice(0, -1)))
    }

    if (newPin.length === 4) return

    setCardPin(cleanCardPin(newPin + event.key))
  }, [cardPin])

  const pinDisplay = useMemo(() => {
    const newPin = cardPin
    const pinToDisplay = pinVisible ? newPin : newPin?.replace(/[0-9]/g, '*')

    return newPin?.length > 0 ? pinToDisplay?.match(/(.{1,1})/g)?.join(CLEAN_SPACES_PIN) : ''
  }, [cardPin, pinVisible])

  const digitPressed = (digit) => {
    setCardPin(prevState => (
      prevState.length === 4 ? prevState : prevState + digit
    ))
  }

  const clearPressed = () => {
    setCardPin('')
  }

  const deletePressed = (digit) => {
    setCardPin(prevState => prevState.slice(0, -1))
  }

  return {
    changeCardPin,
    pinDisplay,
    pinInputRef,
    digitPressed,
    clearPressed,
    deletePressed,
    pinVisible,
    setPinVisible
  }
}
