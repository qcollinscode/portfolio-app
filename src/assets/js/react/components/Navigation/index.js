import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import './style.scss';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar fluid inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo-a">Q<span className="dot">.</span>Collins</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>Home</NavItem>
                        <NavItem>Portfolio</NavItem>
                        <NavItem>Contact</NavItem>
                        <NavItem>Pricing</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>Github</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
