
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
    <motion.div className={`relative px-4 lg:px-10 py-3 md:py-3 shadow-md shadow-neutral-950 bg-[#111315] 2xl:py-5 ${
    isFixed ? 'sticky top-0 left-0 right-0 bg-[#111315] z-50' : ''
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
              <NavLink to="/works" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Work</NavLink>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <NavLink to="/articles" onClick={() => window.scrollTo({ top: 0, left: 0 })}>Company News</NavLink>
            </motion.li>
          </ul>
        </motion.div>
        <div className="hidden lg:flex items-center mr-5">
        <Link to="/get-in-touch" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <motion.button
          className="text-white uppercase rounded-md bg-gradient-to-r from-[#207ead] to-[#00ffc3] px-6 py-2 font-custom font-extrabold hover:animate-pulse"
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
        <img src={arrow} alt='arrow' className='w-8 h-8 object-cover' />
      ) : (
        <svg
          height="23px"
          width="23px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#FFFFFF"
          stroke="#FFFFFF"
        >
          <g>
            <path d="M50.047,0C22.404,0,0,22.4,0,50.047c0,27.646,22.404,50.046,50.047,50.046c27.642,0,50.046-22.4,50.046-50.046 
              C100.093,22.4,77.689,0,50.047,0z"/>
            <path d="M256,0c-27.642,0-50.047,22.4-50.047,50.047c0,27.646,22.404,50.046,50.047,50.046 
              c27.642,0,50.047-22.4,50.047-50.046C306.047,22.4,283.642,0,256,0z"/>
            <path d="M461.953,100.093c27.638,0,50.047-22.4,50.047-50.046C512,22.4,489.591,0,461.953,0 
              s-50.046,22.4-50.046,50.047C411.907,77.693,434.315,100.093,461.953,100.093z"/>
            <path d="M50.047,205.953C22.404,205.953,0,228.353,0,256s22.404,50.047,50.047,50.047 
              c27.642,0,50.046-22.4,50.046-50.047S77.689,205.953,50.047,205.953z"/>
            <path d="M256,205.953c-27.642,0-50.047,22.4-50.047,50.047s22.404,50.047,50.047,50.047 
              c27.642,0,50.047-22.4,50.047-50.047S283.642,205.953,256,205.953z"/>
            <path d="M461.953,205.953c-27.638,0-50.046,22.4-50.046,50.047s22.408,50.047,50.046,50.047S512,283.647,512,256 
              S489.591,205.953,461.953,205.953z"/>
            <path d="M50.047,411.907C22.404,411.907,0,434.307,0,461.953C0,489.6,22.404,512,50.047,512 
              c27.642,0,50.046-22.4,50.046-50.047C100.093,434.307,77.689,411.907,50.047,411.907z"/>
            <path d="M256,411.907c-27.642,0-50.047,22.4-50.047,50.046C205.953,489.6,228.358,512,256,512 
              c27.642,0,50.047-22.4,50.047-50.047C306.047,434.307,283.642,411.907,256,411.907z"/>
            <path d="M461.953,411.907c-27.638,0-50.046,22.4-50.046,50.046c0,27.647,22.408,50.047,50.046,50.047 
              S512,489.6,512,461.953C512,434.307,489.591,411.907,461.953,411.907z"/>
          </g>
        </svg>
      )}
    </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: '60vh', y: -20 }}
      animate={{ opacity: 1, height: '60vh', y: 0 }}
      exit={{ opacity: 0, height: '60vh', y: -20 }}
      className="lg:hidden px-6 py-8 flex flex-col absolute top-20 left-0 right-0 z-50 bg-[#111315]"
    >
      <motion.ul
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col space-y-3 text-2xl uppercase text-white w-full font-custom  divide-y-2 divide-gray-900"
      >
        <motion.li className='w-full'>
          <NavLink to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Home</NavLink>
        </motion.li>
        <motion.li>
          <NavLink to="/about" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>About</NavLink>
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
          <NavLink to="/works" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Work</NavLink>
        </motion.li>

        <motion.li>
          <NavLink to="/articles" onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }}>Company News</NavLink>
        </motion.li>
      </motion.ul>

      <div className="text-center">
      <Link onClick={() => { window.scrollTo({ top: 0, left: 0 }); closeMobileMenu(); }} to="/get-in-touch">
        <motion.button
          className="text-black uppercase rounded-md mt-20 bg-gradient-to-r from-[#207ead] to-[#00ffc3] w-full py-2 font-custom font-extrabold"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
         Get Started
        </motion.button>
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </motion.div>
  );
};

export default Header;