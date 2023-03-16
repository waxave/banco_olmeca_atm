export default function ClearButton({ handleClearPressed }) {
  return (
    <div className='col-span-1'>
      <button type='button' onClick={handleClearPressed}
      className='font-["Roboto"] group relative flex w-full
      justify-center rounded-md bg-[#f7df1e] py-5 px-5 text-md
      text-[#958711] hover:bg-[#d3bd19] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#f7df1e] font-bold text-4xl hover:text-[#958711]'>
        Clear
      </button>
    </div>
  )
}

