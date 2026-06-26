import PopUp from '../utils/PopUp'

const About = () => {
  const experiences_summary = [
    { count: "3+", label: "Years Exp." },
    { count: "20+", label: "Projects" },
    { count: "5+", label: "Ecosystems" }
  ];

  return (
    <section className="pt-24 md:pt-40 pb-20 md:pb-32 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Consistent Left-Aligned Header */}
        <PopUp className="mb-12 md:mb-20 w-full text-left">
          <div className="text-left">
            <span className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 block text-left">Perspective</span>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white mb-4 md:mb-6 leading-tight text-left">
              About <span className="text-blue-500 text-left">Me</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-blue-500 rounded-full ml-0" />
          </div>
        </PopUp>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-32 text-left">

          {/* Main Text Content */}
          <div className="flex-1 space-y-6 md:space-y-10 w-full text-left">
            <PopUp delay={0.1} className="w-full text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight text-left">
                Architecting resilient solutions for the <span className="text-blue-500 text-left">modern web</span>.
              </h3>
            </PopUp>

            <PopUp delay={0.2} className="w-full text-left">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-inter text-left">
                <p>
                  I am a Full-Stack Developer specializing in the JavaScript ecosystem. My approach to engineering is centered around <strong className="text-gray-900 dark:text-white">absolute product ownership</strong>.
                </p>
                <p className="hidden md:block">
                  Having contributed to core web ecosystems at companies like <span className="text-blue-500 font-bold">Webskitters</span> and <span className="text-blue-500 font-bold">Mindscale</span>, I focus on building software that is intentional and built for performance.
                </p>
              </div>
            </PopUp>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 text-left">
              {experiences_summary.map((stat, i) => (
                <PopUp key={i} delay={0.3 + (i * 0.1)} className="w-full text-left">
                  <div className="flex flex-col text-left">
                    <span className="text-2xl md:text-4xl font-black text-blue-500 mb-1 text-left">{stat.count}</span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 text-left">{stat.label}</span>
                  </div>
                </PopUp>
              ))}
            </div>
          </div>

          {/* Impact Cards */}
          <div className="lg:w-[400px] w-full space-y-4 md:space-y-6 text-left mt-8 lg:mt-0">
            {[
              {
                title: "Engineering Intent",
                desc: "Every line of code is written with a purpose, focusing on long-term scalability."
              },
              {
                title: "Core Expertise",
                desc: "Deeply experienced in React, Next.js, and Node.js ecosystems."
              }
            ].map((card, i) => (
              <PopUp key={i} delay={0.4 + (i * 0.1)} className="w-full text-left">
                <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl md:rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 group text-left">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors text-left">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-inter text-left">
                    {card.desc}
                  </p>
                </div>
              </PopUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About