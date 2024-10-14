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
    scale: 1.05,
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
      description: 'Set the direction with our development consultants.',
      detail: 'We work closely with you to understand your vision and create a roadmap for success.',
    },
    {
      step: '02',
      title: 'Choose a Technology',
      description: 'Explore and select the technologies that best align with your goals.',
      detail: 'Our team will guide you through the latest technologies to find the best fit for your project.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create a user-friendly design that enhances the overall experience.',
      detail: 'Our designers ensure that every detail is focused on user experience and satisfaction.',
    },
    {
      step: '04',
      title: 'Develop',
      description: 'Bring your project to life with the expertise of our development team.',
      detail: 'We follow best practices to deliver a robust and scalable solution for your needs.',
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
            animate={inView ? "visible" : "hidden"} // Trigger animation based on view
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
        At Sync-Code, our development team pays attention to every detail to ensure a seamless and optimized
        process. We deliver results that meet the demands of even the most complex projects.
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
            className={`relative bg-white rounded-lg text-center shadow-lg hover:shadow-xl transform transition-all
              ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm' : ''}`}
            style={{ height: '270px' }}
          >
            {/* Front Side */}
            {hoveredIndex === index ? (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#207ead] to-[#00ffc3] text-white rounded-lg transition-all duration-300"
                style={{ backfaceVisibility: 'hidden', height: '100%' }}
              >
                <div>
                  <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-200 p-2">{card.detail}</p>
                </div>
              </div>
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                style={{ backfaceVisibility: 'hidden', height: '100%' }}
              >
                <div>
                  <div className="text-5xl font-bold text-[#207ead] mb-4">{card.step}</div>
                  <h3 className="font-bold text-xl mb-2 text-[#207ead]">{card.title}</h3>
                  <p className="text-gray-700 p-2">{card.description}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecondFrontView;
