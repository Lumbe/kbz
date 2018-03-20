import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import './bootstrap.scss'
import './app.scss'
import Navbar from './components/common/topNavbar'
import Footer from './components/common/footer'
import fontawesome from '@fortawesome/fontawesome'
import {faUser } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import {utils, Button} from 'react-bootstrap'

utils.bootstrapUtils.addStyle(Button, 'more');
fontawesome.library.add(faUser, brands);

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {preloader: true}
  // }

  componentDidMount() {
    setTimeout(() => this.setState({preloader: false}), 4000)
  }

  render() {
    return (
      <div>
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
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}



export default hot(module)(App)
