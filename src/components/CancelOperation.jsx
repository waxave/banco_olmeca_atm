import { BANK_ACTIONS } from '../constants'
import { useOperation } from '../hooks/useOperation'

export default function CancelOperation ({ setOperationType }) {
  const { clearOperation } = useOperation()

  const handleCancel = () => {
    clearOperation()
    setOperationType(BANK_ACTIONS.BANK)
  }

  return (
    <button
      onClick={handleCancel} type='button'
      className='font-["Roboto"] group relative flex w-full
      justify-center rounded-md bg-[#dc1111] py-5 px-5 text-md
      text-[#4d0808] hover:bg-[#a40f0f] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#dc1111] font-bold text-4xl
      sm:py-4 lg:py-4 xl:py-6 sm:text-2xl
      sm:px-4 lg:px-4 xl:px-6 xl:text-4xl'
    >
      Back to menu
    </button>
  )
}
