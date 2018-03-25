import React from 'react'
import { withSiteData } from 'react-static'
import universal from 'react-universal-component'
import {Image} from 'react-bootstrap'
import logo from '../components/common/logo.png'

const Failed = () => (
  <div className="preloader">
    <h1>Ошибка загрузки!</h1>
  </div>
);

const Loading = () => (
  <div className="preloader">
    <Image src={logo} className="preloader-logo"/>
  </div>
);

const HomeUniversal = universal(import('./HomeUniversal'), {
  loading: Loading,
  error: Failed,
  minDelay: 4000,
  alwaysDelay: true
});


class Home extends React.Component {
  render() {
    return (
      <HomeUniversal/>
    )
  }
}

export default withSiteData(Home)
