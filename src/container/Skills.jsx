import React from 'react'
import { motion } from 'framer-motion'
import PopUp from '../utils/PopUp'

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "./icons/html.svg", color: "#f8eae7" },
    { name: "CSS", icon: "./icons/css.svg", color: "#cee8f5" },
    { name: "JS", icon: "./icons/javascript.svg", color: "#f7eeb9" },
    { name: "TS", icon: "./icons/typescript.svg", color: "#cee8f5" },
    { name: "React", icon: "./icons/reactjs.svg", color: "#e3fbff" },
    { name: "Redux", icon: "./icons/redux.svg", color: "#EFE8FA" },
    { name: "Python", icon: "./icons/python-5.svg", color: "#f6f1d6" },
    { name: "Django", icon: "./icons/django.svg", color: "#bdf5df" },
    { name: "Node JS", icon: "./icons/nodejs.svg", color: "#d9f6e9" },
    { name: "Git", icon: "./icons/git.svg", color: "#FCECE7" },
    { name: "C++", icon: "./icons/cpp.svg", color: "#bedcf3" },
    { name: "C", icon: "./icons/c.svg", color: "#b3bcf3" },
    { name: "Tailwind", icon: "./icons/tailwind.svg", color: "#c2ebf1" },
    { name: "MySQL", icon: "./icons/mysql.svg", color: "#d9f6e9" },
    { name: "AWS", icon: "./icons/aws.svg", color: "#f6f1d6" },
    { name: "Redis", icon: "./icons/redis.svg", color: "#FCECE7" },
  ];

  return (
    <section className="pt-24 md:pt-40 pb-20 md:pb-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Consistent Left-Aligned Header */}
        <PopUp className="mb-12 md:mb-20 w-full text-left">
          <div className="text-left">
            <span className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 block text-left">Technical Stack</span>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white mb-4 md:mb-6 leading-tight text-left">
              My <span className="text-blue-500 text-left">Skills</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-blue-500 rounded-full ml-0" />
          </div>
        </PopUp>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-8">
          {skills.map((skill, idx) => (
            <PopUp key={idx} delay={idx * 0.05} className="w-full text-left">
              <motion.div
                whileHover={{ y: -5 }}
                className="group flex flex-col items-start gap-3 md:gap-4"
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center p-3 md:p-5 transition-all duration-500 group-hover:shadow-xl shadow-sm border border-transparent group-hover:border-blue-500/10"
                  style={{ backgroundColor: skill.color }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors px-1">
                  {skill.name}
                </span>
              </motion.div>
            </PopUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills