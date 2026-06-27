import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import PopUp from '../utils/PopUp'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCardContent = [
  {
    "name": "Swiggy Clone",
    "video": "/video/swiggy-clone.webm",
    "description": "Swiggy-inspired food delivery app with restaurant browsing, cart management, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    tech: ["React", "Redux", "Tailwind CSS", "Netlify"],
    link: "https://remarkable-tapioca-376a9f.netlify.app/",
    codeLink: "https://github.com/Arindam01gi/Swiggy-Clone",
    category: "frontend"
  },
  {
    "name": "CloneTube",
    "video": "/video/youtube-clone.webm",
    "description": "YouTube-inspired video streaming app with video playback, search, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    "link": "https://clonetube-seven.vercel.app/",
    tech: ["React", "Redux", "Tailwind CSS", "Vercel", "Youtube Api"],
    codeLink: "https://github.com/Arindam01gi/youtube_clone",
    category: "frontend"
  },
  {
    "name": "Portfolio",
    "video": "/video/portfolio.webm",
    "description": "Discover my portfolio, a curated collection of my best work. From innovative projects to creative solutions, see how I turn concepts into reality.",
    "link": "https://arindam1-portfolio.netlify.app/",
    tech: ["React", "Redux", "Tailwind CSS", "Vercel", "Framer motion"],
    codeLink: "https://github.com/Arindam01gi/my-portfolio",
    category: "frontend"
  },
  {
    "name": "Resolveby",
    "video": "/video/resolveby.webm",
    "description": "ResolveBy's website is a strategic asset driving business growth and customer trust by efficiently addressing software-related issues",
    "link": "https://resolveby.transfermax.online/",
    tech: ["React", "Redux", "Tailwind CSS", "Vercel", "Framer motion", "GSAP"],
    category: "frontend"
  },
  {
    "name": "SyncResume",
    "video": "/video/syncresume.webm",
    "description": "SyncResume is a full-stack platform that eliminates document creation bottlenecks by automating rapid deployment pipelines.",
    "link": "https://resume-refiner-orcin.vercel.app/",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "AWS"],
    category: "fullstack"
  },
]

const Project = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = ProjectCardContent.filter((item) =>
    filter === 'all' || item.category === filter
  );

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'FullStack', value: 'fullstack' }
  ];

  return (
    <section className="pt-32 pb-20 md:pb-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        <PopUp className="w-full text-left">
          <div className="text-left mb-10 md:mb-16">
            <span className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 block text-left">My Showcase</span>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white mb-4 md:mb-6 leading-tight text-left">
              Featured <span className="text-blue-500 text-left">Projects</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-blue-500 rounded-full ml-0" />
          </div>
        </PopUp>

        {/* Filter Section */}
        <div className="flex justify-start mb-10 md:mb-16">
          <div className="inline-flex flex-wrap gap-1.5 md:gap-2 p-1 md:p-1.5 bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`relative px-4 md:px-6 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold transition-all duration-300 ${filter === f.value
                  ? 'text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {filter === f.value && (
                  <motion.div
                    layoutId="activeFilterMain"
                    className="absolute inset-0 bg-blue-600 rounded-lg md:rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <PopUp className="w-full text-left">
          <div className="w-full">
            <AnimatePresence mode='popLayout'>
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
              >
                {filteredProjects.map((item) => (
                  <ProjectCard
                    key={item.name}
                    name={item.name}
                    video={item.video}
                    description={item.description}
                    link={item.link}
                    codeLink={item.codeLink}
                    tech={item.tech}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </PopUp>
      </div>
    </section>
  )
}

export default Project