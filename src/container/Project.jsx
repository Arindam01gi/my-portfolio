import React from 'react'
import ProjectCard from './ProjectCard'
import PopUp from '../utils/PopUp'

const ProjectCardContent = [
  {
    "name": "Swiggy Clone",
    "video": "/video/swiggy-clone.mp4",
    "description": "Swiggy-inspired food delivery app with restaurant browsing, cart management, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    "link": "https://remarkable-tapioca-376a9f.netlify.app/"
  },
  {
    "name": "CloneTube",
    "video": "/video/youtube-clone.mp4",
    "description": "YouTube-inspired video streaming app with video playback, search, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    "link": "https://clonetube-seven.vercel.app/"
  }
]

const Project = () => {
  return (
    <div className='pt-8 flex justify-center items-center bg-blue-50 py-8'>
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

        <PopUp>
          <div className='flex justify-evenly  flex-wrap'>
            {
              ProjectCardContent.map((item, index) => (
                <ProjectCard key={index} name={item.name} video={item.video} description={item.description} link={item.link} />
              ))
            }
          </div>

        </PopUp>




      </div>

    </div>
  )
}

export default Project