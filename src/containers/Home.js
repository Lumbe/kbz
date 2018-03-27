import React from 'react'
import { withSiteData } from 'react-static'
import universal from 'react-universal-component'
import {Image} from 'react-bootstrap'
import logo from '../components/common/logo.png'
import Navbar from '../components/layout/topNavbar'
import Footer from '../components/layout/footer'
import FirstScreen from '../components/sections/firstScreen/FirstScreen'
import ServicesSection from '../components/sections/services/ServicesSection'
import DoodleSection from '../components/sections/doodleSection/doodleSection'
import ServicePacks from '../components/sections/servicePacks/servicePacks'
import Advantages from '../components/sections/advantages/advantages'
import Gallery from '../components/sections/gallery/gallery'
import Steps from '../components/sections/steps/steps'
import Preloader from '../components/common/preloader'
import Page from '../components/layout/page'
// const Failed = () => (
//   <div className="preloader">
//     <h1>Ошибка загрузки!</h1>
//   </div>
// );
//
// const Loading = () => (
//   <div className="preloader">
//     <Image src={logo} className="preloader-logo"/>
//   </div>
// );
//
// const HomeUniversal = universal(import('./HomeUniversal'), {
//   loading: Loading,
//   error: Failed,
//   minDelay: 4000,
//   alwaysDelay: true
// });


class Home extends React.Component {
  render() {
    return (
    <div>
      <Preloader/>
      <Navbar/>
        <Page>
          <FirstScreen/>
          <ServicesSection/>
          <DoodleSection/>
          <ServicePacks/>
          <Advantages/>
          <Gallery/>
          <Steps/>
        </Page>
        <Footer/>
    </div>
    )
  }
}

export default withSiteData(Home)
