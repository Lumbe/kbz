import React from 'react'
import { withSiteData } from 'react-static'
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

const LandingSections = universal(import('../components/LandingSections'));


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
        <FirstScreen/>
        <LandingSections/>
      </div>
    )
  }
}

export default withSiteData(Home)
