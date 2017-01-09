/**
 * Modules
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
/**
 * Pages
 */
import './style.css';

class Navigator extends Component {
    render() {
        return(
            <Navbar fluid inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
              <a className="logo-a" onClick={() => browserHistory.push('/')}>Q<span className="dot">.</span>Collins</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/" onClick={() => browserHistory.push('/')}>Home</NavItem>
            <NavItem href="/portfolio" onClick={() => browserHistory.push('/portfolio')}>Portfolio</NavItem>
            <NavItem href="/journal" onClick={() => browserHistory.push('/journal')}>Journal</NavItem>
            <NavItem href="/contact" onClick={() => browserHistory.push('/contact')}>Contact</NavItem>
          </Nav>
          <Nav pullRight>
           
            <NavItem href="https://www.github.com" onClick={() => window.location.assign("https://www.github.com")}>Github</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        );
    }
}

const App = ({ children, location }) => (
    <div className="App">
        <Navigator/>
        <ReactCSSTransitionGroup
        component="div"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >

            {React.cloneElement(children, {
                key: location.pathname
            })}

        </ReactCSSTransitionGroup>
    </div>
)

export default App;