import { Suspense, useEffect, lazy } from 'react'
import Loading from './components/Loading'
import { CardProvider } from './context/card'
import { useLogin } from './hooks/useLogin'

const Login = lazy(() => import('./components/Login'))
const Bank = lazy(() => import('./components/Bank'))

function App() {
  const { hasValidCard } = useLogin()

  return (
    <Suspense fallback={ <Loading /> }>
      { hasValidCard ? <Bank /> : <Login /> }
    </Suspense>
  )
}

export default App
