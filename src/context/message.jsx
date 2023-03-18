import { createContext, useState } from 'react'

export const MesasageContext = createContext()

export function MessageProvider ({ children }) {
  const [messages, setMessages] = useState({
    error: null,
    success: null
  })

  return (
    <MesasageContext.Provider value={{
      messages,
      setMessages
    }}
    >
      {children}
    </MesasageContext.Provider>
  )
}
