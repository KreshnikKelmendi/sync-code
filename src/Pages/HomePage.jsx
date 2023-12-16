import React from 'react'
import FirstFrontView from '../Components/FrontView/FirstFrontView'
import WhoWeAre from '../Components/FrontView/WhoWeAre'
import SecondFrontView from '../Components/FrontView/SecondFrontView'
import OurServices from '../Components/Services/OurServices'
import OurWorks from '../Components/Works/OurWorks'

const HomePage = () => {
  return (
    <>
      <FirstFrontView />
      <WhoWeAre />
      <SecondFrontView />
      <OurServices />
      <OurWorks />
    </>
  )
}

export default HomePage