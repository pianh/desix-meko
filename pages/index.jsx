import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Client/header/HeaderDefault'
import Footer from '../components/Client/footer/FooterDefault'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container-fluid'>
      <Header />
      <h1>Content</h1>
      <Footer/>
      
    </div>
  )
}
