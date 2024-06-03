import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

const SecondFrontView = () => {
  return (
    <div className='text-white px-4 lg:px-12 mt-[-40px] lg:mt-10 2xl:mt-20 font-custom'>
      {/* <p className='text-3xl 2xl:text-4xl'>
        <AnimatedText>Benefit from our reliable development process</AnimatedText>{' '}
        <b className='text-[#207ead]'>
           <AnimatedText>for a successful project.</AnimatedText>
        </b>
      </p> */}
      {/* <p className='mt-6 2xl:text-xl text-white'>
        <AnimatedText>
          We recognize that the most complex projects demand that our development team pay
          attention to every detail in the process of creating solutions. At Sync-Code, we know
          what it takes to execute a seamless and optimized development process.
        </AnimatedText>
      </p> */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 2xl:mt-20 font-custom'>
        {/* Idea Step */}
        <AnimatedText>
          <div className='text-center'>
            <div className='text-5xl 2xl:text-6xl text-[#207ead] mb-3'>01</div>
            <p className='font-extrabold 2xl:text-xl text-[#207ead]'>Consult your idea</p>
            <p className='mt-3 2xl:text-xl text-white'>Setting the direction with our web development consultants</p>
          </div>
        </AnimatedText>
        {/* Choose a Technology Step */}
        <AnimatedText>
          <div className='text-center'>
            <div className='text-5xl 2xl:text-6xl text-[#207ead] mb-3'>02</div>
            <p className='font-extrabold 2xl:text-xl text-[#207ead]'>Choose a Technology</p>
            <p className='mt-3 2xl:text-xl text-white'>
              Explore and select the most suitable technologies that align with your project goals.
            </p>
          </div>
        </AnimatedText>
        {/* Design Step */}
        <AnimatedText>
          <div className='text-center'>
            <div className='text-5xl 2xl:text-6xl text-[#207ead] mb-3'>03</div>
            <p className='font-extrabold 2xl:text-xl text-[#207ead]'>Design</p>
            <p className='mt-3 2xl:text-xl text-white'>
              Craft a visually appealing and user-friendly design that enhances the user experience.
            </p>
          </div>
        </AnimatedText>
        {/* Develop Step */}
        <AnimatedText>
          <div className='text-center'>
            <div className='text-5xl 2xl:text-6xl text-[#207ead] mb-3'>04</div>
            <p className='font-extrabold 2xl:text-xl text-[#207ead]'>Develop</p>
            <p className='mt-3 2xl:text-xl text-white'>Developing your project with our skilled developers.</p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
};

export default SecondFrontView;
