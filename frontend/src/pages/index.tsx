import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import WhoIs from './components/WhoIs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Who Is?</title>
      </Head>
      <main>
          <WhoIs/>
      </main>
    </>
  )
}
