import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Home = () => {
  const [isRecent, setIsRecent] = useState(true);

  useEffect(() => {
    const checkGitHubStatus = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/Arindam01gi/events/public`);
        const events = await response.json();
        if (events && events.length > 0) {
          const lastEventTime = new Date(events[0].created_at).getTime();
          const now = new Date().getTime();
          const hoursSinceLastActivity = (now - lastEventTime) / (1000 * 60 * 60);
          setIsRecent(hoursSinceLastActivity < 48);
        }
      } catch (error) {
        setIsRecent(true);
      }
    };
    checkGitHubStatus();
  }, []);

  return (
    <section className="min-h-[90vh] lg:min-h-screen bg-white dark:bg-gray-950 flex flex-col overflow-hidden transition-colors duration-500">

      {/* Optimized Navbar Offset - Balanced for all screens */}
      <div className="h-28 md:h-32 lg:h-36 w-full shrink-0" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative flex-grow flex items-start">
        {/* Background Accents */}
        <div className="absolute -top-12 -left-6 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -right-6 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full pb-12 md:pb-20">

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-left w-full"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 dark:bg-blue-900/40 rounded-lg border border-blue-100 dark:border-blue-800/50 w-fit">
                  Full-Stack Architect
                </span>

                <div className={`flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 border rounded-full transition-colors duration-500 ${isRecent ? 'bg-green-500/10 border-green-500/20' : 'bg-blue-500/10 border-blue-500/20'
                  }`}>
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isRecent ? 'bg-green-400' : 'bg-blue-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isRecent ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                  </span>
                  <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${isRecent ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {isRecent ? 'Available Now' : 'Recently Active'}
                  </span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-black text-gray-900 dark:text-white leading-[0.9] mb-6 md:mb-8 transition-all">
                Arindam <br className="hidden md:block" /> <span className="text-blue-500">Maiti</span>
              </h1>

              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <p className="text-lg md:text-2xl font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Hi, I'm Arindam. I craft dreams into <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">digital reality</span> with intentional code and design.
                </p>

                <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  I bridge the gap between imagination and reality, transforming complex logic into seamless digital experiences as a freelancer and open-source contributor.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-10 md:mt-12">
                <button
                  onClick={() => window.open("https://drive.google.com/file/d/1H9wvgd9ofrS1jAN8ynp8GpIR4VteHEER/view?usp=sharing", "_blank")}
                  className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl md:rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95 text-xs md:text-base tracking-widest"
                >
                  CHECK RESUME
                </button>

                <div className="flex items-center gap-5 md:gap-6 ml-auto sm:ml-0">
                  {[
                    { icon: <FaGithub size={22} />, url: "https://github.com/Arindam01gi" },
                    { icon: <FaLinkedin size={22} />, url: "https://linkedin.com/in/arindam01gi" },
                    { icon: <RiTwitterXFill size={22} />, url: "https://x.com/Arindam1304" },
                    { icon: <FaEnvelope size={22} />, url: "mailto:arindammaiti2018@gmail.com" }
                  ].map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-110">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 flex justify-start lg:justify-end w-full lg:w-auto mt-8 md:mt-12 lg:mt-0"
            >
              <div className="relative group w-full max-w-[280px] md:max-w-[450px]">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-10" />
                <div className="relative aspect-square rounded-full p-1 md:p-2 border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-3xl shadow-2xl overflow-hidden">
                  <img
                    src="./assets/avatar3.jpeg"
                    alt="Arindam Maiti"
                    className="w-full h-full object-cover rounded-full border-2 md:border-4 border-white dark:border-gray-900"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Home;
