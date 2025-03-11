import React, { useEffect } from 'react'
import AboutUs from '../Components/About/AboutUs'
import WhoWeAre from '../Components/About/WhoWeAre';
import WhyChooseUs from '../Components/About/WhyChooseUs';
import { FirstContentOfAbout } from '../Components/About/FirstContentOfAbout';

const AboutUsPage = () => {

  useEffect(() => {
    document.title = 'Sync-Code | About Us |';
  }, []);

  return (
    <>
    <WhoWeAre />
    <FirstContentOfAbout />
    <AboutUs />
    <WhyChooseUs />
    </>
  )
}

export default AboutUsPage