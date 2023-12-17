import React, { useState } from 'react';
import icon1 from "../Assets/global-communication.png";
import icon2 from "../Assets/shopping.png";
import icon3 from "../Assets/application.png";
import icon4 from "../Assets/content-management-system.png";
import icon5 from "../Assets/front-end.png";
import icon6 from "../Assets/development.png";
import icon7 from "../Assets/database-storage.png";
import reactIcon from "../Assets/physics.png"; // Replace with the actual path to your React icon

const frontendTechnologies = [
  { icon: reactIcon, name: 'React' },
  { icon: reactIcon, name: 'React' },
];

const backendTechnologies = [
  // Add backend technologies as needed
];

const databaseTechnologies = [
  // Add database technologies as needed
];

const WebServices = () => {
  const [showDescription, setShowDescription] = useState({
    frontend: false,
    backend: false,
    databases: false,
  });

  const toggleDescription = (key) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className='w-full text-white py-4'>
      <div className='px-4 lg:px-16 mt-4 lg:mt-10 font-custom'>
        <p className='text-4xl font-semibold 2xl:text-5xl'>What are <span className='text-blue-500'>web development services ?</span></p>
        <p className='py-6'>Our web development services cover a spectrum of offerings, <span className='text-gray-500'>
        from creating websites and web apps to keeping things secure with cybersecurity solutions. We make your online experience top-notch with cool designs (UX/UI), powerful eCommerce, and smart website structures. We test, maintain, and even offer advice. Additionally, we excel in creating custom CMS solutions 
            tailored to your unique needs.</span> 
        </p>
      </div>

      {/* Web Development Solutions Section */}
      <div className='px-4 lg:px-16 mt-16 font-custom'>
        <p className='text-4xl font-semibold 2xl:text-5xl text-center'>Reach your business goals with powerful <span className='text-blue-500'>web development solutions</span></p>

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
      </div>

      {/* Technologies Section */}
      <div className='px-4 lg:px-16 mt-16 font-custom'>
        <p className='text-4xl font-semibold 2xl:text-5xl text-center'>Maximize Value with Cutting-Edge <span className='text-blue-500'>Technologies</span></p>
        <p className='lg:w-[70%] mt-6 text-center mx-auto'>Solve customer problems by choosing cutting-edge technologies for your tech stack. Take your business to the next level with the right solutions tailored to your own requirements.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <div className='text-center'>
            <img src={icon5} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Frontend Development</p>
            <button onClick={() => toggleDescription('frontend')}>
              Click to see the description
            </button>
            {showDescription.frontend && (
              <div className="flex flex-col gap-y-4 mt-4 items-center justify-center">
                {frontendTechnologies.map((technology, index) => (
                  <button
                    key={index}
                    className="flex items-center outline text-white px-4 py-2"
                  >
                    <img src={technology.icon} alt="" className="w-8 h-8 object-cover mr-2" />
                    {technology.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='text-center'>
            <img src={icon6} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Backend Development</p>
            <button onClick={() => toggleDescription('backend')}>
              Click to see the description
            </button>
            {showDescription.backend && (
              <div className="flex items-center justify-center">
                {backendTechnologies.map((technology, index) => (
                  <button
                    key={index}
                    className="flex items-center outline text-white px-4 py-2 mr-4"
                  >
                    <img src={technology.icon} alt="" className="w-8 h-8 object-cover mr-2" />
                    {technology.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='text-center'>
            <img src={icon7} alt='Technology Icon' className='w-10 h-10 object-cover mx-auto mb-2' />
            <p className='text-xl font-semibold mt-2'>Databases</p>
            <button onClick={() => toggleDescription('databases')}>
              Click to see the description
            </button>
            {showDescription.databases && (
              <div className="flex items-center justify-center">
                {databaseTechnologies.map((technology, index) => (
                  <button
                    key={index}
                    className="flex items-center outline text-white px-4 py-2 mr-4"
                  >
                    <img src={technology.icon} alt="" className="w-8 h-8 object-cover mr-2" />
                    {technology.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
