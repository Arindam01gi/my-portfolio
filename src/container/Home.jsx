import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-body-black h-screen">
      <div className="flex justify-center items-center object-cover ">
        <img src="./assets/background4.jpg" alt="background" />
      </div>
      <div className="absolute z-20 right-0 top-24">
        <img src="./assets/robot2.png" alt="robot" className="w-[300px] h-[300px]"/>
      </div>
    </div>
  );
};

export default Home;
