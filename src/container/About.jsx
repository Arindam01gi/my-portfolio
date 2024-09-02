import React from 'react'
import { AnimatePresence } from 'framer-motion'
import FadeRight from '../utils/FadeRight'
import FadeUp from '../utils/FadeUp'
import PopUp from '../utils/PopUp'

const About = () => {
  return (
    <div className="bg-blue-100  pt-8 flex justify-center items-center ">
      <div className=' w-5/6'>

        <h1 className='text-4xl font-extrabold text-body-blue tracking-wide  ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>About</h1>
        <div className='flex justify-center items-center'>
          <AnimatePresence>
            {/* <FadeRight key="about-gif" duration={1.0} whileInView={true}> */}
            <div className='py-4 '>
              {/* <dotlottie-player src="https://lottie.host/8731c4fa-2e1b-496e-9cc6-83003b41a44d/jxxX5ihr2R.json" background="transparent" speed="1" style={{ width: '400px', height: '400px',objectFit:'cover' }} loop autoplay></dotlottie-player> */}

              {/* <img src="./assets/avatar3.jpeg" alt="avatar" className='w-[90%]  rounded-full' /> */}

              <dotlottie-player src="https://lottie.host/2e3c042b-7a9d-431b-ac25-b2747991ec67/rMhx5wCDhB.json" background="transparent" speed="1" style={{ width: '400px', height: '400px',objectFit:'cover' }} loop autoplay></dotlottie-player>
            </div>
            {/* </FadeRight> */}

            <PopUp key='about-text' duration={0.5} whileInView={true}>
              <div className='text-left mx-16 font-semibold '>
                <h1 className='text-2xl text-left font-extrabold text-body-blue tracking-tight'>
                  Hello, I'm &lt;Arindam/&gt;
                </h1>
                <br />
                Hi, I'm Arindam, a 24-year-old Web Developer based in Kolkata, India. I currently contribute my skills and expertise at Mindscale Infinity Solution. Previously, I had the opportunity to collaborate with talented individuals at MSQube Technology. My passion for JavaScript stems from its dynamic and unpredictable nature, much like life itself.Also, <strong>I know how to google things.</strong>
              </div>
            </PopUp>
          </AnimatePresence>
        </div>


      </div>
    </div>
  )
}

export default About