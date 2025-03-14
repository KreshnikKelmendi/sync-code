import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import syncCodeLogo from "../Assets/synccode_2024.png";
import { Link, NavLink } from 'react-router-dom';
// import menu from "../Assets/menu.png"
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
          <ul className="flex space-x-10 text-white font-semibold uppercase">
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
          className="rounded-[18px] border-4 border-[#111315] bg-white px-6 py-3 uppercase text-black transition-all duration-300 hover:translate-x-[-4px] font-bold hover:text-[#207ead] hover:translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_#207ead] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
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
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g>
        </svg>
      )}
    </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: '100vh', y: -20 }}
      animate={{ opacity: 1, height: '100vh', y: 0 }}
      exit={{ opacity: 0, height: '100vh', y: -20 }}
      className="lg:hidden absolute px-6 py-24 flex flex-col left-0 right-0 z-50 bg-[#111315]"
    >
      <motion.ul
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col space-y-8 text-3xl uppercase text-white w-full font-custom font-bold"
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
          className="rounded-[18px] border-4 border-[#111315] bg-white px-6 py-4 uppercase text-black transition-all duration-300 hover:translate-x-[-4px] font-bold hover:text-[#207ead] hover:translate-y-[-4px] w-full mt-8 hover:rounded-md shadow-[4px_4px_0px_#207ead] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
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