/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

/**
 * Images Imports
 */
import projPic2 from './../../img/projectimg2.png';

/**
 * Component Imports
 */


export default class PrevProjects extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={12} md={4} lg={4}>
                    <section className="card-container">
                        <div id="card">
                            <a href="#" className="figure front">
                                <h2 className="tp">Name Changer</h2>
                                <h4 className="tp"><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                                <p className="tp">A Mini React Project. Enter a random name or the name of a color.</p>
                                <p className="tp"><Button className="btn1" href="/lol">Github</Button></p>
                                <p className="tp"><Button className="btn2" href="/lol">Demo</Button></p>
                            </a>
                            <div className="figure back">
                            </div>
                        </div>
                    </section>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <section className="card-container">
                        <div id="card">
                            <a href="#" className="figure front">
                                <h2 className="tp">Name Changer</h2>
                                <h4 className="tp"><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                                <p className="tp">A Mini React Project. Enter a random name or the name of a color.</p>
                                <p className="tp"><Button className="btn1" href="/lol">Github</Button></p>
                                <p className="tp"><Button className="btn2" href="/lol">Demo</Button></p>
                            </a>
                            <div className="figure back">
                            </div>
                        </div>
                    </section>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <section className="card-container">
                        <div id="card">
                            <a href="#" className="figure front">
                                <h2 className="tp">Name Changer</h2>
                                <h4 className="tp title"><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                                <p className="tp descr">A Mini React Project. Enter a random name or the name of a color.</p>
                                <p className="tp"><Button className="btn1" href="/lol">Github</Button></p>
                                <p className="tp"><Button className="btn2" href="/lol">Demo</Button></p>
                            </a>
                            <div className="figure back">
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        );
    }
}