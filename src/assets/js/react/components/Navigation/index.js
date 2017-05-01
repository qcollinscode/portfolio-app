import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import './style.scss';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation : {
                nav01: true,
                nav02: false,
                nav03: false
            }
        };
    }


    selectListItem(e) {
        var elClass = e.target.parentElement.classList[0];
        this.setState({
            navigation:{
                [elClass]: true
            }
        });
        console.log(this.state)

    }

    render() {
        var isSelected01 = this.state.navigation.nav01 ? "nav01 nav-li-selected" : "nav01",
            isSelected02 = this.state.navigation.nav02 ? "nav02 nav-li-selected" : "nav02",
            isSelected03 = this.state.navigation.nav03 ? "nav03 nav-li-selected" : "nav03";
        return (
            <Navbar fluid inverse fixedTop collapseOnSelect>
                <div></div>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo-a">QCCODE</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem className={isSelected01} onClick={this.selectListItem.bind(this)}>Home</NavItem>
                        <NavItem className={isSelected02} onClick={this.selectListItem.bind(this)}>Portfolio</NavItem>
                        <NavItem className={isSelected03} onClick={this.selectListItem.bind(this)}>Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>Github</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
