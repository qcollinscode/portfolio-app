/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import atom from './../../img/atom.svg';
import jquery from './../../img/jquery.svg';
import mocha from './../../img/mocha.svg';
import sass from './../../img/sass.svg';
import redux from './../../img/redux.svg';
import python from './../../img/python.svg';






export default class SkillsList3 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={atom} alt="Atom"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="jquery" src={jquery} alt="JQuery"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mocha} alt="Mocha"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={sass} alt="Sass"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={redux} alt="Redux"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={python} alt="Python"/>
                    </div>   
                </Col>
            </Row>
        );
    }
}