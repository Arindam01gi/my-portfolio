import React from 'react'
import PopUp from '../utils/PopUp'

const experiences = [
  {
    company: "Webskitters Technology Solutions",
    role: "Software Engineer - Nextjs",
    duration: "Feb, 2026 - Present",
    desc: "Architecting VidyaLabh, an AI-driven e-learning platform. Optimized client-side caching with TanStack Query and engineered sub-500ms video streaming."
  },
  {
    company: "Mindscale Infinity Solution",
    role: "Senior Developer",
    duration: "Aug, 2023 - Feb, 2026",
    desc: "Led development of scalable web applications using React and Node.js. Optimized database performance and mentored junior developers."
  },
  {
    company: "MSQube Technology",
    role: "Backend Django Developer",
    duration: "Feb, 2023 - Aug, 2023",
    desc: "Developed and maintained backend systems using Django/DRF. Designed database schemas and optimized complex queries."
  }
];

const Experience = () => {
  return (
    <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        <PopUp className="w-full text-left">
          <div className="text-left mb-12 md:mb-16">
            <span className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 block text-left">Professional Path</span>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white mb-4 md:mb-6 text-left">
              My <span className="text-blue-500 text-left">Experience</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-blue-500 rounded-full ml-0" />
          </div>
        </PopUp>

        <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-2 md:ml-8 space-y-16 md:space-y-20 pb-12">
          {experiences.map((exp, idx) => (
            <PopUp key={idx} delay={idx * 0.1} className="w-full text-left">
              <div className="relative pl-8 md:pl-20 group text-left">
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] top-1.5 md:top-2 w-4 md:w-5 h-4 md:h-5 rounded-full bg-white dark:bg-gray-900 border-2 md:border-4 border-blue-500 group-hover:bg-blue-500 transition-all duration-500 z-10 shadow-lg" />

                <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 text-left">
                  <div className="max-w-4xl text-left">
                    <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300 text-left">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mt-2 md:mt-4">
                      <p className="text-blue-500 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] text-left">
                        {exp.role}
                      </p>
                      <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                      <span className="inline-block text-[8px] md:text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl font-medium font-inter text-left">
                  {exp.desc}
                </p>
              </div>
            </PopUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience