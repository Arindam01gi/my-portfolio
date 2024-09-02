import React from 'react'

const Skills = () => {
  return (
    <div className='bg-blue-50  pt-8 flex justify-center items-center '>
      <div className=' w-5/6 '>

        <h1 className='text-4xl font-extrabold text-body-blue tracking-wide ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Skills</h1>

        <div className='flex justify-center py-12 gap-16 cursor-pointer flex-wrap '>
          <p className=''>
            <span className='bg-[#f8eae7] p-6 rounded-full inline-block hover:shadow-xl'>
              <img src="./icons/html.svg" alt="html" className='w-10 h-10  ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              HTML5
            </p>
          </p>
          <p>
            <span className='bg-[#cee8f5] p-6 rounded-full inline-block hover:shadow-xl'>
              <img src="./icons/css.svg" alt="css" className='w-10 h-10  ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              CSS
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#f7eeb9] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/javascript.svg" alt="javascript" className='w-10 h-10   ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Javascript
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#cee8f5] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/typescript.svg" alt="typescript" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Typescript
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#e3fbff] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/reactjs.svg" alt="typescript" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              React & React Native
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#EFE8FA] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/redux.svg" alt="typescript" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Redux
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#f6f1d6] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/python-5.svg" alt="python" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Python
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#bdf5df] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/django.svg" alt="django" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Django
            </p>
          </p>
          <p className=''>
            <span className='inline-block bg-[#d9f6e9] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/nodejs.svg" alt="node" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Node Js
            </p>
          </p>

          <p>
            <span className='inline-block bg-[#FCECE7] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/git.svg" alt="git" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Git
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#bedcf3] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/cpp.svg" alt="cpp" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              C++
            </p>
          </p>
          <p>
            <span className='inline-block bg-[#b3bcf3] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/c.svg" alt="cpp" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              C
            </p>
          </p>
          <p className='mx-4'>
            <span className='inline-block bg-[#c2ebf1] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/tailwind.svg" alt="tailwind" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Taiwnd CSS
            </p>
          </p>

          <p className=''>
            <span className='inline-block bg-[#d9f6e9] p-6 rounded-full hover:shadow-xl '>
              <img src="./icons/mysql.svg" alt="mysql" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Mysql
            </p>
          </p>
          <p className=''>
            <span className='inline-block bg-[#f6f1d6] p-6 rounded-full hover:shadow-xl '>
              <img src="./icons/aws.svg" alt="aws" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              AWS
            </p>
          </p>
          <p className=''>
            <span className='inline-block bg-[#FCECE7] p-6 rounded-full hover:shadow-xl'>
              <img src="./icons/redis.svg" alt="redis" className='w-10 h-10 ' />
            </span>
            <p className='text-xs my-3 font-semibold'>
              Redis
            </p>
          </p>

        </div>

      </div>


    </div>
  )
}

export default Skills