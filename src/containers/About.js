import React from 'react'
import Navbar from '../components/layout/topNavbar'
import Footer from '../components/layout/footer'
import Page from '../components/layout/page'
import AboutUs from '../components/sections/aboutUs/aboutUs'
import Certificates from '../components/sections/certificates/certificates'
import Reviews from '../components/sections/reviews/reviews'

export default () => (
  <div>
    <Navbar dark/>
    <Page>
      <AboutUs/>
      <Certificates/>
      <Reviews/>
    </Page>
    <Footer/>
  </div>
)
