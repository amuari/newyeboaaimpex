import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'General merchants import export goods clearing and fowarding chandling general farming building and road construction civil works plumbing and electrical works',
}
const page = () => {
  return (
    <div>
      <Navbar />
      <section className='p-40'>
        <About />
      </section>
      <Footer />
    </div>
  )
}

export default page
