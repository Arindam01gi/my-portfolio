import React, { useState } from "react";
import { FaReact, FaBars, FaBold } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navlist = [
  {
    label: "Home",
    to: "home"
  },
  {
    label: "About",
    to: "about"
  },
  {
    label: "Experience",
    to: "experinece"
  },
  {
    label: "Projects",
    to: "projects"
  },
  {
    label: "Contact",
    to: "contact"
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <>
      <div className="flex justify-center">
        <div className="p-4 backdrop-blur-md fixed w-3/4 top-4 shadow-lg  ">
          <nav className="navbar flex justify-between align-center ">
            <div className="  font-sans cursor-pointer ">
              <h1 className="flex text-white font-extrabold text-2xl">
                <p className="text-body-green">&lt;A</p>rindam<p className="text-body-green">/&gt;</p>
              </h1>
            </div>
            <div className="flex">
              <ul className="flex md:visible invisible">
                {navlist.map((nav, index) => {
                  return (
                    <li
                      className=" text-white text-lg font-fira px-4  hover:backdrop-blur-md cursor-pointer"
                      key={index}
                    >
                      <Link to={`${nav.to}`} 
                      smooth={true}
                      duration={500}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div
                className="visible md:invisible text-body-green font-bold "
                onClick={handleToggleIcon}
              >
                {toggleIcon ? <HiX size={28} /> : <FaBars size={28} />}
              </div>
            </div>
            <div className="bg-body-green text-white rounded-lg py-1 px-3">
              Contact Me
            </div>
          </nav>
        </div>

      </div>


      {/* Mobile Menu */}
      {/* {toggleIcon && (
        <div
          className={` md:hidden backdrop-blur-md w-full h-full sticky`}
          style={menuStyle}
        >
          <ul className="flex flex-col items-center shadow-lg">
            {navlist.map((nav, index) => (
              <li
                className="m-2 font-bold text-body-green text-2xl font-mono px-8 py-2 mb-6 w-[90%] hover:border-y-2 hover:shadow-md hover:border-emerald-400 hover:rounded-full backdrop-blur-md"
                key={index}
              >
                {nav.label}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
