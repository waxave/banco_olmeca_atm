import { useCallback, useContext, useMemo, useState } from 'react'
import { CardContext } from '../context/card'
import { CLEAN_SPACES_PIN } from '../constants'

export function usePinPad () {
  const [pinVisible, setPinVisible] = useState(false)
  const { cardPin, setCardPin, pinInputRef } = useContext(CardContext)

  const changeCardPin = useCallback((event) => {
    const newPin = cardPin
    if (event.key === 'Backspace') {
      setCardPin(newPin.slice(0, -1))
      return
    }
    if (/^[0-9]$/.test(event.key) && newPin.length < 4) {
      setCardPin(newPin + event.key)
    }
  }, [cardPin])

  const pinDisplay = useMemo(() => {
    const display = pinVisible ? cardPin : cardPin.replace(/[0-9]/g, '*')
    return display?.split('').join(CLEAN_SPACES_PIN)
  }, [cardPin, pinVisible])

  const digitPressed = (digit) => {
    setCardPin(prev => (prev.length < 4 ? prev + digit : prev))
  }

  const clearPressed = () => setCardPin('')

  const deletePressed = () => setCardPin(prev => prev.slice(0, -1))

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
