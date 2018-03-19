import React from 'react'
import './steps.scss'
import {Grid, Row, Col, Image, Button} from 'react-bootstrap'
import Slider from 'react-slick'
import PhoneIcon from './icons/support.png'
import HouseIcon from './icons/house.png'
import ListIcon from './icons/list.png'
import EngineerIcon from './icons/engineer.png'
import ClockIcon from './icons/alarm-clock.png'

export default class Steps extends React.Component {
  render() {
    const sliderSettings = {
      className: 'steps-slider',
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 767, settings: { slidesToShow: 1 }},
        { breakpoint: 991, settings: { slidesToShow: 5 }},
        { breakpoint: 1200, settings: { slidesToShow: 5 }}
      ]
    };
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
              <Slider {...sliderSettings}>
                <div>
                  <div className="step">
                    <Image src={PhoneIcon}/>
                    <h4><span className="step-title">01</span></h4>
                    <p className="description">
                      Бесплатная консультация по телефону
                      <Button bsStyle="link">Перезвонить Вам?</Button>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="step">
                    <Image src={HouseIcon}/>
                    <h4><span className="step-title">02</span></h4>
                    <p className="description">
                      Экспертная оценка состояния вашего дома и его инженерных систем
                    </p>
                  </div>
                </div>
                <div>
                  <div className="step">
                    <Image src={ListIcon}/>
                    <h4><span className="step-title">03</span></h4>
                    <p className="description">
                      Выбор пакета необходимых услуг
                    </p>
                  </div>
                </div>
                <div>
                  <div className="step">
                    <Image src={EngineerIcon}/>
                    <h4><span className="step-title">04</span></h4>
                    <p className="description">
                      Закрепление менеджера и бригады за вашим домом
                    </p>
                  </div>
                </div>
                <div>
                  <div className="step">
                    <Image src={ClockIcon}/>
                    <h4><span className="step-title">05</span></h4>
                    <p className="description">
                      Техобслуживания, служба быстрого реагирования
                    </p>
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