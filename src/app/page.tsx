import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='bg-[#f8e6de] '>
        <About />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
