/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import terminal from './../../img/terminal.svg';
import ubuntu from './../../img/ubuntu.svg';
import webpack from './../../img/webpack.svg';
import woocommerce from './../../img/woocommerce.svg';
import wordpress from './../../img/wordpress.svg';
import git from './../../img/git.svg';


export default class SkillsList4 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={terminal} alt="Terminal"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={ubuntu} alt="Ubuntu"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={webpack} alt="Webpack"/>
                     </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={woocommerce} alt="WooCommerce"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="wordpress" src={wordpress} alt="Wordpress"/>
                    </div>   
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="git" src={git} alt="Git"/>
                    </div>   
                </Col>
            </Row>
        );
    }
}