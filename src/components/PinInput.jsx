import { Eye } from "./Icons";

export default function PinInput() {
  return (
  <div className='flex flex-wrap items-stretch w-full relative mb-6'>
    <span className='flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
    border-[#302D88] border-t-8 border-b-8 border-l-8 px-4 py-4 text-2xl'>
      PIN
    </span>
    <input type='text' className='flex-shrink flex-grow max-w-full flex-1
    relative text-[#302D88] bg-white border border-[#302D88]
    border-8 border px-4 py-4 text-2xl text-center readonly disabled
    focus:outline-none hover:outline-none' value='* * * *' />
    <button className='flex items-center rounded-r-lg text-[#ffffff] bg-[#302D88] border
    border-[#302D88] border-t-8 border-b-8 border-r-8 px-4 py-4 text-2xl'>
      <Eye />
    </button>
  </div>
  )
}

