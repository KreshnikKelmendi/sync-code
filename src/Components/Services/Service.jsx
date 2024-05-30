import React from 'react';
import web from "../Assets/18706.jpg"

const Service = () => {
  const serviceData = [
    {
      title: 'WEB DEVELOPMENT',
      heading: 'Cutting-edge web development solutions for your business',
      description: 'Our team of expert developers and designers provides a comprehensive range of web development services. We build dynamic, responsive, and user-friendly web applications tailored to your business needs. Our solutions ensure seamless user experiences and are optimized for performance and security.',
      imgSrc: web,
      imgPosition: 'left',
      list: [
        'Custom web applications',
        'E-commerce platforms',
        'Corporate websites',
        'Content management systems (CMS)',
        'Responsive web design',
        'API integration',
        'Progressive Web Apps (PWA)',
        'Website maintenance and support'
      ]
    },
    {
      title: 'Just because we can',
      heading: 'Tailored financial solutions for any scenario',
      description: 'Discover a range of financial instruments and personalized advice designed to meet your unique requirements.',
      imgSrc: 'https://i.pinimg.com/564x/4e/a7/ff/4ea7ff230ad9f3bc1c30b1b6cbaccad3.jpg',
      imgPosition: 'right',
      list: [
        'E-commerce development',
        'Custom website design',
        'Responsive web applications',
        'Content management systems (CMS)',
        'SEO optimization'
      ]
    },
  ];

  return (
    <section className=''>
      <div className="px-8 py-6 mx-auto md:px-12 flex flex-col lg:h-svh justify-center font-custom">
        <div className="flex flex-col">
          {/* <div className="text-white">
            <div>
              <h1>Our Services</h1>
              <p className="text-balance lg:w-1/2">
                At our company, we offer a wide range of services designed to meet your unique needs. Whether you're looking for financial solutions or web development, we have the expertise to help you succeed.
              </p>
            </div>
          </div> */}
          <div className="mt-6">
            {serviceData.map((service, index) => (
              <div key={index} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                {service.imgPosition === 'left' ? (
                  <>
                    <div className="h-full">
                      <img
                        src={service.imgSrc}
                        alt="#"
                        className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full  object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="text-white uppercase text-base font-medium">{service.title}</span>
                      <p className="text-4xl mt-4 text-white">{service.heading}</p>
                      <p className="text-sm mt-4 text-white">{service.description}</p>
                      <ul className="mt-4 text-white list-none">
                        {service.list.map((item, i) => (
                          <li className='py-2' key={i}>→ <span className='pl-2 text-[#207ead]'>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='mt-20'>
                      <span className="text-white uppercase text-base font-medium">{service.title}</span>
                      <p className="text-4xl mt-4 text-white">{service.heading}</p>
                      <p className="text-sm mt-4 text-white">{service.description}</p>
                      <ul className="mt-4 text-white list-none">
                        {service.list.map((item, i) => (
                          <li className='py-2' key={i}>→ <span className='pl-2 text-[#207ead]'>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-full mt-20">
                      <img
                        src={service.imgSrc}
                        alt="#"
                        className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full object-cover object-center"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
