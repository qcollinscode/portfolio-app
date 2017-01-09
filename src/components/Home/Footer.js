/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * Component Imports
 */

export default class Footer extends Component {
    render() {
        return(
            <Row>
                <div className="Footer">
                    <Row className="Resume">
                        <Col lg={12} className="">
                            Resume
                        </Col>
                    </Row>
                    <Row className="Footer-Header">                   
                        <Col sm={12} lg={6} className="Footer-Header-txt-container">
                            <div>
                                <h1>Heading</h1>
                                <p>Home</p>
                                <p>Portfolio</p>
                                <p>Journal</p>
                                <p>Contact</p>
                                <p>Github</p>
                                <p>Pricing</p>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} className="Footer-Header-txt-container">
                            <div>
                                <h1>Heading</h1>
                                <p>anything</p> 
                                <p>anything</p>
                                <p>anything</p>
                                <p>anything</p>
                                <p>anything</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="Footer-Footer">
                        <p>&copy; 2017 QCollins. All rights reserved.</p>
                    </Row>
                </div>
            </Row>
        );
    }
}