import React from 'react'

const Skills = () => {
  return (
    <div className='bg-blue-50  pt-8 flex justify-center items-center '>
      <div className=' w-5/6 '>

        <h1 className='text-4xl font-extrabold text-body-blue tracking-wide ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Skills</h1>

        <div className='flex justify-center p-12 gap-10'>
          <p>
            <span className=''>
              <img src="./icons/html.svg" alt="html" className='w-24 h-24 bg-[#f8eae7] p-6 rounded-full ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              HTML5
            </p>
          </p>
          <p>
            <span className=''>
              <img src="./icons/css.svg" alt="css" className='w-24 h-24 bg-[#cee8f5] p-6 rounded-full ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              CSS
            </p>
          </p>
          <p>
            <span className=''>
              <img src="./icons/javascript.svg" alt="javascript" className='w-24 h-24 bg-[#f7eeb9] p-6 rounded-full ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Javascript
            </p>
          </p>
          <p>
            <span className=''>
              <img src="./icons/html.svg" alt="html" className='w-24 h-24 bg-[#f8eae7] p-6 rounded-full ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              HTML5
            </p>
          </p>
        </div>

      </div>


    </div>
  )
}

export default Skills