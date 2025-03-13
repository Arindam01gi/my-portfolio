import React from "react";
import { AnimatePresence } from "framer-motion";
import PopUp from "../utils/PopUp";


const Home = () => {
  return (
    <div className="h-screen bg-blue-50 flex justify-center items-center">
      <div className="w-full md:w-5/6 h-full flex flex-col md:flex-row items-center justify-center p-4">
        <AnimatePresence>
          <PopUp key="hero-image" duration={0.5} whileInView={true}>
            <div className="text-left w-full md:w-3/4">
              <div className="text-4xl md:text-7xl text-body-blue font-bold tracking-wider">
                Arindam Maiti
              </div>
              <p className="text-xl md:text-3xl mt-3 font-semibold">
                Full Stack Dev, Freelancer & OpenSource Contributer
              </p>
              <p className="text-base md:text-xl mt-6 md:mt-10 w-full md:w-5/6 tracking-wider font-semibold text-gray-500">
                <span className="text-body-blue text-xl md:text-2xl">Hi</span>, I'm <span className="text-body-blue">Arindam</span>, I craft dreams into digital reality with code and design.
              </p>
            </div>
          </PopUp>

          <div className="mt-8 md:mt-0">
            <img src="./assets/avatar3.jpeg" alt="avatar" className='w-[250px] md:w-[400px] rounded-full' />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
