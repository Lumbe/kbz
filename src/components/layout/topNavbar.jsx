import React from 'react'
import {Link} from 'react-static'
import {Navbar, Image, Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import logo from '../common/logo.png'
import './topNavbar.scss'
import FaIcon from '@fortawesome/react-fontawesome'
import Sticky from 'react-sticky-el'
import Headroom from 'react-headroom'

class TopNavbar extends React.Component {
  render() {
    const dark = this.props.dark || false;
    return (
      <Headroom
        // className="top-navbar"
        // stickyClassName="sticky"
        // topOffset={50}
      >
        <Navbar collapseOnSelect fluid className={dark ? 'dark' : ''}>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={logo} responsive/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="text-center">
            <Nav className="cabinet">
              <NavItem eventKey={1} href="#">
                <div>
                  <FaIcon icon="user"/>
                  {' '}
                  Личный кабинет</div>
              </NavItem>
            </Nav>
            <div className="header-phone hidden-xs hidden-sm">
              <div className="phone">+38 (097) 123-45-67</div>
              <div className="callback-button">Обратный звонок</div>
            </div>
            <Nav pullRight className="top-navbar-menu">
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>
                  Главная
                </NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={2}>
                  О нас
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/services">
                <NavItem eventKey={3}>
                  Услуги
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/shop">
                <NavItem eventKey={4}>
                  Магазин
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/price">
                <NavItem eventKey={5}>
                  Стоимость
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/contacts">
                <NavItem eventKey={6}>
                  Контакты
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    )
  }
}

export default TopNavbar