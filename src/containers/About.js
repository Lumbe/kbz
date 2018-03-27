import React from 'react'
import Navbar from '../components/layout/topNavbar'
import Footer from '../components/layout/footer'
import Page from '../components/layout/page'
import AboutUs from '../components/sections/aboutUs/aboutUs'
import Certificates from '../components/sections/certificates/certificates'

export default () => (
  <div>
    <Navbar dark/>
    <Page>
      <AboutUs/>
      <Certificates/>
    </Page>
    <Footer/>
  </div>
)
