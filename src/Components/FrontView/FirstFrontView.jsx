import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FirstFrontView = () => {
  const controls = useAnimation();
  const [phrases, setPhrases] = useState(['software', 'code', 'technology']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      controls.start({ y: -20, opacity: 0, transition: { duration: 0.5 } });
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls, phrases]);

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
  }); 

  return (
    <div className='bg-techWallpaper w-full h-screen flex items-center justify-center font-custom'>
      <div className='text-white text-center'>
      <motion.h1
      className='text-4xl lg:text-5xl font-semibold mb-4 p-3'
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
    >
      Listening to you, answering with{' '}
      <b className='text-red-500 p-2 shadow shadow-gray-700'>{phrases[currentPhraseIndex]}</b>
    </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }} className='px-2 lg:px-0'>We create solutions with lines of code, turning ideas into innovation.</motion.p>
        <motion.button
          className='outline text-white mt-8 px-14 uppercase py-4 relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:outline-none'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          More about us
        </motion.button>
      </div>
    </div>
  );
};

export default FirstFrontView;
