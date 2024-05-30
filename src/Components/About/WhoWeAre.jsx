import React from 'react';
import { useInView } from 'react-intersection-observer';
import solution from '../Assets/icon-planning.svg';
import developing from '../Assets/icon-branding.svg';
import testing from '../Assets/icon-implementation.svg';
import maintenance from "../Assets/icon-documentation.svg";
import { Link } from 'react-router-dom';

const AnimatedText = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <div className='w-full text-white py-4'>
      <div className='flex justify-between px-4 lg:px-12 mt-4 lg:mt-10 font-custom'>
        <p className='text-4xl font-semibold uppercase 2xl:text-5xl'>Who we are</p>
        <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <p className='text-[#207ead] 2xl:text-lg hover:scale-110 hover:text-white'>Read more &rarr;</p>
        </Link>
      </div>
      <div className='w-full flex flex-col lg:flex-row lg:px-12 py-6 font-custom px-4'>
        <div className='w-full lg:w-1/2'>
          <AnimatedText>
            <p className='lg:mt-3 text-lg text-justify tracking-tight 2xl:text-xl text-white'>
              <b>Sync-Code</b> is a software company based in Pristina, Kosovo. We
              develop innovative products as well as custom software solutions. We
              develop wide enterprise solutions by covering the entire development
              process and also cooperate with companies who want to outsource their
              projects. Our team has proven to experience outsourcing projects from
              the EU and the US.<br /><br />
              Empowering businesses and individuals lies at the core of our
              mission. Through robust and scalable software solutions, we aim to
              redefine the way you operate, connect, and succeed in the digital
              age. At Sync-Code, we believe in technology that not only solves
              problems but also unlocks new possibilities.
            </p>
          </AnimatedText>
        </div>

        <div className='w-full text-white lg:w-1/2 grid grid-cols-2 mt-16 lg:mt-0 gap-y-10 justify-center items-center font-custom 2xl:text-xl'>
          <AnimatedText>
            <div className='flex flex-col items-center'>
              <img src={solution} alt='' className='object-cover w-10 2xl:w-20 h-auto' />
              <p className='mt-3 uppercase'>Solution</p>
            </div>
          </AnimatedText>
          <AnimatedText>
            <div className='flex flex-col items-center'>
              <img src={developing} alt='' className='object-cover w-10 2xl:w-20 h-auto' />
              <p className='mt-3 uppercase'>Developing</p>
            </div>
          </AnimatedText>
          <AnimatedText>
            <div className='flex flex-col items-center'>
              <img src={testing} alt='' className='object-cover w-10 2xl:w-20 h-auto' />
              <p className='mt-3 uppercase'>Testing</p>
            </div>
          </AnimatedText>
          <AnimatedText>
            <div className='flex flex-col items-center'>
              <img src={maintenance} alt='' className='object-cover w-10 2xl:w-20 h-auto' />
              <p className='mt-3 uppercase'>Maintenance</p>
            </div>
          </AnimatedText>
        </div>
      </div>
      <div className='px-4 lg:px-12 2xl:mt-10'>
        <hr />
      </div>
    </div>
  );
};

export default WhoWeAre;
