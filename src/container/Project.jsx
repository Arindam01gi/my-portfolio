import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='pt-8 flex justify-center items-center bg-blue-100 py-8'>
      <div className='w-5/6 '>

        <h1 className='text-4xl font-extrabold text-body-blue tracking-wide' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Projects</h1>

        <div className='py-6 flex justify-center gap-6'>
            <div className='py-2 px-5 shadow-lg rounded-lg bg-white cursor-pointer'>
                  All
            </div>
            <div className='py-2 px-5 shadow-lg rounded-lg bg-white cursor-pointer'>
                  Frontend 
            </div>
            <div className='py-2 px-5 shadow-lg rounded-lg bg-white cursor-pointer'>
                  Backend
            </div>
            <div className='py-2 px-5 shadow-lg rounded-lg bg-white cursor-pointer'>
                  FullStack
            </div>
        </div>

        <div className='flex justify-evenly  flex-wrap'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>


      </div>

    </div>
  )
}

export default Project