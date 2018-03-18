import React from 'react'
import {Grid, Row, Col, Modal} from 'react-bootstrap'
import './doodleSection.scss'
import YouTube from 'react-youtube'

export default class DoodleVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDoodle: false}
  }

  toggle() {
    this.setState({showDoodle: !this.state.showDoodle})
  }

  _onReady() {
    console.log('ready!')
  }

  render() {
    const playerOpts = {
      height: '360',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Grid fluid className="doodle-section">
        <Row>
          <Col md={12}>
            <h1 className="section-title light">
              <span className="decorated">
                <span className="thin-line">Преимущества</span>
              </span>
            </h1>
            <div className="section-description light text-center">
              абонентского обслуживания
            </div>
          </Col>
          <Col md={12} className="text-center">
            {this.state.showDoodle
              ?
                <YouTube
                  style={{width: '100%'}}
                  videoId="NrXQlyb0XkM"
                  opts={playerOpts}
                  onReady={this._onReady}
                />
              :
                <div className="doodle-wrapper"  onClick={this.toggle.bind(this)}/>
            }
          </Col>
        </Row>
      </Grid>
    )
  }
}