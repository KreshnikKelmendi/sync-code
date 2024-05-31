import React from 'react'
import FirstFrontView from '../Components/FrontView/FirstFrontView'
import SecondFrontView from '../Components/FrontView/SecondFrontView'
import OurServices from '../Components/Services/OurServices'
import OurWorks from '../Components/Works/OurWorks'
import WhoWeAre from '../Components/About/WhoWeAre'
import AboutUs from '../Components/About/AboutUs'

const HomePage = () => {
  return (
    <>
      <FirstFrontView />
      {/* <WhoWeAre /> */}
      <AboutUs />
      <SecondFrontView />
      <OurServices />
      <OurWorks />
    </>
  )
}

export default HomePage