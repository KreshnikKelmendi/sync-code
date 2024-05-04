import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, description, link, number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-white shadow-2xl shadow-[#207ead] h-full py-5 rounded-md overflow-hidden"
    >
      <div className="absolute top-0 left-0 bg-[#207ead] text-white font-bold px-3 py-1">{number}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl font-custom mb-2">{title}</div>
        <p className="text-base font-custom">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-left">
        <Link
          to={link}
          onClick={handleClick}
          className="text-[#207ead] hover:underline"
        >
          Read more &rarr;
        </Link>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <div className='text-black py-4'>
      <div className='px-4 lg:px-16 lg:mt-20 mt-16 font-custom'>
        <p className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold uppercase text-white'>Our Services</p>
        <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2'>
          <div className='mb-4'>
            <ServiceCard
              title="Web Development"
              description="We specialize in creating advanced websites that are modern, responsive, and custom-fit for your business. Our skilled team uses the latest tech to ensure your online presence is not just visually appealing but also easy to use and highly functional."
              link='/web-development'
              number="01"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="Machine Learning & Analytics"
              description="We leverage sophisticated algorithms and machine learning models to analyze complex datasets, uncover patterns, and extract actionable insights, enabling you to optimize operations, enhance customer experiences, and stay ahead of the competition."
              link='/machine-learning'
              number="02"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="Mobile Development"
              description="We build mobile apps for different platforms. Our dedicated team focuses on innovation and user-friendliness, using the latest technologies to turn your ideas into functional and appealing applications."
              link='/mobile-development'
              number="03"
            />
          </div>
          <div className='mb-4'>
            <ServiceCard
              title="UI & UX Design"
              description="Our designers are passionate about pushing the boundaries of creativity. We stay updated with the latest design trends and technologies to ensure your website not only meets but exceeds industry standards."
              link='/ui-ux-design'
              number="04"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
