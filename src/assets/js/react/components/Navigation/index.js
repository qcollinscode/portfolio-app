import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import $ from 'jquery';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import './style.scss';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation : {
                nav01: true,
                nav02: false,
                nav03: false,
                nav04: false,
                nav05: false,
                nav06: false,
                nav07: false
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

    }

    render() {
        var isSelected01 = this.state.navigation.nav01 ? "nav01 nav-li-selected" : "nav01",
            isSelected02 = this.state.navigation.nav02 ? "nav02 nav-li-selected" : "nav02",
            isSelected03 = this.state.navigation.nav03 ? "nav03 nav-li-selected" : "nav03",
            isSelected04 = this.state.navigation.nav04 ? "nav04 nav-li-selected" : "nav04",
            isSelected05 = this.state.navigation.nav05 ? "nav05 nav-li-selected" : "nav05",
            isSelected06 = this.state.navigation.nav06 ? "nav06 nav-li-selected" : "nav06",
            isSelected07 = this.state.navigation.nav07 ? "nav07 nav-li-selected" : "nav07";
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
                        <NavItem className={isSelected02} onClick={this.selectListItem.bind(this)}>Projects</NavItem>
                        <NavItem className={isSelected03} onClick={this.selectListItem.bind(this)}>Skills</NavItem>
                        <NavItem className={isSelected04} onClick={this.selectListItem.bind(this)}>Services</NavItem>
                        <NavItem className={isSelected05} onClick={this.selectListItem.bind(this)}>Social</NavItem>
                        <NavItem className={isSelected06} onClick={this.selectListItem.bind(this)}>Resume</NavItem>
                        <NavItem className={isSelected07} onClick={this.selectListItem.bind(this)}>Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>Github</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    componentDidMount() {
        const self = this;



        $(window).on('scroll', function() {
            var y = window.pageYOffset;
            var scrollPos = 3900;
            if (y < 1164) {
                self.setState({
                    navigation:{
                        nav01: true
                    }
                });
            } else if(y > 1164 && y < 3435) {
                self.setState({
                    navigation:{
                        nav02: true
                    }
                });
            } else if(y > 3435 && y < 3902) {
                self.setState({
                    navigation:{
                        nav03: true
                    }
                });
            } else if(y > 3902 && y < 5043) {
                self.setState({
                    navigation:{
                        nav04: true
                    }
                });
            } else if(y > 5043) {
                self.setState({
                    navigation:{
                        nav05: true
                    }
                });
            }
        })
    }

}
