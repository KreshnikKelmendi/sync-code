import React, { useEffect } from 'react'
import AboutUs from '../Components/About/AboutUs'
import WhoWeAre from '../Components/About/WhoWeAre';
import WhyChooseUs from '../Components/About/WhyChooseUs';

const AboutUsPage = () => {

  useEffect(() => {
    document.title = 'Sync-Code | About Us |';
  }, []);

  return (
    <>
    <WhoWeAre />
    <AboutUs />
    <WhyChooseUs />
    </>
  )
}

export default AboutUsPage