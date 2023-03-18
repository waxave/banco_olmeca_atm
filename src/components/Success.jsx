import { useSuccess } from '../hooks/useSuccess'

export default function Success () {
  const { hasSuccess, success } = useSuccess()

  return (
    hasSuccess &&
      (
        <div
          id='success' data-testid='success'
          className='font-["Roboto"] bg-[#36ba59] border border-[#36ba59]
          text-[#06591d] px-8 py-5 rounded relative text-xl' role='alert'
        >
          <strong className='font-bold'>{success}</strong>
        </div>
      )
  )
}
