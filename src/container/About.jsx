import React from 'react'
import { AnimatePresence } from 'framer-motion'
import PopUp from '../utils/PopUp'

const About = () => {
  return (
    <div className="bg-blue-100 dark:bg-gray-900 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl ">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-body-blue tracking-wide mb-8' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>About</h1>
        <div className='flex flex-col lg:flex-row items-center gap-8 xl:gap-12 justify-between'>
          <AnimatePresence>
            <div className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]'>
              <dotlottie-player 
                src="https://lottie.host/2e3c042b-7a9d-431b-ac25-b2747991ec67/rMhx5wCDhB.json" 
                background="transparent" 
                speed="1" 
                style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }} 
                loop 
                autoplay>
              </dotlottie-player>
            </div>

            <PopUp key='about-text' duration={0.5} whileInView={true}>
              <div className='w-full lg:w-[70%] text-left space-y-4 sm:space-y-6 ml-0 lg:ml-20'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-body-blue tracking-tight'>
                  Hello, I'm &lt;Arindam/&gt;
                </h1>
                <p className='text-base sm:text-lg lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                  Hi, I'm Arindam, a 24-year-old Web Developer based in Kolkata, India. I currently contribute my skills and expertise at Mindscale Infinity Solution. Previously, I had the opportunity to collaborate with talented individuals at MSQube Technology. My passion for JavaScript stems from its dynamic and unpredictable nature, much like life itself. Also, <strong className="font-bold">I know how to google things.</strong>
                </p>
              </div>
            </PopUp>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default About