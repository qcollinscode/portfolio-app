/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


/**
 * Component Imports
 */


export default class HeroImg extends Component {
    render() {
        return (
            <Jumbotron className="HeroImg">
                <div className="heroText-container container">
                    <h1>Hello, I'm Q</h1>
                    <p>A Full-Stack Web Developer</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </div>
            </Jumbotron>
        );
    }
}