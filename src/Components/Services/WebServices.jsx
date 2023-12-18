import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import icon1 from "../Assets/global-communication.png";
import icon2 from "../Assets/shopping.png";
import icon3 from "../Assets/application.png";
import icon4 from "../Assets/content-management-system.png";
import icon5 from "../Assets/front-end.png";
import icon6 from "../Assets/development.png";
import icon7 from "../Assets/database-storage.png";
import reactIcon from "../Assets/physics.png"; 
import angularIcon from "../Assets/angular.png"
import nextIcon from "../Assets/next-js.png"
import javascriptIcon from "../Assets/JavaScript-logo.png"
import tailwindIcon from "../Assets/tailwindCSS.png"
import bootstrapIcon from "../Assets/bootstrap.png"
import netIcon from "../Assets/NET_Core_Logo.svg.png"
import strapiIcon from "../Assets/strapi.png"
import payloadIcon from "../Assets/payload-cms-icon-filled-256.png"
import sqlIcon from "../Assets/MicrosoftTeams-image (1).png"
import postgresIcon from "../Assets/postgresql-icon-1024x1014-dz7hnkqk.png"

const frontendTechnologies = [
  { icon: reactIcon, name: 'React JS' },
  { icon: angularIcon, name: 'Angular JS' },
  { icon: nextIcon, name: 'Next JS' },
  { icon: javascriptIcon, name: 'JavaScript' },
  { icon: tailwindIcon, name: 'Tailwind CSS' },
  { icon: bootstrapIcon, name: 'Bootstrap' },
];

const backendTechnologies = [
  { icon: netIcon, name: 'C# .NET' },
  { icon: strapiIcon, name: 'STRAPI CMS' },
  { icon: payloadIcon, name: 'Payload CMS' },
];

const databaseTechnologies = [
  { icon: sqlIcon, name: 'SQL Server' },
  { icon: postgresIcon, name: 'PostgreSQL' },
];

const AnimatedIcon = ({ icon, name }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const animationVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.button
      className="flex items-center justify-center bg-gray-900 text-white px-4 py-2"
      initial='hidden'
      animate={controls}
      variants={animationVariants}
      ref={ref}
    >
      <img src={icon} alt="" className="w-8 h-8 object-cover mr-2" />
      {name}
    </motion.button>
  );
};

const WebServices = () => {
  return (
    <div className='w-full text-white py-4'>
      <motion.div
        className='px-4 lg:px-16 mt-4 lg:mt-10 font-custom'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className='text-2xl lg:text-4xl font-semibold 2xl:text-5xl'>What are <span className='text-blue-500'>web development services ?</span></p>
        <p className='py-6 text-gray-500'>
          Our web development services cover a spectrum of offerings,
          from creating websites and web apps to keeping things secure
          with cybersecurity solutions. We make your online experience
          top-notch with cool designs (UX/UI), powerful eCommerce, and
          smart website structures. We test, maintain, and even offer
          advice. Additionally, we excel in creating custom CMS solutions
          tailored to your unique needs.
        </p>
      </motion.div>

      {/* Web Development Solutions Section */}
      <motion.div
        className='px-4 lg:px-16 mt-16 font-custom'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className='text-2xl lg:text-4xl font-semibold 2xl:text-5xl text-center'>Reach your business goals with powerful <span className='text-blue-500'>web development solutions</span></p>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 py-16'>
          <div className='text-center'>
            <img src={icon1} alt='Global Communication' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Websites</p>
            <p className='mt-2 text-gray-500'>Elevate your brand presence and digital impact with the creation of a beautiful and powerful website. </p>
          </div>

          <div className='text-center'>
            <img src={icon2} alt='eCommerce' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>eCommerce</p>
            <p className='mt-2 text-gray-500'>With eCommerce, businesses thrive 24/7, reaching customers across time zones effortlessly.</p>
          </div>

          <div className='text-center'>
            <img src={icon3} alt='Web Applications' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Web Applications</p>
            <p className='mt-2 text-gray-500'>Web apps captivate a global audience, offering interactive experiences that effortlessly engage and retain user attention.</p>
          </div>

          <div className='text-center'>
            <img src={icon4} alt='Content Management System' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Content Management System</p>
            <p className='mt-2 text-gray-500'>CMS solutions, designed exclusively for your business, saving you valuable time and resources.</p>
          </div>
        </div>
        <hr />
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className='px-4 lg:px-16 mt-16 font-custom'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className='text-4xl font-semibold 2xl:text-5xl text-center'>Maximize Value with Cutting-Edge <span className='text-blue-500'>Technologies</span></p>
        <p className='lg:w-[70%] mt-6 text-center mx-auto'>Solve customer problems by choosing cutting-edge technologies for your tech stack. Take your business to the next level with the right solutions tailored to your own requirements.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16 mt-16'>
          <div className='text-center'>
            <img src={icon5} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Frontend Development</p>
            <button className='text-gray-500 opacity-50'>
              Technologies we use <span className='text-blue-500'>&#9660;</span>
            </button>
            <div className="grid grid-cols-2 gap-4 mt-4 items-center justify-center">
              {frontendTechnologies.map((technology, index) => (
                <AnimatedIcon key={index} icon={technology.icon} name={technology.name} />
              ))}
            </div>
          </div>

          <div className='text-center'>
            <img src={icon6} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Backend Development</p>
            <button className='text-gray-500 opacity-50'>
              Technologies we use <span className='text-blue-500'>&#9660;</span>
            </button>
            <div className="grid grid-cols-2 gap-4 mt-4 items-center justify-center">
              {backendTechnologies.map((technology, index) => (
                <AnimatedIcon key={index} icon={technology.icon} name={technology.name} />
              ))}
            </div>
          </div>

          <div className='text-center'>
            <img src={icon7} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Databases</p>
            <button className='text-gray-500 opacity-50'>
              Technologies we use <span className='text-blue-500'>&#9660;</span>
            </button>
            <div className="grid grid-cols-2 gap-4 mt-4 items-center justify-center">
              {databaseTechnologies.map((technology, index) => (
                <AnimatedIcon key={index} icon={technology.icon} name={technology.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebServices;
