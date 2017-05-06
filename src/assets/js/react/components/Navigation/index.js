import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import $ from 'jquery';
import { browserHistory } from 'react-router';
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
        const self = this;
        if(this.refs[elClass]) {
            const testi = "#" + elClass;
            console.log($(testi).offset().top - 25);
            this.setState({
                navigation:{
                    [elClass]: true
                }
            });

            $('html, body').animate({
                scrollTop: $(testi).offset().top - 25
            }, 1000);
        }
        // console.log($("#" + "projects"))

    }

    componentWillMount() {
        const self = this;

        $(window).on('scroll', function() {
            var y = window.pageYOffset;
            var scrollPos = 3900;
            if (y < 1164) {
                if(self.refs.nav01) { //home
                    self.setState({
                        navigation:{
                            nav01: true
                        }
                    });
                }
            } else if(y >= 1194 && y < 3459) { //projects
                if(self.refs.nav02) {
                    self.setState({
                        navigation:{
                            nav02: true
                        }
                    });
                }
            } else if(y >= 3459 && y < 4423) { //skills
                if(self.refs.nav03) {
                    self.setState({
                        navigation:{
                            nav03: true
                        }
                    });
                }
            } else if(y >= 4423 && y < 5066) { //Services
                if(self.refs.nav04) {
                    self.setState({
                        navigation:{
                            nav04: true
                        }
                    });
                }
            } else if(y >= 5066 && y < 5489) { //Social
                if(self.refs.nav05) {
                    self.setState({
                        navigation:{
                            nav05: true
                        }
                    });
                }
            } else if(y >= 5489 && y < 5699) { //resume
                if(self.refs.nav06) {
                    self.setState({
                        navigation:{
                            nav06: true
                        }
                    });
                }
            } else if(y > 5694) { //contact
                if(self.refs.nav07) {
                    self.setState({
                        navigation:{
                            nav07: true
                        }
                    });
                }
            }
        })
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
                        <NavItem className={isSelected01} ref="nav01" onClick={this.selectListItem.bind(this)}>Home</NavItem>
                        <NavItem className={isSelected02} ref="nav02" onClick={this.selectListItem.bind(this)}>Projects</NavItem>
                        <NavItem className={isSelected03} ref="nav03" onClick={this.selectListItem.bind(this)}>Skills</NavItem>
                        <NavItem className={isSelected04} ref="nav04" onClick={this.selectListItem.bind(this)}>Services</NavItem>
                        <NavItem className={isSelected05} ref="nav05" onClick={this.selectListItem.bind(this)}>Social</NavItem>
                        <NavItem className={isSelected06} ref="nav06" onClick={this.selectListItem.bind(this)}>Resume</NavItem>
                        <NavItem className={isSelected07} ref="nav07" onClick={this.selectListItem.bind(this)}>Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>Github</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    componentDidMount() {

    }


}
