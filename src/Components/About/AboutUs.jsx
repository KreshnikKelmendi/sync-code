import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logoAnimation from "../Assets/SYNC (2).mp4";

const AboutUs = () => {
  const text = 'Our goal is to craft technology that is both beautiful and innovative.'.split(' ');

  return (
    <div className='flex flex-col px-4 lg:px-12 lg:flex-row w-full items-center text-blawhiteck'>
      <div className='lg:w-[70%] justify-center items-center font-custom'>
        <InViewText text={text} />
      </div>
      <div className='lg:w-[30%] '>
        <video className='w-full' src={logoAnimation} playsInline loop autoPlay muted preload="metadata" />
      </div>
    </div>
  );
};

const InViewText = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
    <motion.div
      ref={ref}
      className='w-full text-center lg:text-left text-4xl leading-[55px] lg:leading-[80px] lg:mt-7 lg:text-6xl 2xl:text-[115px] 2xl:leading-[120px] uppercase font-custom'
    >
      {text.map((el, i) => (
        <motion.span
          className='lg:mt-5 w-full text-white font-extrabold'
          initial={{ opacity: 0.1 }}
          animate={{ opacity: isInView ? 1 : 0.1 }}
          transition={{
            duration: 2,
            delay: i / 7,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </motion.div>  
    </>
  );
};

export default AboutUs;
