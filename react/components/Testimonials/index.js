/**
 * Module Imports
 */
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import './style.scss';
/**
 * Component Imports
 */

export default class Testimonials extends Component {
    render() {
        return(
            <Row className="testimonials">
                <Col xs={12} md={6} className="beautiful-img"></Col>
                <Col xs={12} md={6} className="customer-quote">
                    <div>
                        <p>This is my boss, Jonathan Hart, a self-made millionaire, he's quite a guy. This is Mrs H., she's gorgeous, she's one lady who knows how to take care of herself. By the way, my name is Max.<span><br/>- John Doe</span></p>
                    </div>
                </Col>
            </Row>
        );
    }
}
