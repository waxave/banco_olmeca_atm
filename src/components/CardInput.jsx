export default function CardInput() {
  return (
  <div className="flex flex-wrap items-stretch w-full relative mb-6">
    <span className="flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
    border-[#302D88] border-t-8 border-b-8  border-l-8 px-4 py-4 text-2xl">
      CARD
    </span>
    <input type="text" className="disabled readonly flex-shrink flex-grow max-w-full flex-1
    relative text-[#302D88] bg-white border border-[#302D88]
    border-8 border px-4 py-4 text-2xl rounded-r-lg ring-gray-300
    focus:outline-none hover:outline-none" placeholder="9888-1221-2112-2122"
    value='9888-1221-2112-2122' />
  </div>
  )
}

