import { useLogin } from "../hooks/useLogin"

export default function Errors() {
  const { errors } = useLogin()

  return (
     errors &&
      (
        <div className='font-["Roboto"] bg-red-100 border border-red-400
          text-red-700 px-8 py-5 rounded relative text-xl' role="alert">
          <strong class="font-bold">{errors}</strong>
        </div>
      )
  )
}
