import { Suspense, useEffect, lazy } from 'react'
import { CardProvider } from './context/card'
import { useCard } from './hooks/useCard'

const Login = lazy(() => import('./components/Login'))
const Logged = lazy(() => import('./components/Logged'))

function App() {
  const { hasValidCard } = useCard()

  return (
    <Suspense fallback={<div>Loading</div>}>
      { hasValidCard ? <Logged /> : <Login /> }
    </Suspense>
  )
}

export default App
