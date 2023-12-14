import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import syncCodeLogo from "../Assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <motion.div className="bg-black border-b border-gray-900 p-3">
      <div className="flex items-center justify-between">
        <div className="items-center">
          <img src={syncCodeLogo} alt="Company Logo" className="object-cover ml-[-15px] lg:ml-0 lg:w-56 h-16" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex hidden items-center space-x-4 font-custom"
        >
          <ul className="flex space-x-9 text-white uppercase">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`cursor-pointer ${activeLink === 'Home' ? 'text-red-500' : ''}`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`cursor-pointer ${activeLink === 'About' ? 'text-red-500' : ''}`}
              onClick={() => handleLinkClick('About')}
            >
              About
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`cursor-pointer ${activeLink === 'Contact' ? 'text-red-500' : ''}`}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className={`cursor-pointer ${activeLink === 'Services' ? 'text-red-500' : ''}`}
              onClick={() => handleLinkClick('Services')}
            >
              Services
            </motion.li>
            {/* Add more menu items as needed */}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-right mr-5 hidden lg:block"
        >
          <button className="outline text-white px-6 py-2 font-custom hover:bg-white hover:text-black hover:outline-none">
            Start the Project
          </button>
        </motion.div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-3 focus:text-white">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '60vh' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden mt-4 justify-around items-center flex flex-col"
    >
      <motion.ul
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col space-y-10 text-center text-white font-custom"
      >
        <motion.li
          className={`cursor-pointer ${activeLink === 'Home' ? 'text-blue-500' : ''}`}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </motion.li>
        <motion.li
          className={`cursor-pointer ${activeLink === 'About' ? 'text-blue-500' : ''}`}
          onClick={() => handleLinkClick('About')}
        >
          About
        </motion.li>
        <motion.li
          className={`cursor-pointer ${activeLink === 'Contact' ? 'text-blue-500' : ''}`}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </motion.li>
        <motion.li
          className={`cursor-pointer ${activeLink === 'Services' ? 'text-blue-500' : ''}`}
          onClick={() => handleLinkClick('Services')}
        >
          Services
        </motion.li>
        {/* Add more menu items as needed */}
      </motion.ul>
      <div className="text-center">
        <motion.button
          className="bg-blue-500 text-white px-16 py-2 font-custom"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Start the Project
        </motion.button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
};

export default Header;
