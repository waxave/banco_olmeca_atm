import { Suspense, lazy, useState } from 'react'
import Loading from './Loading'
import { BANK_ACTIONS } from '../constants'

const Bank = lazy(() => import('./Bank'))
const Deposit = lazy(() => import('./Deposit'))
const Withdrawal = lazy(() => import('./Withdrawal'))

export default function Home () {
  const [operationType, setOperationType] = useState(BANK_ACTIONS.BANK)

  const RENDER_BY_ACTION = {
    [BANK_ACTIONS.BANK]: () => {
      return <Bank setOperationType={setOperationType} />
    },
    [BANK_ACTIONS.DEPOSIT]: () => {
      return <Deposit setOperationType={setOperationType} />
    },
    [BANK_ACTIONS.WITHDRAWAL]: () => {
      return <Withdrawal setOperationType={setOperationType} />
    }
  }

  const renderOperation = () => {
    const operation = RENDER_BY_ACTION[operationType]
    return operation()
  }

  return (
    <Suspense fallback={<Loading />}>
      {
        renderOperation()
      }
    </Suspense>
  )
}
