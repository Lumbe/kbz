import React from 'react'
import {Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './servicesSection.scss'
import Slider from 'react-slick'
import '../../../css/slick-services-theme.scss'
import HeaterImage from './heater.png'

export default class ServicesSection extends React.Component {
  render() {
    const sliderSettings = {
      className: 'services-slider',
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
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
              <div>
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
              <div>
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
              <div>
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
              <div>
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
              <div>
                <div className="slide-card">
                  <div className="top-label">Обслуживание</div>
                  <Image src={HeaterImage} className="center-block img-1"/>
                  <h4>Система отопления</h4>
                  <p>
                    котлы, контроль давления в системе, расширительные баки,
                    замена в системе воды на антифриз, проверка насосов,
                    проверка тёплых полов и т.д.
                  </p>
                  <Button bsStyle="default" block className="btn-frame">Подробнее</Button>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Grid>
    )
  }
}