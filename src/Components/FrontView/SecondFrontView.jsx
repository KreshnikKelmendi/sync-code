import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeInOut',
    },
  }),
};

const cardHover = {
  hover: {
    scale: 1.01,
    boxShadow: '0 15px 300px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.4,
    },
  },
};

const staggeredText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SecondFrontView = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1 }); // Adjust threshold as needed

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  const cards = [
    {
      step: '01',
      title: 'Consult your idea',
      description: 'Work with our consultants to define your direction and roadmap.',
      detail: 'We work closely with you to define your vision, address technical requirements, and outline a clear path to success.',
    },
    {
      step: '02',
      title: 'Choose Technology',
      description: 'Identify the technology stack that best suits your project.',
      detail: 'Based on your project’s needs, we help you choose the best technologies to ensure scalability and efficiency.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Craft a seamless, user-friendly design for an optimal experience.',
      detail: 'Our design team focuses on creating user interfaces that are both visually appealing and functional.',
    },
    {
      step: '04',
      title: 'Develop',
      description: 'Turn your ideas into reality with our development team.',
      detail: 'We transform designs into fully functional systems using the latest development best practices.',
    },
  ];

  const splitText = "for a successful project.".split(" ");

  return (
    <div className="text-white px-4 lg:px-12 mt-10 font-custom">
      {/* Main Heading */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
        className="text-4xl 2xl:text-5xl mb-10 font-bold"
      >
        Benefit from our <span>reliable</span> development process{' '}
        <b className="text-[#207ead]">
          {/* Animate the text for "for a successful project." */}
          <motion.span
            ref={ref}
            variants={staggeredText}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {splitText.map((word, index) => (
              <motion.span key={index} variants={letterAnimation} className="inline-block">
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.span>
        </b>
      </motion.div>

      {/* Sub Heading */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
        className="max-w-3xl text-lg 2xl:text-xl mb-16"
      >
        At Sync-Code, our development process is designed to be seamless and detail-oriented,
        ensuring that each project meets the highest quality standards.
      </motion.p>

      {/* Step-by-step Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardHover}
            whileHover="hover"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            className={`relative bg-gray-300 rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-transform transform-gpu 
            ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-5' : 'opacity-100'}`}
            style={{ height: '320px' }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Circular Step Indicator */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#207ead] to-[#00ffc3] flex items-center justify-center mb-4">
                <div className="text-2xl text-white font-bold">{card.step}</div>
              </div>
              {/* Card Content */}
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{card.title}</h3>
              {/* Show description or full detail based on hover state */}
              <p className="text-gray-600">
                {hoveredIndex === index ? card.detail : card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecondFrontView;
