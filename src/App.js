import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import './bootstrap.scss'
import './app.scss'
import Navbar from './components/common/topNavbar'
import fontawesome from '@fortawesome/fontawesome'
import {faUser } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faUser);

const App = () => (
  <Router>
    <div>
      {/*<nav>*/}
        {/*<Link to="/">Home</Link>*/}
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/blog">Blog</Link>*/}
        {/*<Link to="/typography">Typography</Link>*/}
      {/*</nav>*/}
      <Navbar/>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
