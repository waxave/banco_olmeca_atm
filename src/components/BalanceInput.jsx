import { useCard } from "../hooks/useCard"

export default function BalanceInput() {
  const { balanceDisplayable } = useCard()

  return (
    <div className="flex flex-wrap items-stretch w-full relative mb-6">
      <span className="flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8  border-l-8 px-4 py-4 text-2xl">
        BALANCE
      </span>
      <input type="text" className="flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border-[#302D88]
      border-8 px-4 py-4 text-2xl rounded-r-lg ring-gray-300
      focus:outline-none hover:outline-none text-center"
      placeholder="1111-2222-3333-4444" value={balanceDisplayable} readOnly={true}/>
    </div>
  )
}
