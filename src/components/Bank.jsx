import { useCard } from "../hooks/useCard"
import Header from "./Header"
import BalanceInput from "./BalanceInput"
import DepositButton from "./DepositButton"
import WithdrawalButton from "./WithdrawalButton"
import { useCallback, useEffect, useState } from "react"
import { BANK_ACTIONS } from '../constants'
import { useOperation } from "../hooks/useOperation"

export default function Bank({setOperationType}) {
  const { card, balanceDisplayable, refreshCard } = useCard()

  const handleDeposit = () => {
    setOperationType(BANK_ACTIONS.DEPOSIT)
  }

  const handleWithdrawal = () => {
    setOperationType(BANK_ACTIONS.WITHDRAWAL)
  }

  return (
    <div className='flex min-h-full items-center justify-center py-60 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <BalanceInput />
        <DepositButton handleClick={handleDeposit} />
        <WithdrawalButton handleClick={handleWithdrawal} />
      </div>
    </div>
  )
}
