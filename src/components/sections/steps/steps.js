import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Slider from 'react-slick'

export default class Steps extends React.Component {
  render() {
    return (
      <div className="steps-section">
        <Grid>
          <Row>
            <Col md={12}>
              <h1 className="section-title">
              <span className="decorated">
                <span className="thin-line">Как начать работу с нами</span>
              </span>
              </h1>
            </Col>
            <Col md={12}>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}