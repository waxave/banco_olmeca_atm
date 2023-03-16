import { useCallback, useContext, useMemo, useState } from 'react'
import { CardContext } from '../context/card'
import { createOperation } from '../services/operation'
import { OPERATIONS } from '../constants'
import { formatMoney } from '../utils'

export function useOperation () {
  const [amount, setAmount] = useState(null)

  const {
    card,
    errors,
    setErrors,
    operation,
    setOperation
  } = useContext(CardContext)

  const createDeposit = useCallback(() => {
    const kind = OPERATIONS.DEPOSIT
    createOperation({card, amount, kind})
      .then(operation => {
        setOperation(operation)
        setErrors(null)
      })
      .catch(error => {
        setErrors(error.message)
      })
  }, [amount])

  const createWithdrawal = useCallback(() => {
    const kind = OPERATIONS.WITHDRAWAL
    createOperation({card, amount, kind})
      .then(operation => {
        setOperation(operation)
        setErrors(null)
      })
      .catch(error => {
        setErrors(error.message)
      })
  }, [amount])

  const clearOperation = useCallback(() => {
    setOperation(null)
    setErrors(null)
  }, [])

  const amountDisplayable = useMemo(() => {
    return formatMoney(operation?.amount)
  }, [operation])

  return {
    amount,
    setAmount,
    createDeposit,
    createWithdrawal,
    errors,
    operation,
    amountDisplayable,
    clearOperation
  }
}


