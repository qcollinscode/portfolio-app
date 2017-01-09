/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col, Navbar, Link, Button } from 'react-bootstrap';

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
                        <Col lg={12}>
                            <h1>Hi</h1>
                        </Col>
                    </Row>
                    <Row className="Footer-Footer">
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                            <Navbar.Link href="home">Home</Navbar.Link>
                    </Row>
                </div>
            </Row>
        );
    }
}