import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAY = 0.4;

const FirstFrontView = () => {
  const controls = useAnimation();
  const [phrases, setPhrases] = useState(['software', 'code', 'technology']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const animateOnMount = async () => {
    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeInOut' },
    });
  };

  useEffect(() => {
    animateOnMount();
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      animateText();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const animateText = async () => {
    await controls.start({
      opacity: 0,
      y: -20,
      transition: { duration: ANIMATION_DURATION },
    });

    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);

    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: ANIMATION_DURATION },
    });
  };

  return (
    <div className='bg-techWallpaper w-full h-screen flex items-center justify-center font-custom'>
      <div className='text-white text-center'>
        <motion.h1
          className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-4 p-3'
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          Listening to you, answering with{' '}
          <motion.b
            className='text-[#207ead] p-2 shadow shadow-gray-700'
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {phrases[currentPhraseIndex]}
          </motion.b>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: ANIMATION_DELAY }}
          className='px-2 lg:px-0 2xl:text-lg'
        >
          We create solutions with lines of code, turning ideas into innovation.
        </motion.p>
        <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <button
          className='outline font-bold text-white mt-8 px-14 uppercase py-3 relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#207ead] rounded-md hover:outline-none'
        >
          More about us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FirstFrontView;
