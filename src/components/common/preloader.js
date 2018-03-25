import React from 'react'
import {Image} from 'react-bootstrap'
import logo from './logo.png'
import './preloader.scss'

export default class Preloader extends React.Component {

  setHeight() {
    // Set document height for wrapper and window height for preloader.
    // This ensures proper background and animation of preloader
    if (typeof document !== 'undefined') {
      var body = document.body,
        html = document.documentElement;
      var wrapperHeight = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
      var preloaderHeight = window.innerHeight;

      document.getElementById('preloader-wrapper').style.height = wrapperHeight.toString() + "px";
      document.getElementById('preloader').style.height = preloaderHeight.toString() + "px";
    }

  }

  componentDidMount() {
    this.setHeight()
  }

  render() {
    return (
      <div id="preloader-wrapper">
        <div id="preloader">
          <Image src={logo} className="preloader-logo"/>
        </div>
      </div>
    )
  }
}