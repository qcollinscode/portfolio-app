import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
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
                title: "",
                tech: "",
                info: "",
                github: "",
                demo: ""
            },
            app03: {
                title: "",
                tech: "",
                info: "",
                github: "",
                demo: ""
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
                        <h1>Web App Projects</h1>
                        <PrevProjectsWeb webProjects={webProjects} />
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>Mobile App Projects</h1>
                        <PrevProjectsMobile mobileProjects={modileProjects}/>
                    </Grid>
                    <section className="para01-section">
                        <div className="textbox">
                            <p>&#39;&nbsp;Travel as much as you can. As far as you can. As long as you can.<br/>Life’s not meant to be lived in one place. &#39; <br/><span className="arthor">- Traveller</span></p>
                        </div>
                    </section>
                    <Grid fluid componentClass="section" className="tech-section">
                        <h1>Current Skills</h1>
                        <SkillsSlider/>
                    </Grid>
                    <Grid fluid className="services-section">
                        <h1>Services</h1>
                        <Row>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={support}></img></div>
                                    <div className="services-txt">Friendly Support</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={smartphone}></img></div>
                                    <div className="services-txt">Mobile App Development</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={computer}></img></div>
                                    <div className="services-txt">Web App Development</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={shopping}></img></div>
                                    <div className="services-txt">Ecommerce</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={browser}></img></div>
                                    <div className="services-txt">CMS</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={responsive}></img></div>
                                    <div className="services-txt">Responsive Development</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={repair}></img></div>
                                    <div className="services-txt">Website Maintenance</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={price}></img></div>
                                    <div className="services-txt">Low Cost</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid fluid className="info-Section">
                        <Row>
                            <section className="para02-section">
                                <Col xs={12} sm={12} lg={12}>
                                    <Row>
                                        <Col className="social-col" xs={12} sm={6} lg={3}>
                                            <div className="social-container">
                                                <div className="social-pic">1200</div>
                                                <div className="social-txt">Lines of<br/>code</div>
                                            </div>
                                        </Col>
                                        <Col className="social-col" xs={12} sm={6} lg={3}>
                                            <div className="social-container">
                                                <div className="social-pic">37</div>
                                                <div className="social-txt">Projects<br/>Completed</div>
                                            </div>
                                        </Col>
                                        <Col className="social-col" xs={12} sm={6} lg={3}>
                                            <div className="social-container">
                                                <div className="social-pic">6948</div>
                                                <div className="social-txt">Hours of<br/>programming</div>
                                            </div>
                                        </Col>
                                        <Col className="social-col" xs={12} sm={6} lg={3}>
                                            <div className="social-container">
                                                <div className="social-pic">2</div>
                                                <div className="social-txt">Years of<br/>programming</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </section>
                        </Row>
                    </Grid>
                    <Grid fluid className="social-section">
                        <h1>Social</h1>
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
                    <Grid fluid componentClass="footer">
                        <Footer />
                    </Grid>
                </section>
            </div>
        );
    }

}
