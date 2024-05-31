
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import syncCodeLogo from "../Assets/synccode_2024.png";
import { Link, NavLink } from 'react-router-dom';
import menu from "../Assets/menu.png"
import arrow from "../Assets/arrow.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && isFixed) {
        // Scrolling down and header is fixed
        setFixed(false);
      } else if (currentScrollY <= prevScrollY && !isFixed) {
        // Scrolling up and header is not fixed
        setFixed(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

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
    <motion.div className={`relative px-4 lg:px-10 py-3 md:py-3 shadow-2xl shadow-gray-900 border-b-gray-600 bg-black 2xl:py-5 ${
      isFixed ? 'sticky top-0 left-0 right-0 bg-black z-50' : ''
    }`}>
      <div className="flex items-center justify-between 2xl:text-lg">
        <div className="items-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <img src={syncCodeLogo} alt="Company Logo" className="object-cover lg:ml-0 w-44 lg:w-44 h-16" />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex hidden items-center space-x-4 font-custom"
        >
          <ul className="flex space-x-10 text-white font-semibold">
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
            <NavLink to="/services" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Services</NavLink>
          </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link to="/works" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Work</Link>
            </motion.li>
          </ul>
        </motion.div>
        <div className="hidden lg:flex items-center mr-5">
        <Link to="/get-in-touch" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <motion.button
          className="text-black uppercase rounded-md bg-gradient-to-r from-[#207ead] to-[#00ffc3] px-6 py-2 font-custom font-extrabold hover:animate-pulse"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get Started
        </motion.button>
        </Link>
                </div>
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
      initial={{ opacity: 0, height: '45vh', y: -20 }}
      animate={{ opacity: 1, height: '45vh', y: 0 }}
      exit={{ opacity: 0, height: '50vh', y: -20 }}
      className="lg:hidden px-6 py-8 flex flex-col absolute top-20 left-0 right-0 z-50 bg-black"
    >
      <motion.ul
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col space-y-4 text-2xl uppercase text-white w-full font-custom"
      >
        <motion.li className='w-full'>
          <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Home</Link>
        </motion.li>
        <motion.li>
          <Link to="/about" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>About</Link>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onMouseEnter={toggleServicesMenu}
          onMouseLeave={toggleServicesMenu}
        >
          <NavLink to="/services" className="lg:hidden cursor-pointer text-white" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>
            Services
          </NavLink>
        </motion.li>

        <motion.li>
          <Link to="/works" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Work</Link>
        </motion.li>
      </motion.ul>

      <div className="text-center">
        <motion.button
          className="text-black uppercase rounded-md mt-28 bg-gradient-to-r from-[#207ead] to-[#00ffc3] w-full py-2 font-custom font-extrabold"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }} to="/get-in-touch">Get Started</Link>
        </motion.button>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </motion.div>
  );
};

export default Header;