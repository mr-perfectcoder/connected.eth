import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Login from '../components/Login'
import Messages from '../components/Messages'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Connected.eth | BlockChain based chatRoom</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Login />
      </>
    )
  }

  return (
    <div className=' h-screen overflow-y-scroll bg-gradient-to-t from-black to-purple-900 overflow-hidden'>
      <Head>
        <title>Connected.eth | BlockChain based chatRoom</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-screen-2xl mx-auto'>
        <Header />
        <Messages />
      </div>
    </div>
  )
}
