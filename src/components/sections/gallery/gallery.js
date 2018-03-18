import React from 'react'
import Slider from 'react-slick'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Image1 from './images/evrus.jpg'
import Image2 from './images/serseya-560.jpg'
import Image3 from './images/hyperion.jpg'
import './gallery.scss'

export default class Gallery extends React.Component {
  render() {
    const sliderSettings = {
      className: 'gallery-slider',
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 767, settings: { slidesToShow: 1 }},
        { breakpoint: 991, settings: { slidesToShow: 2 }},
        { breakpoint: 1200, settings: { slidesToShow: 3 }}
      ]
    };
    return (
      <div className="gallery-section">
        <Grid>
          <Row>
            <Col md={12}>
              <h1 className="section-title">
              <span className="decorated">
                <span className="thin-line">Галерея</span>
              </span>
              </h1>
              <div className="section-description text-center">
                выполненных работ
              </div>
            </Col>
          </Row>
          <Slider {...sliderSettings}>
            <div>
              <Image src={Image1}/>
              <div className="cover"/>
            </div>
            <div>
              <Image src={Image2}/>
              <div className="cover"/>
            </div>
            <div>
              <Image src={Image3}/>
              <div className="cover"/>
            </div>
            <div>
              <Image src={Image2}/>
              <div className="cover"/>
            </div>
          </Slider>
        </Grid>
      </div>
    )
  }
}