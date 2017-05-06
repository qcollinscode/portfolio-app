import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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

import travelingcoders from './../../img/travelingcoders.jpg';
import birdville from './../../img/birdville.jpeg';
import jonesty from './../../img/jonesty.jpg';

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
                title: "Traveling Coders",
                tech: "HTML5, SASS, Javascript, PHP, MySQL, SQL, ReactJS",
                info: "A travel blog",
                github: "https://github.com/qcollinscode/traveling-coders",
                demo: "https://travelingcoders.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + travelingcoders + ')',
                    backgroundSize: 'contain!important',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app02: {
                title: "Birdsville Web App",
                tech: "HTML5, SASS, Javascript, MongoDB, Mongoose, EJS, NodeJS, ExpressJS",
                info: "Wikipedia clone",
                github: "https://github.com/qcollinscode/birdsville-web-app",
                demo: "https://birdville.herokuapp.com/",
                style: {
                    backgroundImage: 'url('+ birdville + ')',
                    backgroundSize: 'contain!important',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app03: {
                title: "Jonesty",
                tech: "HTML5, SASS, Javascript, EJS, NodeJS, MongoDB, Mongoose, ExpressJS, ReactJS",
                info: "An ecommerce app",
                github: "https://github.com/qcollinscode/jonesty-app",
                demo: "https://jonesty.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + jonesty + ')',
                    backgroundSize: 'contain!important',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
        }];
        const modileProjects = [{
            app01: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/",
                style: {
                    backgroundColor: "rgba(23, 87, 92, 1)"
                }
            },
            app02: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/",
                style: {
                    backgroundColor: "rgba(23, 87, 92, 1)"
                }
            },
            app03: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/",
                style: {
                    backgroundColor: "rgba(23, 87, 92, 1)"
                }
            },
        }];
        return (
            <div className="home">
                <section className="home-section" id="nav01">
                <div className="bg-black">
                    <div className="hero-bg"></div>
                </div>
                <HeroImg />
                    <Grid fluid componentClass="section" className="about-section">
                        <p className="about-section-headtext" ref="aboutMe">My name is Q. Collins, and I'm a full stack web developer specializing in web and mobile app development. My goal is to make the web a more accessible and less stressful place for businesses and individuals who need an online presence.</p>
                    </Grid>
                    <Grid componentClass="section" id="nav02" ref="webprojects" className="recentProjects-section">
                        <h1>Web App Projects</h1>
                        <PrevProjectsWeb webProjects={webProjects} />
                    </Grid>
                    <Grid componentClass="section"  id="nav02b" className="recentProjects-section" ref="mobileprojects">
                        <h1>Mobile App Projects</h1>
                        <PrevProjectsMobile mobileProjects={modileProjects} />
                    </Grid>
                    <section className="para01-section">
                        <div className="textbox" id="paraTextBox">
                            <p>&#39;&nbsp;Travel as much as you can. As far as you can. As long as you can.<br/>Life’s not meant to be lived in one place. &#39; <br/><span className="arthor">- Traveller</span></p>
                        </div>
                    </section>
                    <Grid fluid componentClass="section" id="nav03" className="tech-section">
                        <h1>Current Skills</h1>
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
                    <Grid fluid className="services-section" id="nav04">
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
                    <Grid fluid className="social-section" id="nav05">
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
                    <section className="resume" id="nav06">
                        <Col lg={12} className="algn-ctr">
                            <div className="button-container">
                                <p><Button>Resume</Button></p>
                            </div>
                        </Col>
                    </section>
                    <Grid fluid className="contact-section" id="nav07">
                        <Row>
                            <section className="bg">
                                <h1>Contact</h1>
                                <Form className="form">
                                    <Row>
                                        <Col md={12} lg={4} className="col-lg-offset-2">
                                            <FormGroup>
                                                <ControlLabel bsClass="label">Name</ControlLabel>
                                                {" "}
                                                <FormControl type="text" placeholder="John Doe"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={12} lg={4} className="col-lg-offset-0">
                                            <FormGroup>
                                                <ControlLabel bsClass="label">Email</ControlLabel>
                                                {" "}
                                                <FormControl type="email" placeholder="johndoe@example.com" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={8} className="col-lg-offset-2">
                                            <FormGroup>
                                                <ControlLabel bsClass="label">Message</ControlLabel>
                                                <FormControl className="textarea" componentClass="textarea" placeholder="Message"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={8} className="col-lg-offset-2">
                                            <Button type="submit" className="btn">Send Message <i className="fa fa-paper-plane" aria-hidden="true"></i></Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </section>
                        </Row>
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

        function animateCSS() {
            const aboutMe = self.refs.aboutMe;
            const paraquote = self.refs.paraquote;
            var y = window.pageYOffset;
            if(y < 311) {
                $(aboutMe).addClass("animated fadeInLeft");
            } else if (y > 330 && y < 2030) {
                $("#nav02").addClass("animated fadeInRight");
            } else if (y > 2150 && y < 3705) {
                console.log('para')
                $("#paraTextBox").addClass("animated fadeInLeft");
            } else if (y > 3705 && y < 4156) {
                $(".services-container").addClass("animated fadeInRight");
            } else if (y > 4256 && y < 5000) {
                $(".social-col").addClass("animated fadeInLeft");
            } else if (y > 5046) {
                $(".form").addClass("animated fadeInRight");
            }
        }

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
        $(window).on('scroll', animateCSS);
        $(window).on('scroll', animateInfoNums)
    }

}
