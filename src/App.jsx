import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
import { useLogin } from './hooks/useLogin'

const Login = lazy(() => import('./components/Login'))
const Home = lazy(() => import('./components/Home'))

function App () {
  const { hasValidCard } = useLogin()

  return (
    <Suspense fallback={<Loading />}>
      {hasValidCard ? <Home /> : <Login />}
    </Suspense>
  )
}

export default App
