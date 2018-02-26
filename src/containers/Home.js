import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'
import FirstScreen from '../components/FirstScreen'
import universal from 'react-universal-component'

const Failed = () => (
  <div style={{ color: 'red' }}>
    <h1>Failed to load the heavy component!</h1>
  </div>
);

const Loading = () => (
  <div style={{ color: 'yellow' }}>
    <h1>Loading first screen heavy component...</h1>
  </div>
);

const LandingSections = universal(import('../components/LandingSections'), {
  loading: Loading,
  error: Failed,
});


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {preloading: false}
  }

  componentDidMount() {
    this.setState({preloading: true});
    // setTimeout(() => {LandingSections.preload().then(() => {
    //
    // })}, 3000)
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
        {/*<img src={logoImg} alt="" />*/}
        <FirstScreen/>
        <LandingSections/>
      </div>
    )
  }
}

export default withSiteData(Home)
