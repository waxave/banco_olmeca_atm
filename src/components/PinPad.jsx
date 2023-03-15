
import DigitButton from "./DigitButton"
import CancelButton from "./CancelButton"
import ClearButton from "./ClearButton"
import EnterButton from "./EnterButton"

const DIGITS = [1,2,3,4,5,6,7,8,9,0]

export default function PinPad(params) {
  return(
    <div className='grid grid-cols-4 gap-4'>
      {
        DIGITS.map(digit => {
          const elements = [<DigitButton key={digit} digit={digit} />]
          if (digit === 3) { elements.push(<EnterButton key='enter-button' />) }
          if (digit === 6) { elements.push(<ClearButton key='clear-button' />) }
          if (digit === 9) { elements.push(<CancelButton key='cancel-button' />) }

          return elements
        })
      }
    </div>
  )
}
