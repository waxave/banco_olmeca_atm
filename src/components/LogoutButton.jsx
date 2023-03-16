import { BANK_ACTIONS } from "../constants"
import { useCard } from "../hooks/useCard"
import { useOperation } from "../hooks/useOperation"

export default function LogoutButton() {
  const { clearCard } = useCard()
  const { clearOperation } = useOperation()

  const handleLogout = () => {
    clearOperation()
    clearCard()
  }

  return (
    <button onClick={handleLogout} type='button'
    className='font-["Roboto"] group relative flex w-full
      justify-center rounded-md bg-[#dc1111] py-5 px-5 text-md
      text-[#4d0808] hover:bg-[#a40f0f] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#dc1111] font-bold text-4xl'>
      Logout
    </button>
  )
}
