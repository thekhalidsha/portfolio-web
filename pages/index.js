import Image from 'next/image'
//import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Banner from '@/components/HeroSection'


//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title> Home | RookieTools</title>
      </Head>
      <Banner></Banner>
    </div>
    </>
  )
}
