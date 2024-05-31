import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import hand from "../Assets/high-five.png";
import mockup from "../Assets/mockup2024.jpg";
import logoAnimation from "../Assets/logoAnimationSyncCode.mp4";

const AboutUs = () => {
  const text = 'Our goal is to craft technology that is both beautiful and innovative.'.split(' ');

  return (
    <div className='flex flex-col px-4 lg:px-12 lg:flex-row w-full items-center bg-black text-blawhiteck'>
      <div className='lg:w-[70%] justify-center items-center font-custom'>
        <p className='flex text-4xl font-semibold 2xl:text-5xl gap-x-3'>
          <img src={hand} className='object-cover w-11 h-11 animate-pulse' alt='' />
          nice to meet you
        </p>
        <InViewText text={text} />
      </div>
      <div className='lg:w-[30%] lg:mt-8'>
        <video src={logoAnimation} playsInline loop autoPlay muted />
      </div>
    </div>
  );
};

const InViewText = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className='w-full text-center lg:text-left text-4xl leading-[70px] lg:leading-[80px] lg:mt-7 lg:text-6xl uppercase font-custom'
    >
      {text.map((el, i) => (
        <motion.span
          className='lg:mt-5 w-full text-white font-extrabold'
          initial={{ opacity: 0.1 }}
          animate={{ opacity: isInView ? 1 : 0.1 }}
          transition={{
            duration: 2,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AboutUs;
