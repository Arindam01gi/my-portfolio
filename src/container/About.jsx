import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PopUp from '../utils/PopUp'
import { FaRocket, FaCode, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const coreStrengths = [
    {
      icon: <FaRocket className="text-blue-500" size={24} />,
      title: "Product Ownership",
      desc: "Architecting ecosystems from zero to production with absolute accountability."
    },
    {
      icon: <FaCode className="text-purple-500" size={24} />,
      title: "Full-Stack Mastery",
      desc: "Specialized in JavaScript ecosystems, shipping real-time platforms and core web services."
    },
    {
      icon: <FaLightbulb className="text-yellow-500" size={24} />,
      title: "Resourcefulness",
      desc: "Dissecting unmapped bottlenecks and researching optimal solutions from first principles."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Consistent Header Style */}
        <div className="text-left mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Behind the Code
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black dark:text-white mb-4"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-blue-500 rounded-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lottie Animation Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full" />
            <div className="relative backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-4 rounded-3xl border border-white/20 dark:border-gray-800/50 shadow-2xl">
              <dotlottie-player
                src="https://lottie.host/2e3c042b-7a9d-431b-ac25-b2747991ec67/rMhx5wCDhB.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }}
                loop
                autoplay
              />
            </div>
          </motion.div>

          {/* Text Content Side */}
          <div className="w-full lg:w-2/3">
            <PopUp duration={0.6}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Hello, I'm <span className="text-blue-500 font-mono">&lt;Arindam/&gt;</span>
                  </h3>
                  <p className="text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium italic">
                    A Full-Stack Developer based in Kolkata, India, who doesn't just write code—I build ecosystems.
                  </p>
                </div>

                <p className="text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Having architected and shipped core web ecosystems and real-time platforms at companies like
                  <span className="text-gray-900 dark:text-white font-semibold"> Webskitters, Mindscale, and MSQube</span>,
                  my engineering philosophy revolves around absolute <strong className="text-blue-500">product ownership</strong>.
                  My passion for JavaScript stems from its dynamic and fast-evolving nature—much like the complex problems I love to solve.
                  I treat ambiguity as a sprint; my strongest asset is my technical resourcefulness—the ability to dissect unmapped bottlenecks
                  from first principles and independently drive resilient code from zero to production.
                </p>

                {/* Core Strength Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  {coreStrengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {strength.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">
                        {strength.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                        {strength.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PopUp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About