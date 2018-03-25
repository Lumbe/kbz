import React from 'react';
import Navbar from '../components/common/topNavbar'
import Footer from '../components/common/footer'
import FirstScreen from '../components/sections/firstScreen/FirstScreen'
import ServicesSection from '../components/sections/services/ServicesSection'
import DoodleSection from '../components/sections/doodleSection/doodleSection'
import ServicePacks from '../components/sections/servicePacks/servicePacks'
import Advantages from '../components/sections/advantages/advantages'
import Gallery from '../components/sections/gallery/gallery'
import Steps from '../components/sections/steps/steps'

export default () => (
  <div>
    <Navbar/>
    <div className="content">
      <FirstScreen/>
      <ServicesSection/>
      <DoodleSection/>
      <ServicePacks/>
      <Advantages/>
      <Gallery/>
      <Steps/>
    </div>
    <Footer/>
  </div>
);