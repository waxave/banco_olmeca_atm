import { useState } from "react"

const CLEAN_SPACES_CARD = '   '

export default function CardInput({cardNumber, setCardNumber}) {
  // const [cardNumberDisplay, setCardNumberDisplay] = useState(cardNumber)

  const handleChangeCardNumber = (event) => {
    const newCardNumber = cardNumber
    if(event.keyCode === 8) {
      return setCardNumber(cleanCardNumber(newCardNumber.slice(0, -1)))
    }

    if (newCardNumber.length === 16) return

    setCardNumber(cleanCardNumber(newCardNumber + event.key))
  }

  const cardNumberDisplay = () => {
    const newCardNumber = cardNumber
    const cardToDisplay = newCardNumber.match(/(.{1,4})/g)?.join('-')

    return newCardNumber.length > 0 ? cardToDisplay.match(/(.{1,1})/g).join(CLEAN_SPACES_CARD) : ''
  }

  const cleanCardNumber = (card) => {
    return card.replace(/-/g, '').replace(/[^0-9]/g, '')
  }

  return (
    <div className="flex flex-wrap items-stretch w-full relative mb-6">
      <span className="flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8  border-l-8 px-4 py-4 text-2xl">
        CARD
      </span>
      <input type="text" className="flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border border-[#302D88]
      border-8 border px-4 py-4 text-2xl rounded-r-lg ring-gray-300
      focus:outline-none hover:outline-none text-center"
      placeholder="1111-2222-3333-4444" value={cardNumberDisplay()}
      onKeyDown={handleChangeCardNumber}/>
    </div>
  )
}

