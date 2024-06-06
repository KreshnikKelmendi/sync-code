import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import smoothscroll from 'smoothscroll-polyfill';

const ServiceCard = ({ title, description, link, number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative text-white bg-gradient-to-r from-[#207ead] to-[#00ffc3]  h-full 2xl:h-96 2xl:justify-center 2xl:items-center 2xl:grid py-5 rounded-md"
    >
      <div className="absolute top-0 left-0 bg-white rounded-md text-[#207ead] font-bold px-3 py-1 2xl:text-xl">{number}</div>
      <div className="px-6 py-4">
        <div className="text-2xl font-custom mb-2 text-white font-extrabold uppercase">{title}</div>
        <p className="text-base 2xl:text-xl 2xl:mt-6 font-thin hover:text-black hover:duration-700 ease-linear">{description}</p>
      </div>
      <div className="px-6 text-left">
      
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='text-black py-4'>
      <div className='px-4 lg:px-12 lg:mt-20 2xl:mt-28 mt-16 font-custom'>
        <div className='flex justify-between mt-4 lg:mt-10 font-custom'>
          <p className='text-4xl font-semibold uppercase 2xl:text-5xl text-white'>WHAT WE DO</p>
          <Link to="/services" onClick={handleClick}>
            <p className='text-[#207ead] 2xl:text-lg hover:scale-110 hover:text-white'>Learn more &rarr;</p>
          </Link>
        </div>
        <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4'>
          <div className='mb-4'>
            <ServiceCard
              title="Web Development"
              description="We specialize in creating advanced websites that are modern, responsive, and custom-fit for your business. Our skilled team uses the latest tech to ensure your online presence is not just visually appealing but also easy to use and highly functional."
              number="01"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="Mobile Development"
              description="We build mobile apps for different platforms. Our dedicated team focuses on innovation and user-friendliness, using the latest technologies to turn your ideas into functional and appealing applications."
              number="02"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="Machine Learning & Analytics"
              description="We leverage sophisticated algorithms and machine learning models to analyze complex datasets, uncover patterns, and extract actionable insights, enabling you to optimize operations, enhance customer experiences, and stay ahead of the competition."
              number="03"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="UI & UX Design"
              description="Our designers are passionate about pushing the boundaries of creativity. We stay updated with the latest design trends and technologies to ensure your project not only meets but exceeds industry standards."
              number="04"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
