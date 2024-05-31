import React from 'react';
import web from "../Assets/18706.jpg"
import mobile from "../Assets/mobile-dev.png"
import machineLearning from "../Assets/machine-learning.png"
import uiux from "../Assets/design-ui.jpg"

const Service = () => {
    const serviceData = [
      {
          title: 'WEB DEVELOPMENT',
          heading: 'Web Development solutions for your business',
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
          title: 'MOBILE DEVELOPMENT',
          heading: 'Innovative Mobile Development Solutions for Your Business',
          description: 'Our mobile development team specializes in creating high-quality, user-centric mobile applications that drive engagement and deliver exceptional user experiences. We offer a comprehensive suite of mobile development services, tailored to meet the unique needs of your business. From concept to deployment, we ensure that your mobile solutions are robust, scalable, and secure.',
          imgSrc: mobile,
          imgPosition: 'right',
          list: [
              'Native mobile applications (iOS and Android)',
              'Cross-platform mobile applications',
              'Mobile UI/UX design',
              'Mobile app testing and quality assurance',
              'App store submission and optimization',
              'Enterprise mobile solutions',
              'Mobile backend development',
              'Continuous maintenance and support'
          ]
      },
      {
        title: 'MACHINE LEARNING & ANALYTICS',
        heading: 'Advanced Machine Learning & Analytics Solutions',
        description: 'Our team of experienced data scientists and analysts specializes in developing intelligent solutions that provide actionable insights and drive strategic decision-making. From predictive modeling to data visualization, our comprehensive suite of services is designed to unlock the full potential of your data.',
        imgSrc: machineLearning,
        imgPosition: 'left',
        list: [
            'Predictive analytics',
            'Natural language processing (NLP)',
            'Computer vision',
            'Data mining and analysis',
            'AI-powered automation',
            'Big data solutions',
            'Data visualization and reporting',
            'Custom machine learning models'
        ]
    },
    {
      title: 'UI/UX DESIGN',
      heading: 'Exceptional UI/UX Design Solutions',
      description: 'Our UI/UX design team is dedicated to creating intuitive and visually appealing interfaces that enhance user satisfaction and engagement. By focusing on user-centered design principles, we ensure that every interaction with your digital product is seamless and enjoyable. Our comprehensive range of UI/UX design services is tailored to meet the unique needs of your business, driving both functionality and aesthetic appeal.',
      imgSrc: uiux,
      imgPosition: 'right',
      list: [
          'User research and analysis',
          'Wireframing and prototyping',
          'Visual design',
          'Interaction design',
          'Usability testing',
          'Responsive design',
          'Information architecture',
          'Design systems and guidelines'
      ]
  }
  ];


  return (
    <section className=''>
      <div className="px-8 mx-auto md:px-12 flex flex-col lg:h-svh justify-center font-custom">
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
              <div key={index} className="grid grid-cols-1 py-6 gap-8 md:grid-cols-2 md:gap-y-24 items-center">
                {service.imgPosition === 'left' ? (
                  <>
                    <div className="h-full">
                      <img
                        src={service.imgSrc}
                        alt="#"
                        className="bg-gray-200 shadow-box rounded-md firstServiceImage shadow-gray-500/30 overflow-hidden aspect-square w-full lg:h-[100vh] 2xl:h-[70vh] object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="text-[#207ead] border-b border-b-[#207ead] py-1 uppercase text-lg font-extrabold">{service.title}</span>
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
                    <div className=''>
                      <span className="text-[#207ead] border-b border-b-[#207ead] py-1 uppercase text-lg font-extrabold">{service.title}</span>
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
                        className="bg-gray-200 shadow-box secondServiceImage shadow-gray-500/30 overflow-hidden aspect-square w-full lg:h-[100vh] 2xl:h-[70vh] object-cover object-center"
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
