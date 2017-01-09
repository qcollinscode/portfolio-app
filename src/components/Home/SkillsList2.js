/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import bootstrap from './../../img/bootstrap.svg';
import babel from './../../img/babel.svg';
import github from './../../img/github.svg';
import laravel from './../../img/laravel.svg';
import magento from './../../img/magento.svg';
import digitalocean from './../../img/digitalocean.svg';


export default class SkillsList2 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={magento} alt="Magento"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={bootstrap} alt="Bootstrap"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={laravel} alt="Laravel"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={digitalocean} alt="Digital Ocean"/>
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
            </Row>
        );
    }
}