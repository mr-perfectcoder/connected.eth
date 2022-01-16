import Image from 'next/image'
import { useMoralis } from 'react-moralis'

const Login = () => {
  const { authenticate } = useMoralis()

  return (
    <div className=' relative bg-black'>
      <div className='flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4'>
        <Image
          className='object-cover rounded-full drop-shadow-lg bg-white animate-pulse bg-opacity-75'
          src='/connected.svg'
          height={200}
          width={200}
        />
        <button
          className='bg-yellow-500 rounded-sm p-3 font-bold animate-bounce'
          onClick={authenticate}
        >
          Login to Continue
        </button>
      </div>

      <div className='w-full h-screen blur-sm'>
        <Image src='/bg.jpg' layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Login
