import React from 'react'
import ServicesSection from './sections/services/ServicesSection'
import DoodleSection from './sections/doodleSection/doodleSection'
import ServicePacks from './sections/servicePacks/servicePacks'
import Advantages from './sections/advantages/advantages'
import Gallery from './sections/gallery/gallery'

export default () => (
  <div>
    <ServicesSection/>
    <DoodleSection/>
    <ServicePacks/>
    <Advantages/>
    <Gallery/>
  </div>
)