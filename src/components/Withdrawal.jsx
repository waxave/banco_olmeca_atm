import { useCard } from '../hooks/useCard'
import { useOperation } from '../hooks/useOperation'
import Header from './Header'
import BalanceInput from './BalanceInput'
import AmountInput from './AmountInput'
import CancelOperation from './CancelOperation'
import { useEffect } from 'react'
import Errors from './Errors'
import Success from './Success'
import WithdrawalButton from './WithdrawalButton'
import LogoutButton from './LogoutButton'

export default function Withdrawal ({ setOperationType }) {
  const { refreshCard } = useCard()
  const { amount, setAmount, createWithdrawal, operation } = useOperation()

  const handleWithdrawal = () => {
    createWithdrawal()
  }

  useEffect(() => {
    refreshCard()
  }, [operation])

  return (
    <div className='flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8 py-10'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <Errors />
        <Success />
        <BalanceInput />
        <AmountInput amount={amount} setAmount={setAmount} />
        <WithdrawalButton handleClick={handleWithdrawal} />
        <CancelOperation setOperationType={setOperationType} />
        <LogoutButton />
      </div>
    </div>
  )
}
