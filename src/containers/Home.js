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
  constructor(props) {
    super(props);
    // this.state = {hidePreloader: false}
    this.state = {showPreloader: true}
  }

  componentDidMount() {
    // setTimeout(() => this.setState({hidePreloader: true}), 3750)
    // setTimeout(() => this.setState({showPreloader: false}), 5000)
  }

  render() {
    // const hidePreloader = this.state.hidePreloader;
    const showPreloader = this.state.showPreloader;
    return (
    <div>
      {/*<Preloader hidden={hidePreloader}/>*/}
      <Preloader/>
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
    )
  }
}

export default withSiteData(Home)
