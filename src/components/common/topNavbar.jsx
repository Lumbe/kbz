import React from 'react'
import {Navbar, Image, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from './logo.png'
import './topNavbar.scss'
import FaIcon from '@fortawesome/react-fontawesome'
import Sticky from 'react-sticky-el'

class TopNavbar extends React.Component {
  render() {
    return (
      <Sticky
        className="top-navbar"
        stickyClassName="sticky"
        topOffset={50}
      >
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logo} responsive/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="text-center">
            <Nav  className="cabinet">
              <NavItem eventKey={1} href="#">
                <div>
                  <FaIcon icon="user"/>
                  {' '}
                  Личный кабинет</div>
              </NavItem>
            </Nav>
            <div className="header-phone">
              <div className="phone">+38 (097) 123-45-67</div>
              <div className="callback-button">Обратный звонок</div>
            </div>
            <Nav pullRight className="top-navbar-menu">
              <NavItem eventKey={1} href="#">
                Главная
              </NavItem>
              <NavItem eventKey={2} href="#">
                О нас
              </NavItem>
              <NavItem eventKey={2} href="#">
                Услуги
              </NavItem>
              <NavItem eventKey={2} href="#">
                Магазин
              </NavItem>
              <NavItem eventKey={2} href="#">
                Стоимость
              </NavItem>
              <NavItem eventKey={2} href="#">
                Контакты
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Sticky>
    )
  }
}

export default TopNavbar