import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import HeroImg from './../HeroImg';
import Footer from './../Footer';
import PrevProjectsMobile from './../PrevProjectsMobile';
import PrevProjectsWeb from './../PrevProjectsWeb';
import SkillsSlider from './../SkillsSlider';

import './style.scss';

import support from './../../fonts/call-center-worker-with-headset.svg';
import browser from './../../fonts/browser.svg';
import computer from './../../fonts/screen.svg';
import repair from './../../fonts/repairing-browser.svg';
import responsive from './../../fonts/responsive.svg';
import shopping from './../../fonts/shopping-cart.svg';
import smartphone from './../../fonts/smartphone-call.svg';
import price from './../../fonts/label.svg';

import twitter from './../../fonts/twitter.svg';
import linkedIn from './../../fonts/linkedin.svg';
import codepen from './../../fonts/codepen.svg';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            para02: {
                lines: 0,
                projects: 0,
                hours: 0,
                years: 0
            }
        };
    }

    render() {
        const webProjects = [{
            app01: {
                title: "Photo Gallery Web App",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
            app02: {
                title: "Birdsville Web App",
                tech: "HTML5, Sass, Javascript, MongoDB, Mongoose, EJS, NodeJS, ExpressJS, and Gulp",
                info: "Wikipedia clone",
                github: "https://github.com/qcollinscode/birdsville-web-app",
                demo: "https://birdville.herokuapp.com/"
            },
            app03: {
                title: "Chat Web App",
                tech: "HTML5, Sass, NodeJS, ExpressJS, Javascript, Socket.io, and Gulp",
                info: "Chat Room",
                github: "https://github.com/qcollinscode/chat-app",
                demo: "https://qchat-app.herokuapp.com/"
            },
        }];
        const modileProjects = [{
            app01: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
            app02: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
            app03: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
        }];


        return (
            <div className="home">
                <section className="home-section">
                <div className="bg-black">
                    <div className="hero-bg"></div>
                </div>
                <HeroImg />
                    <Grid fluid componentClass="section" className="about-section">
                        <p className="about-section-headtext">My name is Q. Collins, and I'm a full stack web developer specializing in web and mobile app development. My goal is to make the web a more accessible and less stressful place for businesses and individuals who need an online presence. </p>
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>{"< " + "Web App Projects" + " />"}</h1>
                        <PrevProjectsWeb webProjects={webProjects} />
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>{"< " + "Mobile App Projects" + " />"}</h1>
                        <PrevProjectsMobile mobileProjects={modileProjects}/>
                    </Grid>
                    <section className="para01-section">
                        <div className="textbox">
                            <p>&#39;&nbsp;Travel as much as you can. As far as you can. As long as you can.<br/>Life’s not meant to be lived in one place. &#39; <br/><span className="arthor">- Traveller</span></p>
                        </div>
                    </section>
                    <Grid fluid componentClass="section" className="tech-section">
                        <h1>{"< " + "Current Skills" + " />"}</h1>
                        <SkillsSlider/>
                    </Grid>
                    <Grid fluid>
                        <Row>
                            <section className="para02-section">
                                <Col xs={12} sm={12} lg={12}>
                                    <Row>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompLinesNum">29394</div>
                                                <div className="accomp-txt">Lines of<br/>code</div>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompProjectsNum">37</div>
                                                <div className="accomp-txt">Projects<br/>Completed</div>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompHoursNum">6948</div>
                                                <div className="accomp-txt">Hours of<br/>programming</div>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompYearsNum">2</div>
                                                <div className="accomp-txt">Years of<br/>programming</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </section>
                        </Row>
                    </Grid>
                    <Grid fluid className="social-section">
                        <h1>{"< " + "Social" + " />"}</h1>
                        <Row>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={twitter}></img></div>
                                    <div className="social-txt">Twitter</div>
                                </div>
                            </Col>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={linkedIn}></img></div>
                                    <div className="social-txt">LinkedIn</div>
                                </div>
                            </Col>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={codepen}></img></div>
                                    <div className="social-txt">Codepen</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <section className="resume">
                        <Col lg={12} className="algn-ctr">
                            <div className="button-container">
                                <p><Button>Resume</Button></p>
                            </div>
                        </Col>
                    </section>
                    <Grid fluid>
                        <h1>{"< " + "Contact" + " />"}</h1>
                    </Grid>
                    <Grid fluid componentClass="footer">
                        <Footer />
                    </Grid>
                </section>
            </div>
        );
    }

    componentDidMount() {
        const self = this;
        const accompArr = [self.refs.accompLinesNum, self.refs.accompProjectsNum, self.refs.accompHoursNum, self.refs.accompYearsNum];

        function animateInfoNums() {
            var y = window.pageYOffset;
            if (y > 3250) {
                $(window).off('scroll', animateInfoNums);
                $(accompArr).each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        };

        $(window).on('scroll', animateInfoNums)
    }

}
