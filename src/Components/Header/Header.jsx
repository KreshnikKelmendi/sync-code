import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import syncCodeLogo from "../Assets/logo.png";
import { NavLink, useLocation } from 'react-router-dom';
import menu from "../Assets/menu.png";
import arrow from "../Assets/arrow.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleGetInTouch = () => {
    window.location.href = 'mailto:info@sync-code.com';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div className="bg-black sticky top-0 z-50 border-b border-gray-900 p-3">
      <div className="flex items-center justify-between 2xl:text-lg">
        <div className="items-center">
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <img src={syncCodeLogo} alt="Company Logo" className="object-cover ml-[-15px] lg:ml-0 lg:w-56 h-16" />
          </NavLink>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex hidden items-center space-x-4 font-custom"
        >
          <ul className="flex space-x-9 text-white">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <NavLink to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Home</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <NavLink to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>About</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              onMouseEnter={toggleServicesMenu}
              onMouseLeave={toggleServicesMenu}
            >
              Services
              <AnimatePresence>
                {isServicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute mt-2 bg-gray-800 p-4 rounded-lg"
                  >
                    <ul className="space-y-2">
                      <li
                        className="cursor-pointer text-white hover:text-red-500"
                      >
                        <NavLink to="/web-development" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Web Development</NavLink>
                      </li>
                      <li
                        className="cursor-pointer text-white hover:text-red-500"
                      >
                        Machine Learning & Analytics
                      </li>
                      <li
                        className="cursor-pointer text-white hover:text-red-500"
                      >
                        Mobile Development
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <NavLink to="/works" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Works</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Contact</NavLink>
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-right mr-5 hidden lg:block"
        >
          <button
            className="outline text-white px-8 py-2 font-custom hover:bg-white hover:text-black hover:outline-none"
            onClick={handleGetInTouch}
          >
            Get in Touch
          </button>
        </motion.div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-3 focus:text-white">
            {isMenuOpen ? (
              <img src={arrow} alt='' className='w-8 h-8 object-cover' />
            ) : (
              <img src={menu} alt="" className='w-6 h-6 object-cover'/>
            )}
          </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: '50vh', y: -20 }}
            animate={{ opacity: 1, height: '50vh', y: 0 }}
            exit={{ opacity: 0, height: '50vh', y: -20 }}
            className="lg:hidden justify-center flex flex-col absolute top-20 left-0 right-0 z-50 bg-black"
          >
            <motion.ul
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col space-y-4 uppercase text-white w-full font-custom"
            >
              <motion.li
                className={`w-full px-5 py-4 text-white ${pathname === '/' ? 'active-link' : ''}`}
              >
                <NavLink to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Home</NavLink>
              </motion.li>
              <motion.li
                className={`w-full px-5 py-4 text-white ${pathname === '/about' ? 'active-link' : ''}`}
              >
                <NavLink to="/about" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>About</NavLink>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                onMouseEnter={toggleServicesMenu}
                onMouseLeave={toggleServicesMenu}
                className='px-5'
              >
                <span className="lg:hidden cursor-pointer text-white" onClick={toggleServicesMenu}>
                  Services <span className="inline-block ml-1">&#9662;</span>
                </span>
                <AnimatePresence>
                  {isServicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute mt-2 bg-gray-800 p-4 rounded-lg"
                    >
                      <ul className="space-y-2">
                        <li className={`cursor-pointer text-white hover:text-red-500 ${pathname === '/web-development' ? 'active-link' : ''}`}>
                          <NavLink to="/web-development" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Web Development</NavLink>
                        </li>
                        <li className="cursor-pointer text-white hover:text-red-500">
                          Machine Learning & Analytics
                        </li>
                        <li className="cursor-pointer text-white hover:text-red-500">
                          Mobile Development
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li
                className={`w-full px-5 py-4 text-white ${pathname === '/works' ? 'active-link' : ''}`}
              >
                <NavLink to="/works" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Works</NavLink>
              </motion.li>
              <motion.li
                className={`w-full px-5 py-4 text-white ${pathname === '/contact' ? 'active-link' : ''}`}
              >
                <NavLink onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Contact</NavLink>
              </motion.li>
            </motion.ul>

            <div className="text-center">
              <motion.button
                className="bg-white text-black mt-5 px-16 py-2 font-custom"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={handleGetInTouch}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
