import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <>
      <Header title='About' />
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
                  This demo is using
                  <br className='xl:hidden' />
                  <a
                    target='_blank'
                    className='text-indigo-600 underline hover:text-indigo-500'
                    rel='noopener noreferrer'
                    href='https://tailwindcss.com'
                  >
                    Tailwind CSS
                  </a>
                </h2>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  All the code present here is part of a free sample from
                  <a
                    href='https://tailwindui.com'
                    className='text-indigo-600 underline hover:text-indigo-500'
                  >
                    Tailwind UI
                  </a>
                  but, you don't need it.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='https://github.com/thelinuxlich/react-modern-starter'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
