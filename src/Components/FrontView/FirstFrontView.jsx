import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAY = 0.4;

const AnimatedText = ({ text, el: Wrapper = 'p', className, animation }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.03 } }, hidden: {} }}
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span className="inline-block" key={wordIndex}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block uppercase"
                variants={animation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

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
    }, 3000);

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

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
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
        <AnimatedText
          text="We create solutions with lines of code, turning ideas into innovation."
          className='px-2 lg:px-0 2xl:text-lg'
          animation={textAnimation}
          el="p"
        />
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
