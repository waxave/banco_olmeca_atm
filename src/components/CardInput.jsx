import { useLogin } from '../hooks/useLogin'
import { CARD_PLACEHOLDER } from '../constants'

export default function CardInput () {
  const { changeCardNumber, cardNumberDisplay } = useLogin()

  return (
    <div className='flex flex-wrap items-stretch w-full relative mb-6'>
      <span className='flex items-center rounded-l-lg text-[#ffffff] bg-[#302D88] border border-[#302D88] border-t-8 border-b-8 border-l-8 sm:px-2 sm:py-2 lg:px-4 lg:py-4 xl:px-6 xl:py-6 sm:text-lg lg:text-2xl'>
        CARD
      </span>
      <input
        id='card'
        data-testid='card'
        type='tel'
        inputMode='numeric'
        className='flex-shrink flex-grow max-w-full flex-1 relative text-[#302D88] bg-white border-[#302D88] border-8 rounded-r-lg ring-gray-300 focus:outline-none hover:outline-none text-center sm:px-2 sm:py-2 lg:px-4 lg:py-4 xl:px-6 xl:py-6 sm:text-lg lg:text-2xl'
        placeholder={CARD_PLACEHOLDER}
        value={cardNumberDisplay}
        onKeyDown={changeCardNumber}
        onChange={changeCardNumber}
      />
    </div>
  )
}
