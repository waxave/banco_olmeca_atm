import { useCallback, useContext, useEffect, useMemo } from 'react'
import { MesasageContext } from '../context/message'

export function useError () {
  const { messages, setMessages } = useContext(MesasageContext)

  const setError = useCallback((error) => {
    setMessages(prevState => ({
      ...prevState,
      error
    }))
  }, [])

  const clearErrors = useCallback(() => {
    setMessages(prevState => ({
      ...prevState,
      error: null
    }))
  }, [])

  const hasErrors = useMemo(() => {
    return !!messages.error
  }, [messages])

  const errors = useMemo(() => {
    return messages.error
  }, [messages])

  return {
    errors,
    setError,
    hasErrors,
    clearErrors
  }
}
