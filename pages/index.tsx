import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Client/Header/Header'
import Footer from '../components/Client/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h1>Hello</h1>
      <Footer/>
      
    </main>
  )
}
