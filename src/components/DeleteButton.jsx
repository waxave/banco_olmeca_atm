export default function DeleteButton({handleDeletePressed}) {
  return (
    <div className='col-span-1'>
      <button onClick={handleDeletePressed} className='font-["Roboto"] group relative flex w-full
      justify-center rounded-md bg-[#dc1111] py-5 px-5 text-md
      font-semibold text-[#4d0808] hover:bg-[#a40f0f] focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#dc1111] font-bold text-4xl'>
        Delete
      </button>
    </div>
  )
}

