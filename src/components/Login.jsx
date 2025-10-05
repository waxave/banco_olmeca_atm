import { useEffect } from 'react'
import { useLogin } from '../hooks/useLogin'
import Header from './Header'
import CardInput from './CardInput'
import PinSection from './PinSection'
import Errors from './Errors'

export default function Login () {
  const { authenticateCard, pinInputRef, cardNumber } = useLogin()

  useEffect(() => {
    if (cardNumber.length === 16) pinInputRef.current.focus()
  }, [cardNumber])

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    authenticateCard()
  }

  return (
    <div className='flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8 py-10'>
      <div className='w-full max-w-4xl space-y-8'>
        <Header />
        <form className='mt-8 space-y-6' onSubmit={handleLoginSubmit}>
          <Errors />
          <CardInput />
          <PinSection />
        </form>
      </div>
    </div>
  )
}
