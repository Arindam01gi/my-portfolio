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
    label: "Skills",
    to: "skill"
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
  const [selected, setSelected] = useState('home')

  console.log(selected)

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <>
      <div className="flex justify-center">
        <div className=" fixed w-5/6 top-8 z-10">
          <nav className="navbar flex justify-between items-center ">
            <div className=" cursor-pointer ">
              <h1 className="flex text-black font-extrabold text-2xl tracking-wider" >
                <p className="text-body-blue ">&lt;A</p>rindam<p className="text-body-blue">/&gt;</p>
              </h1>
            </div>
            <div className="flex  p-3 backdrop-blur-md rounded-lg">
              <ul className="flex md:visible invisible">
                {navlist.map((nav, index) => {
                  return (
                    <li
                      className={`text-black text-base  px-4  hover:backdrop-blur-md cursor-pointer `}
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
            <Link to='contact'
              smooth={true}
              duration={1000}>
              <div className="bg-blue-500 text-white rounded-lg py-1 px-3 text-base cursor-pointer box-shadow">
                Contact Me
              </div>

            </Link>

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
