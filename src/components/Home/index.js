import React, { Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button, Grid, Row, Col, Image, Thumbnail, Carousel } from 'react-bootstrap';

/** IMG */
import './style.css';
import pcPic from './../../img/pc.jpg';
import projPic1 from './../../img/projectimg.png';
import projPic2 from './../../img/projectimg2.png';
import projPic3 from './../../img/projectimg3.png';
import projPic4 from './../../img/projectimg4.png';
import projPic5 from './../../img/projectimg5.png';
import projPic6 from './../../img/projectimg6.png';

/** SVG */
import react from './../../img/react.svg';
import nodejs from './../../img/nodejs.svg';
import express from './../../img/expressjs.svg';
import postgresql from './../../img/postgresql.svg';
import mongodb from './../../img/mongodb.svg';
import atom from './../../img/atom.svg';
import php from './../../img/php.svg';
import bootstrap from './../../img/bootstrap.svg';
import babel from './../../img/babel.svg';
import digitalocean from './../../img/digitalocean.svg';
import django from './../../img/django.svg';
import github from './../../img/github.svg';
import jquery from './../../img/jquery.svg';
import laravel from './../../img/laravel.svg';
import magento from './../../img/magento.svg';
import mocha from './../../img/mocha.svg';
import sass from './../../img/sass.svg';
import redux from './../../img/redux.svg';
import python from './../../img/python.svg';
import terminal from './../../img/terminal.svg';
import ubuntu from './../../img/ubuntu.svg';
import webpack from './../../img/webpack.svg';
import woocommerce from './../../img/woocommerce.svg';
import wordpress from './../../img/wordpress.svg';
import visualstudio from './../../img/visual-studio.svg';
import javascript from './../../img/javascript.svg';
import npm from './../../img/npm.svg';
import mysql from './../../img/mysql.svg';
import namecheap from './../../img/namecheap.svg';
import jekyll from './../../img/jekyll.svg';
import heroku from './../../img/heroku.svg';
import gulp from './../../img/gulp.svg';
import git from './../../img/git.svg';


class JumbotronCom extends Component {
    render() {
        return (
            <Jumbotron className="jumbotron">
                <div className="heroText-container container">
                    <h1>Hello, I'm Q</h1>
                    <p>A Full-Stack Web Developer</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </div>
            </Jumbotron>
        );
    }
}

class CardsCom extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic6} alt="242x200">
                        <h2>Portfolio</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A Portfolio built with ReactJS.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic3} alt="242x200">
                        <h2>Name Changer</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A Mini React Project. Enter a random name or the name of a color.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic4} alt="242x200">
                        <h2>Presidents</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A POTUS information application.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic1} alt="242x200">
                        <h2>MovieDB</h2>
                        <h4><b>Tech:</b> ExpressJS, NodeJS, Babel, Webpack</h4>
                        <p>A movie information app.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic2} alt="242x200">
                        <h2>Star Wars</h2>
                        <h4><b>Tech:</b> ExpressJS, NodeJS, Babel, Webpack</h4>
                        <p>A basic movie information app for star wars fans. </p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic5} alt="242x200">
                        <h2>Music Player</h2>
                        <h4><b>Tech:</b> HTML5, CSS3, Javascript, Gulp</h4>
                        <p>An online music player.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        );
    }
}

class TechItems1 extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={react}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={nodejs}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={express}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={postgresql}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mongodb}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={php}/>
                     </div>   
                </Col>
            </Row>
        );
    }
}

class TechItems2 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={magento}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={bootstrap}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={laravel}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={digitalocean}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={babel}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={github}/>
                     </div>   
                </Col>
            </Row>
        );
    }
}

class TechItems3 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={atom}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={jquery}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mocha}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={sass}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={redux}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={python}/>
                    </div>   
                </Col>
            </Row>
        );
    }
}
class TechItems4 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={terminal}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={ubuntu}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={webpack}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={woocommerce}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={wordpress}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={git}/>
                    </div>   
                </Col>
            </Row>
        );
    }
}
class TechItems5 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={javascript}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={npm}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mysql}/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={gulp}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={jekyll}/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={heroku}/>
                    </div>   
                </Col>
            </Row>
        );
    }
}

class TechSlide extends Component {
    render() {
        return (
            <Carousel indicators={false} controls={false} autoplay={true} interval={1500}>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <TechItems1/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <TechItems2/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <TechItems3/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <TechItems4/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <TechItems5/>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <section className="Home-Section">
                    <div className="bg-black">
                        <div className="hero-bg"> </div>
                    </div>   
                    <JumbotronCom />
                    <Grid fluid componentClass="section" className="about-section">
                        <p className="about-section-headtext">My name is Q. Collins, and I'm a full stack web developer specializing in web and mobile app development. My goal is to make the web a more accessible and less stressful place for businesses and individuals who need an online presence.</p>
                    </Grid>
                    <Grid fluid componentClass="section" className="recentProjects-section">
                        <h1>Recent Projects</h1>
                        <CardsCom/>
                    </Grid>
                    <section className="para01-section">
                    </section>
                    <Grid fluid componentClass="section" className="tech-section">
                        <h1>Technologies I Use</h1>
                        <TechSlide/>
                    </Grid>
                    <section className="para01-section">
                    </section>
                </section>
            </div>
        );
    }
}