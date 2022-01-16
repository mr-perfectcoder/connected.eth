import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar'
import ChangeUserName from './ChangeUserName'
function Header() {
  const { user } = useMoralis()
  return (
    <div className=' sticky top-0 p-5 z-50 bg-black shadow-sm text-purple-500 border-b-2 border-yellow-600'>
      <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:inline-center'>
        <div className='relative h-48 w-48 mx-auto hidden lg:inline-grid  bottom-20'>
          <Image
            className='rounded-full '
            src='/connected.svg'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='col-span-4 text-left lg:text-center'>
          <div
            className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8
          rounded-full'
          >
            <Avatar logoutOnPress />
          </div>
          <h1 className=' text-3xl'>Welcome to Connected.eth</h1>
          <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  )
}

export default Header
