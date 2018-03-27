import React from 'react'
import Navbar from '../components/layout/topNavbar'
import Footer from '../components/layout/footer'
import Page from '../components/layout/page'
import AboutUs from '../components/sections/aboutUs/aboutUs'

export default () => (
  <div>
    <Navbar dark/>
    <Page>
      <AboutUs/>
    </Page>
    <Footer/>
  </div>
)
