/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */

import javascript from './../../img/javascript.svg';
import npm from './../../img/npm.svg';
import mysql from './../../img/mysql.svg';
import jekyll from './../../img/jekyll.svg';
import heroku from './../../img/heroku.svg';
import gulp from './../../img/gulp.svg';


export default class SkillsList5 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={javascript} alt="Javascript"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={npm} alt="NPM"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={mysql} alt="Mysql"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="gulp" src={gulp} alt="Gulp"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="jekyll" src={jekyll} alt="Jekyll"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="heroku" src={heroku} alt="Heroku"/>
                    </div>   
                </Col>
            </Row>
        );
    }
}