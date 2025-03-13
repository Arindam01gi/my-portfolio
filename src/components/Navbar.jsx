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
    label: "Experience",
    to: "experience"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState('home');

  const handleSetActive = (to) => {
    setSelected(to);
  };

  const handleClick = (to) => {
    setSelected(to);
    setIsMenuOpen(false);
  };

  const handleToggleIcon = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="fixed w-5/6 top-8 z-10">
          <nav className="navbar flex justify-between items-center">
            <div className="cursor-pointer">
              <h1 className="flex text-black font-extrabold text-2xl tracking-wider">
                <p className="text-body-blue">&lt;A</p>rindam<p className="text-body-blue">/&gt;</p>
              </h1>
            </div>
            <div className="flex p-3 backdrop-blur-md rounded-lg">
              <ul className="hidden md:flex">
                {navlist.map((nav, index) => {
                  return (
                    <li
                      className={`text-black text-base px-4 hover:backdrop-blur-md cursor-pointer ${
                        selected === nav.to ? 'font-semibold' : ''
                      }`}
                      key={index}
                    >
                      <Link 
                        to={nav.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        onSetActive={handleSetActive}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div
                className="md:hidden text-body-blue font-bold"
                onClick={handleToggleIcon}
              >
                {isMenuOpen ? <HiX size={28} /> : <FaBars size={28} />}
              </div>
            </div>
            <Link 
              to='contact'
              smooth={true}
              duration={1000}
              className="hidden md:block"
            >
              <div className="bg-blue-500 text-white rounded-lg py-1 px-3 text-base cursor-pointer box-shadow">
                Contact Me
              </div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 w-full z-10 transition-all duration-700 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'
      }`}>
        <div className="w-4/5 mx-auto backdrop-blur-md rounded-lg shadow-lg">
          <ul className="flex flex-col p-4">
            {navlist.map((nav, index) => (
              <li
                className={`text-black text-base px-4 py-2 hover:backdrop-blur-md cursor-pointer ${
                  selected === nav.to ? 'font-semibold' : ''
                }`}
                key={index}
                onClick={() => handleClick(nav.to)}
              >
                <Link 
                  to={nav.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">
              <Link 
                to='contact'
                smooth={true}
                duration={1000}
              >
                <div className="bg-blue-500 text-white rounded-lg py-1 px-3 text-base cursor-pointer box-shadow">
                  Contact Me
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
