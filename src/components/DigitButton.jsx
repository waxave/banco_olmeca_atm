export default function DigitButton ({ digit, handleDigitPressed }) {
  return (
    <>
      {digit === 0 && <div className='col-span-1' />}
      <div className='col-span-1'>
        <button
          type='button' onClick={() => handleDigitPressed(digit)}
          className='font-["Roboto"] group relative flex w-full
        justify-center rounded-md bg-[#7E7BE4]
        text-white hover:bg-[#302D88] focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[#302D88] font-bold sm:py-2 lg:py-5 xl:py-5 text-4xl'
        >
          {digit}
        </button>
      </div>
    </>
  )
}
