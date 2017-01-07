import React, { Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button, Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';

import './style.css';
import imgMain from './../../img/gif.jpg';
import pcPic from './../../img/pc.jpg';
import projPic1 from './../../img/projectimg.png';
import projPic2 from './../../img/projectimg2.png';
import projPic3 from './../../img/projectimg3.png';
import projPic4 from './../../img/projectimg4.png';
import projPic5 from './../../img/projectimg5.png';
import projPic6 from './../../img/projectimg6.png';

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

class CardsCom2 extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={pcPic} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        );
    }
}

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <section className="Home-Section">   
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
                    <Grid fluid componentClass="section" className="recentEntry-section">
                        <h1>Recent Projects</h1>
                        <CardsCom2/>
                    </Grid>
                </section>
            </div>
        );
    }
}