import { useCallback, useContext, useEffect, useMemo } from 'react'
import { MesasageContext } from '../context/message'

export function useSuccess () {
  const { messages, setMessages } = useContext(MesasageContext)

  const setSuccess = useCallback((success) => {
    setMessages(prevState => ({
      ...prevState,
      success
    }))
  }, [])

  const clearSuccess = useCallback(() => {
    setMessages(prevState => ({
      ...prevState,
      success: null
    }))
  }, [])

  const hasSuccess = useMemo(() => {
    return !!messages.success
  }, [messages])

  const success = useMemo(() => {
    return messages.success
  }, [messages])

  return {
    success,
    setSuccess,
    hasSuccess,
    clearSuccess,
    messages
  }
}
