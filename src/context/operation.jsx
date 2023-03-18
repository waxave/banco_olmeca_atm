import { createContext, useState } from 'react'
import { MessageProvider } from './message'

export const OperationContext = createContext()

export function OperationProvider ({ children }) {
  const [operation, setOperation] = useState(null)

  return (
    <OperationContext.Provider value={{
      operation,
      setOperation
    }}
    >
      {children}
    </OperationContext.Provider>
  )
}
