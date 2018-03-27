import React from 'react'
import './footer.scss'
import {Grid, Row, Col, Image, Button, Clearfix} from 'react-bootstrap'
import logo from '../common/logo.png'
import FaIcon from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
            <Grid>
              <Row><Col md={2} sm={2}>
                <div className="navbar-header">
                  <Image src={logo} className="navbar-brand"/>
                </div>
              </Col>
              <Col md={5} sm={7} xsHidden>
                <ul className="footer-menu">
                  <li><a href="">Главная</a></li>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Услуги</a></li>
                  <li><a href="">Магазин</a></li>
                  <li><a href="">Стоимость</a></li>
                  <li><a href="">Контакты</a></li>
                </ul>
              </Col>
              <Col md={2} sm={3} className="text-center-xs">
                <Button bsStyle="primary" className="btn-footer">Задать вопрос</Button>
              </Col>
              <Col md={3} sm={12}>
                <div className="social-buttons">
                  <div className="wrapper">
                    <a href="#" className="social-item">
                      <FaIcon icon={["fab", "facebook-f"]} fixedWidth />
                    </a>
                    <div className="social-title">Facebook</div>
                  </div>
                  <div className="wrapper">
                    <a href="#" className="social-item">
                      <FaIcon icon={["fab", "instagram"]} fixedWidth />
                    </a>
                    <div className="social-title">Instagram</div>
                  </div>
                  <div className="wrapper">
                    <a href="#" className="social-item">
                      <FaIcon icon={["fab", "youtube"]} fixedWidth />
                    </a>
                    <div className="social-title">Youtube</div>
                  </div>
                </div>
              </Col></Row>
            </Grid>
        </div>
        <div className="copyright">
          <Grid>2018 © Комфорт без забот. Все права защищены</Grid>
        </div>
      </footer>
    )
  }
}