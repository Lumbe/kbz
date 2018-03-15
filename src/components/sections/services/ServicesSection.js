import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './servicesSection.scss'
import Slider from 'react-slick'
import '../../../css/slick-services-theme.scss'

export default class ServicesSection extends React.Component {
  render() {
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1200, settings: { dots: false }}
      ]
    };
    return (
      <Grid className="services-section">
        <Row>
          <Col md={12}>
            <h1 className="section-title">
              <span className="decorated">
                <span className="thin-line">Наши услуги</span>
              </span>
            </h1>
          </Col>
          <Col md={12}>
            <Slider {...sliderSettings}>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
              <div>
                <div className="slide-card">Услуга</div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Grid>
    )
  }
}