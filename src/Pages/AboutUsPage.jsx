import React, { useEffect } from 'react'
import AboutUs from '../Components/About/AboutUs'

const AboutUsPage = () => {

  useEffect(() => {
    document.title = 'Sync-Code | About Us |';
  }, []);

  return (
    <AboutUs />
  )
}

export default AboutUsPage