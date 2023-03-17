import { useOperation } from '../hooks/useOperation'

export default function Success () {
  const { operation, errors, amountDisplayable } = useOperation()

  return (
    operation && !errors &&
      (
        <div
          className='font-["Roboto"] bg-[#36ba59] border border-[#36ba59]
          text-[#06591d] px-8 py-5 rounded relative text-xl' role='alert'
        >
          <strong class='font-bold'>{operation.concept} of {amountDisplayable}</strong>
        </div>
      )
  )
}
