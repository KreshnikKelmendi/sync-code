import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import phone from "../Assets/detailed-map-of-world-on-black-background-vector-4225773.jpg";
import solution from '../Assets/icon-planning.svg';
import developing from '../Assets/icon-branding.svg';
import testing from '../Assets/icon-implementation.svg';
import maintenance from "../Assets/icon-documentation.svg";

const AboutUs = () => {
  return (
    <div className='w-full text-white py-4'>
      <div className='px-4 lg:px-16 lg:mt-10 font-custom'>
        <p className='text-4xl font-semibold uppercase 2xl:text-5xl'>About us</p>
        <p className='mt-6 lg:mt-3 lg:py-6 2xl:text-lg text-gray-500'>
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
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 mt-16 lg:mt-10 gap-y-10 justify-center items-center font-custom 2xl:text-lg'>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                className={`flex flex-col items-center ${inView ? 'animate' : ''}`}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              >
                <img src={solution} alt='' className='object-cover w-12 h-auto' />
                <p className='mt-3 uppercase text-gray-500'>Solution</p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                className={`flex flex-col items-center ${inView ? 'animate' : ''}`}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              >
                <img src={developing} alt='' className='object-cover w-12 h-auto' />
                <p className='mt-3 uppercase text-gray-500'>Developing</p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                className={`flex flex-col items-center ${inView ? 'animate' : ''}`}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              >
                <img src={testing} alt='' className='object-cover w-12 h-auto' />
                <p className='mt-3 uppercase text-gray-500'>Testing</p>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                className={`flex flex-col items-center ${inView ? 'animate' : ''}`}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              >
                <img src={maintenance} alt='' className='object-cover w-12 h-auto' />
                <p className='mt-3 uppercase text-gray-500'>Maintenance</p>
              </motion.div>
            )}
          </InView>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center px-4 lg:px-16 font-custom'>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div className={`lg:w-1/2 ${inView ? 'animate' : ''}`} ref={ref}>
              <img
                src={phone}
                alt='About Us'
                className='w-full h-auto object-cover'
              />
            </div>
          )}
        </InView>
        <div className='lg:w-1/2 font-custom'>
          <p className='text-4xl font-semibold uppercase 2xl:text-5xl'>Vision & Mission</p>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.p
                className={`mt-6 lg:mt-9 2xl:text-lg text-gray-500 ${inView ? 'animate' : ''}`}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              >       
                    Our vision is to revolutionize the digital landscape by creating innovative software solutions that 
                    empower businesses and individuals to thrive in the ever-evolving technological era. We aspire to be 
                    a catalyst for positive change, driving efficiency, connectivity, and progress through cutting-edge 
                    technology. Like a digital map, we aim to chart new territories and lead the way towards a globally 
                    connected future. <br /> <br />
                    Our mission at Sync-Code is to deliver exceptional software products and services that exceed the 
                    expectations of our clients and users. We are committed to navigating the vast digital landscape with: 
                    innovation, quality, collaboration, customer success, ethical practices, continuous improvement.
              </motion.p>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
