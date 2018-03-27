import React from 'react'
import {Image} from 'react-bootstrap'
import logo from './logo.png'
import './preloader.scss'

export default class Preloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false, transparent: false}
  }

  setHeight() {
    // Set document height for wrapper and window height for preloader.
    // This ensures proper background and animation of preloader
    if (typeof document !== 'undefined') {
      var body = document.body;
      var wrapperHeight = Math.max( body.scrollHeight, body.offsetHeight);
      var preloaderHeight = window.innerHeight;

      document.getElementById('preloader-wrapper').style.height = wrapperHeight.toString() + "px";
      document.getElementById('preloader').style.height = preloaderHeight.toString() + "px";
    }

  }

  componentDidMount() {
    this.setHeight();
    setTimeout(() => {this.setState({transparent: true})}, 4000);
    setTimeout(() => {this.setState({hidden: true})}, 5500);
  }

  render() {
    const transparent = this.state.transparent;
    const hidden = this.state.hidden;
    return (
      <div id="preloader-wrapper" className={(transparent ? 'transparent ' : '') + (hidden ? ' hidden' : '')}>
        <div id="preloader">
          <Image src={logo} className="preloader-logo"/>
        </div>
      </div>
    )
  }
}