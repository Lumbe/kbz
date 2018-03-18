import React from 'react'
import {Grid, Row, Col, Modal} from 'react-bootstrap'
import './doodleSection.scss'
import YouTube from 'react-youtube'
import FaIcon from '@fortawesome/react-fontawesome'
export default class DoodleVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDoodle: false}
  }

  toggle() {
    this.setState({showDoodle: !this.state.showDoodle})
  }

  render() {
    const playerOpts = {
      width: '100%',
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
            <div className="doodle-wrapper">
              <FaIcon icon="spinner" spin size="lg" className="load-icon"/>
              {this.state.showDoodle
                ?
                  <div className="player-wrapper">
                    <YouTube
                      videoId="NrXQlyb0XkM"
                      opts={playerOpts}
                    />
                  </div>
                :
                  <div className="cover-wrapper" onClick={this.toggle.bind(this)}/>
              }
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}