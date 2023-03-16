import { useCard } from "../hooks/useCard"
import Header from "./Header"
import BalanceInput from "./BalanceInput"
import DepositButton from "./DepositButton"
import WithdrawalButton from "./WithdrawalButton"

export default function Bank() {
  const { card, balanceDisplayable } = useCard()

  return (
    <div className='flex min-h-full items-center justify-center py-60 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <BalanceInput />
        <DepositButton />
        <WithdrawalButton />
      </div>
    </div>
  )
}
