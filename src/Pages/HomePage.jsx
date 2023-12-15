import React from 'react'
import FirstFrontView from '../Components/FrontView/FirstFrontView'
import WhoWeAre from '../Components/FrontView/WhoWeAre'
import SecondFrontView from '../Components/FrontView/SecondFrontView'
import OurServices from '../Components/Services/OurServices'

const HomePage = () => {
  return (
    <>
      <FirstFrontView />
      <WhoWeAre />
      <SecondFrontView />
      <OurServices />
    </>
  )
}

export default HomePage