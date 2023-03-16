export default function WithdrawalButton({handleClick}) {
  return (
    <button onClick={() => handleClick()} type='button'
    className='font-["Roboto"] group relative flex w-full
    justify-center rounded-md bg-[#7E7BE4] py-5 px-5 text-md
    text-white hover:bg-[#302D88] focus-visible:outline
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[#302D88] font-bold text-4xl'>
      Withdrawal
    </button>
  )
}
