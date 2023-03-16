
import DigitButton from "./DigitButton"
import EnterButton from "./EnterButton"
import ClearButton from "./ClearButton"
import DeleteButton from "./DeleteButton"

const DIGITS = [1,2,3,4,5,6,7,8,9,0]

export default function PinPad({setCardPin}) {
  const handleDigitPressed = (digit) => {
    setCardPin(prevState => (
      prevState.length === 4 ? prevState : prevState + digit
    ))
  }

  const handleClearPressed = () => {
    setCardPin('')
  }

  const handleDeletePressed = (digit) => {
    setCardPin(prevState => prevState.slice(0, -1))
  }

  return(
    <div className='grid grid-cols-4 gap-4'>
      {
        DIGITS.map(digit => {
          const elements = [<DigitButton key={digit} digit={digit} handleDigitPressed={handleDigitPressed} />]
          if (digit === 3) { elements.push(<EnterButton key='enter-button' />) }
          if (digit === 6) { elements.push(<ClearButton key='clear-button' handleClearPressed={handleClearPressed} />) }
          if (digit === 9) { elements.push(<DeleteButton key='delete-button' handleDeletePressed={handleDeletePressed} />) }

          return elements
        })
      }
    </div>
  )
}
