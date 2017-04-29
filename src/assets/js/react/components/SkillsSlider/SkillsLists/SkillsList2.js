/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import jekyll from './../../../img/jekyll.svg';
import babel from './../../../img/babel.svg';
import github from './../../../img/github.svg';
import atom from './../../../img/atom.svg';
import jquery from './../../../img/jquery.svg';
import sass from './../../../img/sass.svg';


export default class SkillsList2 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={jekyll} alt="Jekyll"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={babel} alt="Babel"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="github" src={github} alt="Github"/>
                     </div>
                </Col>
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
                        <img src={sass} alt="Sass"/>
                    </div>
                </Col>
            </Row>
        );
    }
}
