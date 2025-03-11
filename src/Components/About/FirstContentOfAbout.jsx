import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smoth' });
  };


export const FirstContentOfAbout = () => {
     
  return (
    <div className="bg-[#FFF6E7]">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Web Development"
        heading="Crafting Scalable Web Solutions."
      >
        <WebDevelopmentContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Mobile Development"
        heading="Building Seamless Mobile Experiences."
      >
        <MobileDevelopmentContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Machine Learning & Analytics"
        heading="Leveraging AI for Smarter Insights."
      >
        <MachineLearningContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="UI/UX Design"
        heading="Designing Intuitive User Experiences."
      >
        <UIDesignContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div className="lg:px-12 px-4 py-4 lg:pt-12">
      <div className="relative lg:h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden h-[55vh] lg:h-[100vh] rounded-[18px]"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" style={{ opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div style={{ y, opacity }} ref={targetRef} className="absolute left-0 top-0 flex h-[55vh] lg:h-screen w-full flex-col items-center justify-center text-white">
      <p className="mb-2 font-custom uppercase text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center font-custom text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const WebDevelopmentContent = () => (
    <ExampleContent
      title="Web Development"
      text="We build scalable, high-performance web applications tailored to your needs. Our expertise ensures fast, responsive, and user-friendly solutions using the latest technologies."
    />
  );
  
  const MobileDevelopmentContent = () => (
    <ExampleContent
      title="Mobile Development"
      text="Creating seamless mobile apps for iOS and Android. We focus on speed, functionality, and user experience to deliver high-quality, cross-platform solutions."
    />
  );
  
  const UIDesignContent = () => (
    <ExampleContent
      title="UI/UX Design"
      text="Designing intuitive, engaging, and visually stunning user experiences. Our approach enhances usability, accessibility, and brand impact."
    />
  );
  
  const MachineLearningContent = () => (
    <ExampleContent
      title="Machine Learning & Analytics"
      text="Leveraging AI to provide data-driven insights, automate processes, and enhance decision-making. We integrate smart analytics for better business efficiency."
    />
  );
  
const ExampleContent = ({ title, text }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl lg:text-4xl font-bold md:col-span-4 font-custom">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl font-custom">{text}</p>
       <div className='flex justify-between'>
              
                <Link to='/services' 
                      onClick={handleClick}
                      className='text-[#207ead] 2xl:text-lg mt-1 hover:scale-110 hover:text-black font-custom border-b'>Learn more &rarr;
                </Link>
              </div>
    </div>
  </div>
);
