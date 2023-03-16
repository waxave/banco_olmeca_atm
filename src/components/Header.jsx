import largeLogo from '../assets/logos/large.png'

export default function Header() {
  return (
    <div>
      <img className='mx-auto h-50 w-auto' src={largeLogo} alt='Banco Olmeca'/>
      <h2 className='font-["Raleway"] mt-6 text-center text-4xl font-bold tracking-tight text-[#302D88]'>
        Banco Olmeca
      </h2>
    </div>
  )
}
