import React from 'react'
import Slider from 'react-slick'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Image1 from './images/img1.jpg'
import Image2 from './images/img2.jpg'
import Image3 from './images/img3.jpg'
import './gallery.scss'
import FaIcon from '@fortawesome/react-fontawesome'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.setActiveSlide = this.setActiveSlide.bind(this);
    this.state = {slides: 4, activeSlide: 1}
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  setActiveSlide(index) {
    let slidesCount = this.state.slides;
    index > slidesCount ? this.setState({activeSlide: 1}) : this.setState({activeSlide: index})
  }

  render() {
    const slidesCount = this.state.slides;
    const activeSlide = this.state.activeSlide;
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
        { breakpoint: 991, settings: { slidesToShow: 3 }},
        { breakpoint: 1200, settings: { slidesToShow: 3 }}
      ],
      afterChange: (newIndex) => this.setActiveSlide(newIndex + 1)
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
          <Slider
            ref={c => this.slider = c }
            {...sliderSettings}
          >
            <div className="effect-apollo">
              <Image src={Image3} className="gallery-image"/>
              <div className="cover"/>
            </div>
            <div className="effect-apollo">
              <Image src={Image2} className="gallery-image"/>
              <div className="cover"/>
            </div>
            <div className="effect-apollo">
              <Image src={Image3} className="gallery-image"/>
              <div className="cover"/>
            </div>
            <div className="effect-apollo">
              <Image src={Image1} className="gallery-image"/>
              <div className="cover"/>
            </div>
          </Slider>
          <div className='slider-buttons'>
            <button className='btn-left' onClick={this.previous}>
              <FaIcon icon="long-arrow-alt-left" size="lg" style={{marginRight: "10px"}}/>
              Назад
            </button>
            <div className="slide-counter">
              0{activeSlide} / 0{slidesCount}
            </div>
            <button className='btn-right' onClick={this.next}>
              Вперед
              <FaIcon icon="long-arrow-alt-right" size="lg" style={{marginLeft: "10px"}}/>
            </button>
          </div>
        </Grid>
      </div>
    )
  }
}