import { useCallback, useContext, useMemo, useState } from 'react'
import { CardContext } from '../context/card'
import { createOperation } from '../services/operation'
import { OPERATIONS } from '../constants'
import { formatMoney } from '../utils'
import { OperationContext } from '../context/operation'
import { useError } from './useError'
import { useSuccess } from './useSuccess'

export function useOperation () {
  const [amount, setAmount] = useState(null)
  const { setError, clearErrors } = useError()
  const { setSuccess, clearSuccess } = useSuccess()

  const {
    card
  } = useContext(CardContext)

  const {
    operation,
    setOperation
  } = useContext(OperationContext)

  const createDeposit = useCallback(() => {
    const kind = OPERATIONS.DEPOSIT
    createOperation({ card, amount, kind })
      .then(operation => {
        clearErrors()
        clearSuccess()

        setOperation(operation)
        setSuccess(`${operation.concept} of ${formatMoney(operation.amount)}`)
      })
      .catch(error => {
        clearSuccess()
        setError(error.message)
      })
  }, [amount])

  const createWithdrawal = useCallback(() => {
    const kind = OPERATIONS.WITHDRAWAL
    createOperation({ card, amount, kind })
      .then(operation => {
        clearErrors()
        clearSuccess()

        setOperation(operation)
        setSuccess(`${operation.concept} of ${formatMoney(operation.amount)}`)
      })
      .catch(error => {
        clearSuccess()
        setError(error.message)
      })
  }, [amount])

  const clearOperation = useCallback(() => {
    setOperation(null)

    clearErrors()
    clearSuccess()
  }, [])

  const amountDisplayable = useMemo(() => {
    return formatMoney(operation?.amount)
  }, [operation])

  return {
    amount,
    setAmount,
    createDeposit,
    createWithdrawal,
    operation,
    amountDisplayable,
    clearOperation
  }
}
