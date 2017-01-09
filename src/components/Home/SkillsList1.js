/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import react from './../../img/react.svg';
import nodejs from './../../img/nodejs.svg';
import express from './../../img/expressjs.svg';
import postgresql from './../../img/postgresql.svg';
import mongodb from './../../img/mongodb.svg';
import php from './../../img/php.svg';


export default class SkillsList1 extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={react} alt="ReactJS"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={nodejs} alt="NodeJS"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={express} alt="ExpressJS"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={postgresql} alt="PostgreSQL"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mongodb} alt="MongoDB"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={php} alt="PHP"/>
                     </div>   
                </Col>
            </Row>
        );
    }
}