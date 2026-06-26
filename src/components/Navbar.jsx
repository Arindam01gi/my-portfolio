import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const navlist = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skill" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => setSelected(to);
  // const handleClick = (to) => {
  //   setSelected(to);
  //   setIsMenuOpen(false);
  // };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'pt-2' : 'pt-8'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <nav className={`flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${isScrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
          }`}>
          {/* Logo - Perfectly Aligned with Section Headers */}
          <div className="cursor-pointer">
            <h1 className="flex text-black dark:text-white font-black text-2xl tracking-wider">
              <span className="text-blue-500">{'<A'}</span>rindam<span className="text-blue-500">{'/>'}</span>
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <ul className="hidden lg:flex items-center gap-2">
              {navlist.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    onSetActive={handleSetActive}
                    className={`px-4 py-2 text-sm font-bold cursor-pointer transition-all rounded-xl ${selected === nav.to
                      ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                      }`}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-all border border-gray-100 dark:border-gray-800"
              >
                {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
              </button>

              <Link to='contact' smooth={true} duration={1000} offset={-100} className="hidden md:block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-2 px-5 text-sm transition-all shadow-lg shadow-blue-500/20">
                  Contact
                </button>
              </Link>

              <button
                className="lg:hidden text-gray-500 dark:text-gray-400 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <HiX size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-6 right-6 mt-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800 space-y-4">
            {navlist.map((nav, index) => (
              <Link
                key={index}
                to={nav.to}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-bold text-gray-600 dark:text-light text-left"
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
