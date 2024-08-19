import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import FadeUp from "../utils/FadeUp";


const Home = () => {
  return (

    <div className=" h-screen bg-green-100 flex justify-center items-center ">
      <div className=" w-5/6  h-full flex items-center">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.8} whileInView={true}>
          <div className="text-left w-3/4 ">
              <div className="text-7xl text-body-green font-bold tracking-wider">
                Arindam Maiti
              </div>
              <p className="text-3xl mt-3 font-semibold">
                Full Stack Dev, Freelancer & OpenSource Contributer
              </p>
              <p className=" text-xl mt-10 w-5/6 tracking-wider font-semibold text-gray-500">
                <span className="text-body-green text-2xl">Hi</span>, I'm <span className="text-body-green">Arindam</span>, I craft dreams into digital reality with code and design.
              </p>
            </div>
          </FadeUp>

            
        </AnimatePresence>


      </div>

    </div>
  );
};

export default Home;
