import { usePinPad } from '../hooks/usePinPad'
import { ClosedEye, Eye } from './Icons'
import { PIN_PLACEHOLDER } from '../constants'

export default function PinInput () {
  const { changeCardPin, pinDisplay, pinInputRef, pinVisible, setPinVisible } = usePinPad()

  return (
    <div className='flex flex-wrap items-stretch w-full relative mb-6'>
      <span className='flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-l-8
      sm:px-2 sm:py-2 lg:px-4 lg:py-4 xl:px-6 xl:py-6 sm:text-lg lg:text-2xl'
      >
        PIN
      </span>
      <input
        type='text' className='flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border-[#302D88]
      border-8 text-center readonly disabled focus:outline-none hover:outline-none
      sm:px-2 sm:py-2 lg:px-4 lg:py-4 xl:px-6 xl:py-6 sm:text-lg lg:text-2xl'
        id='pin' data-testid='pin'
        placeholder={PIN_PLACEHOLDER} value={pinDisplay}
        onKeyDown={changeCardPin} ref={pinInputRef} onChange={changeCardPin}
      />
      <button
        type='button' className='flex items-center rounded-r-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-r-8 px-4 py-4 text-2xl indent-4'
        onClick={() => setPinVisible(!pinVisible)}
      >
        {pinVisible ? <ClosedEye /> : <Eye />}
      </button>
    </div>
  )
}
