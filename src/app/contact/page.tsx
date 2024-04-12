import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'General merchants import export goods clearing and fowarding chandling general farming building and road construction civil works plumbing and electrical works',
}
const page = () => {
  return (
    <div className='container'>
      <Navbar />
      <section className='p-50 '>
        <section className='bg-[#f8e6de] dark:bg-[#0b0e14] py-40'>
          <div className='container px-6 py-12 mx-auto'>
            <div className='text-center '>
              <p className='font-medium  dark:text-blue-400'>Contact us</p>
              <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>
                {/* We’d love to hear from you */}
              </h1>
              <p className='mt-3 text-gray-500 dark:text-gray-400'>
                {/* Chat to our friendly team. */}
              </p>
            </div>
            <div className='grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2'>
              <div className='p-4 rounded-lg bg-orange-50 dark:bg-gray-800 md:p-6'>
                <span className='inline-block p-3  rounded-lg bg-orange-100'>
                  <IconMail size={20} />
                </span>
                <h2 className='mt-4 text-base font-medium text-gray-800 dark:text-white'>
                  Email Us
                </h2>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  Speak to our friendly team.
                </p>
                <p className='mt-2 text-sm dark:text-blue-400'>
                  <a href='mailto:yeboaaimpex@gmail.com'>
                    yeboaaimpex@gmail.com
                  </a>
                </p>
              </div>
              <div className='p-4 rounded-lg bg-orange-50 dark:bg-gray-800 md:p-6'>
                <span className='inline-block p-3 bg-orange-100 rounded-lg  dark:bg-gray-700'>
                  <IconMapPin size={20} />
                </span>
                <h2 className='mt-4 text-base font-medium text-gray-800 dark:text-white'>
                  Visit us
                </h2>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  {/* Visit our office HQ.. */}
                </p>
                <p className='mt-2 text-sm '>Delawin Avenue,Golf City</p>
              </div>
              <div className='p-4 rounded-lg bg-orange-50 dark:bg-gray-800 md:p-6'>
                <span className='inline-block p-3 rounded-lg bg-orange-100'>
                  <IconPhone size={20} />
                </span>
                <h2 className='mt-4 text-base font-medium text-gray-800 dark:text-white'>
                  Call us
                </h2>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className='mt-2 text-sm  '>
                  <a href='tel:+233205932004'>+233205932004</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default page
