import { useState } from "react";
import { Eye } from "./Icons";

const CLEAN_SPACES_PIN = '        '

export default function PinInput({cardPin, setCardPin, pinRef}) {
  const [pinVisible, setPinVisible] = useState(false)

  const handleChangeCardPin = (event) => {
    const newPin = cardPin
    if(event.keyCode === 8) {
      return setCardPin(cleanCardPin(newPin.slice(0, -1)))
    }

    if (newPin.length === 4) return

    setCardPin(cleanCardPin(newPin + event.key))
  }

  const pinInputDisplay = () => {
    const newPin = cardPin
    const pinToDisplay = pinVisible ? newPin : newPin.replace(/[0-9]/g, '*')

    return newPin.length > 0 ? pinToDisplay.match(/(.{1,1})/g).join(CLEAN_SPACES_PIN) : ''
  }

  const cleanCardPin = (pin) => {
    return pin.replace(/w/g, '').replace(/[^0-9]/g, '')
  }

  return (
    <div className='flex flex-wrap items-stretch w-full relative mb-6'>
      <span className='flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-l-8 px-4 py-4 text-2xl'>
        PIN
      </span>
      <input type='text' className='flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border border-[#302D88]
      border-8 border px-4 py-4 text-2xl text-center readonly disabled
      focus:outline-none hover:outline-none' value={pinInputDisplay()}
      onKeyDown={handleChangeCardPin} ref={pinRef} />
      <button className='flex items-center rounded-r-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-r-8 px-4 py-4 text-2xl indent-4'
      onClick={() => setPinVisible(!pinVisible)}>
        <Eye />
      </button>
    </div>
  )
}

