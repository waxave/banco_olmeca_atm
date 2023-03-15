import largeLogo from '../assets/logos/large.png'
import CardInput from './CardInput'
import PinInput from './PinInput'
import PinPad from './PinPad'

export default function Login() {
  return (
        <div className='flex min-h-full items-center justify-center py-60 px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-4xl space-y-8'>
            <div>
              <img className='mx-auto h-50 w-auto' src={largeLogo} alt='Banco Olmeca'/>
              <h2 className='font-["Raleway"] mt-6 text-center text-4xl font-bold tracking-tight text-gray-900 text-[#302D88]'>
                Banco Olmeca
              </h2>
            </div>
            <form className='mt-8 space-y-6' action='#' method='POST'>
              <CardInput />
              <PinInput />
              <PinPad />
            </form>
          </div>
        </div>

  )
}
