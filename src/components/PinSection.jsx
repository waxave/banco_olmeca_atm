// PinSection.jsx (nuevo componente que agrupa todo)
import PinInput from './PinInput'
import PinPad from './PinPad'
import { usePinPad } from '../hooks/usePinPad'

export default function PinSection () {
  const pinPad = usePinPad()

  return (
    <>
      <PinInput {...pinPad} />
      <PinPad {...pinPad} />
    </>
  )
}
