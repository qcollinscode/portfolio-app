/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Button, Row, Col, Thumbnail } from 'react-bootstrap';

/**
 * Images Imports
 */
import projPic1 from './../../img/projectimg.png';
import projPic2 from './../../img/projectimg2.png';
import projPic3 from './../../img/projectimg3.png';
import projPic4 from './../../img/projectimg4.png';
import projPic5 from './../../img/projectimg5.png';
import projPic6 from './../../img/projectimg6.png';

/**
 * Component Imports
 */


export default class PrevProjects extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={12} md={4} lg={4}>
                    <a href="#" className="projectPreview">
                        <div className="overlay">
                        </div>
                        <img src={projPic2} alt="project pic"/>
                        <div className="info-box">
                            <h2>Name Changer</h2>
                            <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                            <p>A Mini React Project. Enter a random name or the name of a color.</p>
                            <p><Button className="btn1" href="/lol">Github</Button></p>
                            <p><Button className="btn2" href="/lol">Demo</Button></p>
                        </div>
                    </a>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <a href="#" className="projectPreview">
                        <div className="overlay">
                        </div>
                        <img src={projPic2} alt="project pic"/>
                        <div className="info-box">
                            <h2>Name Changer</h2>
                            <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                            <p>A Mini React Project. Enter a random name or the name of a color.</p>
                            <p><Button className="btn1" href="/lol">Github</Button></p>
                            <p><Button className="btn2" href="/lol">Demo</Button></p>
                        </div>
                    </a>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <a href="#" className="projectPreview">
                        <div className="overlay">
                        </div>
                        <img src={projPic2} alt="project pic"/>
                        <div className="info-box">
                            <h2>Name Changer</h2>
                            <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                            <p>A Mini React Project. Enter a random name or the name of a color.</p>
                            <p><Button className="btn1" href="/lol">Github</Button></p>
                            <p><Button className="btn2" href="/lol">Demo</Button></p>
                        </div>
                    </a>
                </Col>
            </Row>
        );
    }
}