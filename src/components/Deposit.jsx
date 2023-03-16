import { useCard } from "../hooks/useCard"
import { useOperation } from "../hooks/useOperation"
import Header from "./Header"
import BalanceInput from "./BalanceInput"
import AmountInput from "./AmountInput"
import DepositButton from "./DepositButton"
import CancelOperation from "./CancelOperation"
import { useState, useCallback, useMemo, useEffect } from "react"
import { cleanNumericInput } from '../utils'
import Errors from './Errors'
import Success from './Success'

export default function Deposit({setOperationType}) {
  const { card, balanceDisplayable, refreshCard } = useCard()
  const { amount, setAmount, createDeposit, errors, operation } = useOperation()

  const handleDeposit = () => {
    createDeposit()
  }

  useEffect(() => {
    refreshCard()
  }, [operation])

  return (
    <div className='flex min-h-full items-center justify-center py-60 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <Errors />
        <Success />
        <BalanceInput />
        <AmountInput amount={amount} setAmount={setAmount} />
        <DepositButton handleClick={handleDeposit} />
        <CancelOperation setOperationType={setOperationType} />
      </div>
    </div>
  )
}
