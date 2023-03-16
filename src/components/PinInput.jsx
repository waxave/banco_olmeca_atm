import { useState } from "react";
import { usePinPad } from "../hooks/usePinPad";
import { Eye } from "./Icons";

export default function PinInput() {
  const { changeCardPin, pinDisplay, pinInputRef, pinVisible, setPinVisible } = usePinPad()

  return (
    <div className='flex flex-wrap items-stretch w-full relative mb-6'>
      <span className='flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-l-8 px-4 py-4 text-2xl'>
        PIN
      </span>
      <input type='text' className='flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border border-[#302D88]
      px-4 py-4 text-2xl text-center readonly disabled
      focus:outline-none hover:outline-none' value={pinDisplay}
      onKeyDown={changeCardPin} ref={pinInputRef} onChange={changeCardPin} />
      <button type='button' className='flex items-center rounded-r-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8 border-r-8 px-4 py-4 text-2xl indent-4'
      onClick={() => setPinVisible(!pinVisible)}>
        <Eye />
      </button>
    </div>
  )
}

