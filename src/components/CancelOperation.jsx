import { BANK_ACTIONS } from "../constants"

export default function CancelOperation({setOperationType}) {

  const handleCancel = () => {
    setOperationType(BANK_ACTIONS.BANK)
  }

  return (
    <button onClick={handleCancel} type='button'
    className='font-["Roboto"] group relative flex w-full
      justify-center rounded-md bg-[#dc1111] py-5 px-5 text-md
      text-[#4d0808] hover:bg-[#a40f0f] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#dc1111] font-bold text-4xl'>
      Cancel
    </button>
  )
}
