import React from 'react'
import './servicePacks.scss'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import ShowMore from '../../common/showMore'

export default class ServicePacks extends React.Component {
  render() {
    return (
      <div className="service-packs-section">
        <Grid>
          <Row>
            <Col md={12}>
              <h1 className="section-title">
              <span className="decorated">
                <span className="thin-line">Пакеты обслуживания</span>
              </span>
              </h1>
            </Col>
          </Row>
          <Row>
            <div className="service-packs">
              <Col md={3}>
                <div className="service-card">
                  <div className="heading">
                    <h2>Абонент</h2>
                    <p className="description">
                      Сервисное обслуживание каждую неделю
                    </p>
                    <div className="price">
                      от 99 999грн./мес
                    </div>
                  </div>
                  <div className="list-title">Включает:</div>
                  <ul className="services-list">
                    <li>Пунтк 1-й включает в себя обслуживание...</li>
                    <li>Пунтк 1-й включает в себя обслуживание...</li>
                    <li>Пунтк 1-й включает в себя обслуживание...</li>
                    <li>Пунтк 1-й включает в себя обслуживание...</li>
                    <ShowMore>
                      <li>Пунтк 2-й включает в себя обслуживание...</li>
                      <li>Пунтк 3-й включает в себя обслуживание...</li>
                      <li>Пунтк 4-й включает в себя обслуживание...</li>
                      <li>Пунтк 5-й включает в себя обслуживание...</li>
                    </ShowMore>
                  </ul>
                  <div className="btn-wrapper"><Button bsStyle="default" block className="btn-frame">Подробнее</Button></div>
                </div>
              </Col>
            <Col md={3}>
              <div className="service-card">
                <div className="heading">
                  <h2>Cезонный</h2>
                  <p className="description">
                    Сервисное обслуживание 2 раза в год
                  </p>
                  <div className="price">
                    от 99 999грн./мес
                  </div>
                </div>
                <div className="list-title">Включает:</div>
                <ul className="services-list">
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <ShowMore>
                    <li>Пунтк 2-й включает в себя обслуживание...</li>
                    <li>Пунтк 3-й включает в себя обслуживание...</li>
                    <li>Пунтк 4-й включает в себя обслуживание...</li>
                    <li>Пунтк 5-й включает в себя обслуживание...</li>
                  </ShowMore>
                </ul>
                <div className="btn-wrapper"><Button bsStyle="default" block className="btn-frame">Подробнее</Button></div>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-card">
                <div className="heading">
                  <h2>Аварийный</h2>
                  <p className="description">
                    Диспетчерский режим, быстрое реагирование
                  </p>
                  <div className="price">
                    от 99 999грн./мес
                  </div>
                </div>
                <div className="list-title">Включает:</div>
                <ul className="services-list">
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <ShowMore>
                    <li>Пунтк 2-й включает в себя обслуживание...</li>
                    <li>Пунтк 3-й включает в себя обслуживание...</li>
                    <li>Пунтк 4-й включает в себя обслуживание...</li>
                    <li>Пунтк 5-й включает в себя обслуживание...</li>
                  </ShowMore>
                </ul>
                <div className="btn-wrapper"><Button bsStyle="default" block className="btn-frame">Подробнее</Button></div>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-card">
                <div className="heading">
                  <h2>Собери сам</h2>
                  <p className="description">
                    Выбирайте только те услуги, которые вам нужны
                  </p>
                  <div className="price">
                    от 99 999грн./мес
                  </div>
                </div>
                <div className="list-title">Включает:</div>
                <ul className="services-list">
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <li>Пунтк 1-й включает в себя обслуживание...</li>
                  <ShowMore>
                    <li>Пунтк 2-й включает в себя обслуживание...</li>
                    <li>Пунтк 3-й включает в себя обслуживание...</li>
                    <li>Пунтк 4-й включает в себя обслуживание...</li>
                    <li>Пунтк 5-й включает в себя обслуживание...</li>
                  </ShowMore>
                </ul>
                <div className="btn-wrapper"><Button bsStyle="default" block className="btn-frame">Подробнее</Button></div>
              </div>
            </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}