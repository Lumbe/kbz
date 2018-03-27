import React from 'react'
import './certificates.scss'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Slider from 'react-slick'
import certificate from './certificate.jpg'
import FaIcon from '@fortawesome/react-fontawesome'

export default class Certificates extends React.Component {
  render() {
    const sliderSettings = {
      className: 'certificates-slider',
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 767, settings: { slidesToShow: 1 }},
        { breakpoint: 991, settings: { slidesToShow: 3 }}
      ]
    };
    return (
      <div className="certificates">
        <Grid className="section">
          <Row>
            <Col md={12}>
              <h1 className="section-title">
                <span className="decorated">
                  <span className="thin-line">Сертификаты</span>
                </span>
              </h1>
            </Col>
            <Col md={12}>
              <Slider {...sliderSettings}>
                <div>
                  <div className="certificate">
                    <div className="hover">
                      <FaIcon icon="search" style={{color: '#fff'}} size="lg"/>
                    </div>
                    <Image src={certificate}/>
                  </div>
                </div>
                <div>
                  <div className="certificate">
                    <div className="hover">
                      <FaIcon icon="search" style={{color: '#fff'}} size="lg"/>
                    </div>
                    <Image src={certificate}/>
                  </div>
                </div>
                <div>
                  <div className="certificate">
                    <div className="hover">
                      <FaIcon icon="search" style={{color: '#fff'}} size="lg"/>
                    </div>
                    <Image src={certificate}/>
                  </div>
                </div>
                <div>
                  <div className="certificate">
                    <div className="hover">
                      <FaIcon icon="search" style={{color: '#fff'}} size="lg"/>
                    </div>
                    <Image src={certificate}/>
                  </div>
                </div>
                <div>
                  <div className="certificate">
                    <div className="hover">
                      <FaIcon icon="search" style={{color: '#fff'}} size="lg"/>
                    </div>
                    <Image src={certificate}/>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}