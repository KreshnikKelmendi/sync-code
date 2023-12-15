import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FirstFrontView = () => {
  const controls = useAnimation();
  const [phrases, setPhrases] = useState(['software', 'code', 'technology']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      animateText();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const animateText = async () => {
    // Animate the change in opacity and position
    await controls.start({
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    });

    // Change the phrase and reset animation
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);

    // Animate to show the new phrase
    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  };

  // Animation sequence
  const animateOnMount = async () => {
    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeInOut' },
    });
  };

  React.useEffect(() => {
    animateOnMount();
  }, [controls]);

  return (
    <div className='bg-techWallpaper w-full h-screen flex items-center justify-center font-custom'>
      <div className='text-white text-center'>
        <motion.h1
          className='text-4xl lg:text-5xl font-semibold mb-4 p-3'
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          Listening to you, answering with{' '}
          <motion.b
            className='text-red-500 p-2 shadow shadow-gray-700'
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {phrases[currentPhraseIndex]}
          </motion.b>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='px-2 lg:px-0'
        >
          We create solutions with lines of code, turning ideas into innovation.
        </motion.p>
        <button
          className='outline text-white mt-8 px-14 uppercase py-2 relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:outline-none'
          
        >
          More about us
        </button>
      </div>
    </div>
  );
};

export default FirstFrontView;
