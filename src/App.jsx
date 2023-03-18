import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
import { useCard } from './hooks/useCard'

const Login = lazy(() => import('./components/Login'))
const Home = lazy(() => import('./components/Home'))

function App () {
  const { hasValidCard } = useCard()

  return (
    <Suspense fallback={<Loading />}>
      {hasValidCard ? <Home /> : <Login />}
    </Suspense>
  )
}

export default App
