import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Client/header/HeaderDefault'
import Footer from '../components/Client/footer/FooterDefault'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h1>Home Page</h1>
      <Footer/>
      
    </main>
  )
}
