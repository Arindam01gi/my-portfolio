import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import PopUp from '../utils/PopUp'

const ProjectCardContent = [
  {
    "name": "Swiggy Clone",
    "video": "/video/swiggy-clone.mp4",
    "description": "Swiggy-inspired food delivery app with restaurant browsing, cart management, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    tech: ["React", "Redux", "Tailwind CSS", "netlify"],
    link: "https://remarkable-tapioca-376a9f.netlify.app/",
    codeLink: "https://github.com/Arindam01gi/Swiggy-Clone"
  },
  {
    "name": "CloneTube",
    "video": "/video/youtube-clone.mp4",
    "description": "YouTube-inspired video streaming app with video playback, search, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    "link": "https://clonetube-seven.vercel.app/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Youtube Api"],
    codeLink: "https://github.com/Arindam01gi/youtube_clone"
  },
  {
    "name": "Portfolio",
    "video": "/video/portfolio.webm",
    "description": "Discover my portfolio, a curated collection of my best work. From innovative projects to creative solutions, see how I turn concepts into reality. Check out my portfolio here and let's create something amazing together.",
    "link": "https://arindam1-portfolio.netlify.app/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Framer motion"],
    codeLink: "https://github.com/Arindam01gi/my-portfolio"
  },
  {
    "name": "Resolveby",
    "video": "/video/resolveby.webm",
    "description": "ResolveBy's website is a strategic asset driving business growth and customer trust by efficiently addressing software-related issues",
    "link": "https://resolveby.com/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Framer motion","GSAP"],
    // codeLink: "https://github.com/Arindam01gi/my-portfolio"
  },
]

const Project = () => {
  const [filter, setFilter] = useState('all')

  return (
    <div className='pt-8 flex justify-center items-center bg-blue-50 dark:bg-gray-900 py-8'>
      <div className='w-5/6 '>

        <h1 className='text-4xl font-extrabold text-body-blue tracking-wide' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Projects</h1>

        <div className='py-6 flex justify-center gap-6'>
          <div className='py-2 px-5 shadow-lg rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer' onClick={() => setFilter('all')}>
            All
          </div>
          <div className='py-2 px-5 shadow-lg rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer' onClick={() => setFilter('frontend')}>
            Frontend
          </div>
          <div className='py-2 px-5 shadow-lg rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer' onClick={() => setFilter('backend')}>
            Backend
          </div>
          <div className='py-2 px-5 shadow-lg rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer' onClick={() => setFilter('fullstack')}>
            FullStack
          </div>
        </div>

        <PopUp>
          <div className='flex justify-center flex-wrap gap-6'>
            {filter === 'backend' || filter === 'fullstack' ? (
              <div className="text-2xl font-bold text-gray-500 dark:text-gray-300 p-8">
                Coming Soon!
              </div>
            ) : (
              ProjectCardContent.map((item, index) => (
                <div key={index} className=''>
                  <ProjectCard name={item.name} video={item.video} description={item.description} link={item.link} codeLink={item.codeLink}
                    tech={item.tech} />

                </div>

              ))
            )}
          </div>
        </PopUp>

      </div>
    </div>
  )
}

export default Project