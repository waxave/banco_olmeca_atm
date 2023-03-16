import { useCard } from "../hooks/useCard"
import { useCallback, useMemo } from "react"
import { cleanNumericInput } from '../utils'

export default function AmountInput({amount, setAmount}) {
  const { balanceDisplayable } = useCard()


  const handleChange = useCallback((event) => {
    const newAmount = amount

    if(event.keyCode === 8) {
      return setAmount(cleanNumericInput(newAmount.slice(0, -1)))
    }

    setAmount(cleanNumericInput(newAmount + event.key))
  }, [amount])

  const amountDisplay = useMemo(() => {
    const newAmount = amount
    return cleanNumericInput(newAmount)
  }, [amount])

  return (
    <div className="flex flex-wrap items-stretch w-full relative mb-6">
      <span className="flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border
      border-[#302D88] border-t-8 border-b-8  border-l-8 px-4 py-4 text-2xl">
        AMOUNT
      </span>
      <input type="text" className="flex-shrink flex-grow max-w-full flex-1
      relative text-[#302D88] bg-white border-[#302D88]
      border-8 px-4 py-4 text-2xl rounded-r-lg ring-gray-300
      focus:outline-none hover:outline-none text-center"
      placeholder="1111-2222-3333-4444" placeholder={balanceDisplayable}
      onKeyDown={handleChange} value={amountDisplay} onChange={handleChange} type='number' />
    </div>
  )
}
