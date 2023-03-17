export default function EnterButton () {
  return (
    <div className='col-span-1'>
      <button
        type='submit' className='font-["Roboto"] group relative
      flex w-full justify-center rounded-md bg-[#36ba59]
      text-[#06591d] hover:bg-[#01952b] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#36ba59] font-bold
      sm:py-2 lg:py-5 xl:py-5 text-4xl'
      >
        Enter
      </button>
    </div>
  )
}
