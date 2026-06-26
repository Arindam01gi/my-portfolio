import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import PopUp from '../utils/PopUp'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCardContent = [
  {
    "name": "Swiggy Clone",
    "video": "/video/swiggy-clone.webm",
    "description": "Swiggy-inspired food delivery app with restaurant browsing, cart management, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    tech: ["React", "Redux", "Tailwind CSS", "netlify"],
    link: "https://remarkable-tapioca-376a9f.netlify.app/",
    codeLink: "https://github.com/Arindam01gi/Swiggy-Clone",
    category: "frontend"
  },
  {
    "name": "CloneTube",
    "video": "/video/youtube-clone.webm",
    "description": "YouTube-inspired video streaming app with video playback, search, and responsive UI. Built with React, Redux, and Tailwind CSS.",
    "link": "https://clonetube-seven.vercel.app/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Youtube Api"],
    codeLink: "https://github.com/Arindam01gi/youtube_clone",
    category: "frontend"
  },
  {
    "name": "Portfolio",
    "video": "/video/portfolio.webm",
    "description": "Discover my portfolio, a curated collection of my best work. From innovative projects to creative solutions, see how I turn concepts into reality. Check out my portfolio here and let's create something amazing together.",
    "link": "https://arindam1-portfolio.netlify.app/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Framer motion"],
    codeLink: "https://github.com/Arindam01gi/my-portfolio",
    category: "frontend"
  },
  {
    "name": "Resolveby",
    "video": "/video/resolveby.webm",
    "description": "ResolveBy's website is a strategic asset driving business growth and customer trust by efficiently addressing software-related issues",
    "link": "https://resolveby.com/",
    tech: ["React", "Redux", "Tailwind CSS", "vercel", "Framer motion", "GSAP"],
    category: "frontend"
  },
  {
    "name": "SyncResume",
    "video": "/video/syncresume.webm",
    "description": "SyncResume is a full-stack platform that eliminates document creation bottlenecks by automating rapid deployment pipelines. It transforms asset compilation times into efficient, automated workflows, drastically boosting developer productivity and professional delivery.",
    "link": "https://resume-refiner-orcin.vercel.app/",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "AWS Amplify"],
    category: "fullstack"
  },
]

const Project = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = ProjectCardContent.filter((item) =>
    filter === 'all' || item.category === filter
  );

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'FullStack', value: 'fullstack' }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header Section - Now Left Aligned for consistency with About */}
        <div className="text-left mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            My Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black dark:text-white mb-4"
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-blue-500 rounded-full"
          />
        </div>

        {/* Filter Section - Left Aligned to maintain rhythm */}
        <div className="flex justify-start mb-16">
          <div className="inline-flex flex-wrap gap-2 p-1.5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${filter === f.value
                    ? 'text-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {filter === f.value && (
                  <motion.div
                    layoutId="activeFilterMain"
                    className="absolute inset-0 bg-blue-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <PopUp>
          <div className="w-full">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  key="coming-soon"
                  className="w-full py-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600">Building something legendary...</h3>
                  <p className="text-gray-500 mt-2">New additions to this category are coming shortly.</p>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
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
              )}
            </AnimatePresence>
          </div>
        </PopUp>
      </div>
    </section>
  )
}

export default Project