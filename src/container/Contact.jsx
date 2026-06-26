import React from 'react';
import PopUp from '../utils/PopUp';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="pt-24 md:pt-40 pb-20 md:pb-32 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header Section */}
        <PopUp className="w-full text-left">
          <div className="mb-10 md:mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 block text-left">Get In Touch</span>
            <h2 className="text-4xl md:text-7xl font-black dark:text-white mb-4 md:mb-6 text-left">
              Start a <span className="text-blue-500 text-left">Conversation</span>
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-blue-500 rounded-full ml-0" />
          </div>
        </PopUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start text-left">
          <div className="space-y-10 md:space-y-16 w-full text-left">
            <PopUp delay={0.1} className="w-full text-left">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight text-left">
                Let's discuss technical bottlenecks or <span className="text-blue-500 text-left">new projects</span>.
              </h3>
              <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-md mt-4 text-left">
                Whether you're looking for a freelancer, a contributor, or just want to connect—my inbox is always open.
              </p>
            </PopUp>

            {/* Strictly Left-Aligned Contact Details Blocks */}
            <div className="space-y-6 md:space-y-10 w-full text-left">
              {[
                { label: "Direct Email", value: "arindammaiti2018@gmail.com", delay: 0.2 },
                { label: "Phone & WhatsApp", value: "+91 8346945439", delay: 0.3 }
              ].map((item, i) => (
                <PopUp key={i} delay={item.delay} className="w-full text-left">
                  <div className="flex flex-col gap-1 md:gap-2 border-l-4 border-blue-500/20 pl-6 md:pl-8 hover:border-blue-500 transition-all duration-300 group text-left">
                    <span className="text-[9px] md:text-[10px] uppercase font-black text-blue-500 tracking-[0.2em] md:tracking-[0.3em] group-hover:tracking-[0.4em] transition-all text-left">
                      {item.label}
                    </span>
                    <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100 text-left break-all">
                      {item.value}
                    </span>
                  </div>
                </PopUp>
              ))}
            </div>
          </div>

          <PopUp delay={0.4} className="w-full text-left mt-10 lg:mt-0">
            <ContactForm />
          </PopUp>
        </div>

        {/* Footer */}
        <PopUp delay={0.5} className="w-full text-left">
          <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-gray-100 dark:border-gray-900">
            <p className="text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-left">
              &copy; {new Date().getFullYear()} Arindam Maiti. Built with Intent & Precision.
            </p>
          </div>
        </PopUp>
      </div>
    </section>
  );
};

export default Contact;