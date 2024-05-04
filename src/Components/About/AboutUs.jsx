import React from 'react';
import { motion } from 'framer-motion';
import hand from "../Assets/high-five.png"
import mockup from "../Assets/mockup2024.jpg"

const AboutUs = () => {
  const text =
  'We are Sync-Code, a software company based in Pristina, Kosovo. We develop innovative products as well as custom software solutions. We develop wide enterprise solutions by covering the entire development process and also cooperate with companies who want to outsource their projects. Our team has proven to experience outsourcing projects from the EU and the US. Empowering businesses and individuals lies at the core of our mission. Through robust and scalable software solutions, we aim to redefine the way you operate, connect, and succeed in the digital age.'.split(
    ' '
  );
  return (
    <div className='flex flex-col lg:flex-row w-full items-center bg-white text-black py-4'>
      <div className='lg:w-1/2 justify-center items-center px-4 lg:px-8 lg:mt-10 font-custom'>
        <p className='flex text-4xl font-semibold 2xl:text-5xl gap-x-3'><img src={hand} className='object-cover w-11 h-11 animate-pulse' alt='' />nice to meet you</p>
        <motion.div className="w-full mt-7 text-lg text-justify font-custom tracking-tighter">
        {text.map((el, i) => (
          <motion.span
            className='mt-4 lg:mt-5 w-full text-black '
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 12,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.div>
       
      </div>
<div className='lg:w-1/2'>
  <img src={mockup} alt='' className='object-cover' />
</div>
  
    </div>
  );
}

export default AboutUs;
