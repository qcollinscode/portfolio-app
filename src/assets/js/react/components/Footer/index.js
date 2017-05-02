import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./style.scss";

export default class Footer extends Component {
    render() {
        return (
                <Row>
                    <div className="footer">
                        <Row className="resume">
                            <Col lg={12} className="algn-ctr">
                                <div className="button-container">
                                    <p><Button>Resume</Button></p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="footer-header">
                            <Col sm={12} lg={6} className="footer-header-txt-container">
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
                            <Col sm={12} lg={6} className="footer-header-txt-container">
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
                        </Row>
                        <Row className="footer-footer">
                            <p>&copy; 2017 Q Collins. All rights reserved.</p>
                        </Row>
                    </div>
                </Row>
        );
    }
}
