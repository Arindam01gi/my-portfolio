import React, { useState } from "react";
import { FaReact, FaBars, FaBold } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { HiX } from "react-icons/hi";

const navlist = [
  {
    label: "HOME",
    to: "/"
  },
  {
    label: "WORK",
    to: "/portfolio"
  },
  {
    label: "ABOUT",
    to: "/about"
  },
  {
    label: "CONTACT",
    to: "/contact"
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle = {
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 1s ease-in-out',
  };

  return (
    <>
      <div className="p-6 md:shadow-md backdrop-blur-md" >
        <nav className="navbar flex justify-between align-center ">
          <div className=" text-body-green  font-mono pt-2 cursor-pointer ">
            <FaReact size={28} fontWeight={FaBold} />
          </div>
          <div className="flex">
            <ul className="flex md:visible invisible">
              {navlist.map((nav, index) => {
                return (
                  <li
                    className="m-2 font-bold text-body-green text-2xl font-mono px-8 py-2  hover:bg-white hover:bg-opacity-40  hover:rounded-full hover:backdrop-blur-md"
                    key={index}
                  >
                    {nav.label}
                  </li>
                );
              })}
            </ul>
            <div
              className="visible md:invisible text-body-green pt-2 font-bold "
              onClick={handleToggleIcon}
            >
              {toggleIcon ? <HiX size={28} /> : <FaBars size={28} />}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {toggleIcon && (
        <div
          className={` md:hidden backdrop-blur-md w-full h-full sticky` }
          style={menuStyle}
        >
          <ul className="flex flex-col items-center shadow-lg">
            {navlist.map((nav, index) => (
              <li
                className="m-2 font-bold text-body-green text-3xl font-mono px-8 py-2 mb-6 w-[90%] hover:border-y-2 hover:shadow-md hover:border-emerald-400 hover:rounded-full backdrop-blur-md"
                key={index}
              >
                {nav.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
