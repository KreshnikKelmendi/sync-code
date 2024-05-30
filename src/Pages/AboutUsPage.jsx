import React, { useEffect } from 'react'
import AboutUs from '../Components/About/AboutUs'
import WhoWeAre from '../Components/About/WhoWeAre';

const AboutUsPage = () => {

  useEffect(() => {
    document.title = 'Sync-Code | About Us |';
  }, []);

  return (
    <>
    <WhoWeAre />
    <AboutUs />
    </>
  )
}

export default AboutUsPage