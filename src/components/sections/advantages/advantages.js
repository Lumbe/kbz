import React from 'react';
import './advantages.scss';
import {Grid, Row, Col, Image} from 'react-bootstrap'
import KeyIcon from './icons/key.png'
import SupportIcon from './icons/support.png'
import ChronometerIcon from './icons/chronometer.png'
import DocumentationIcon from './icons/documentation.png'
import ListIcon from './icons/list.png'
import WalletIcon from './icons/wallet.png'

export default class Advantages extends React.Component {
  render() {
    return (
      <div className="advantages-section">
        <Grid>
          <Row>
            <Col md={12}>
              <h1 className="section-title light">
              <span className="decorated">
                <span className="thin-line">Почему стоит работать с нами</span>
              </span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={KeyIcon} />
                <h4>Под ключ</h4>
                <p className="description">Комплексное обслуживание вашего дома</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={SupportIcon} />
                <h4>Профессионализм</h4>
                <p className="description">Сертифицированные специалисты</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={ChronometerIcon} />
                <h4>Оперативность</h4>
                <p className="description">Выезд в течении нескольких часов</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={DocumentationIcon} />
                <h4>Гарантия</h4>
                <p className="description">Предоставляется на все виды услуг</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={ListIcon} />
                <h4>Большой выбор</h4>
                <p className="description">Более 30 видов услуг по обслуживанию дома</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="advantage">
                <Image src={WalletIcon} />
                <h4>Гибкие цены</h4>
                <p className="description">Выбирайте подходящий вам ценовой пакет</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}