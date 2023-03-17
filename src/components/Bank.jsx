import Header from './Header'
import BalanceInput from './BalanceInput'
import DepositButton from './DepositButton'
import WithdrawalButton from './WithdrawalButton'
import LogoutButton from './LogoutButton'
import { BANK_ACTIONS } from '../constants'

export default function Bank ({ setOperationType }) {
  const handleDeposit = () => {
    setOperationType(BANK_ACTIONS.DEPOSIT)
  }

  const handleWithdrawal = () => {
    setOperationType(BANK_ACTIONS.WITHDRAWAL)
  }

  return (
    <div className='flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8 py-10'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <BalanceInput />
        <DepositButton handleClick={handleDeposit} />
        <WithdrawalButton handleClick={handleWithdrawal} />
        <LogoutButton />
      </div>
    </div>
  )
}
