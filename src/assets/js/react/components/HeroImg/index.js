import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery';

import './style.scss';

export default class HeroImg extends React.Component {
    render() {
        return (
            <Jumbotron className="heroImg">
                <div className="heroImg-text-container" ref="heroImgContainer">
                    <h1> {"< " + "Q Collins" + " />"} </h1>
                    <p>Full-Stack Web Developer</p>
                    <p><Button>Learn More</Button></p>
                </div>
            </Jumbotron>
        );
    }
    componentDidMount() {
        const self = this;
        $(this.refs.heroImgContainer).css({opacity: 0});
        setTimeout(function() {
            $(self.refs.heroImgContainer).animate({
                opacity: 1
            }, 1100, function() {
                console.log("animation complete");
            });
        }, 2000);
    }
}


// import React, { Component } from 'react';
// import { Button, ButtonToolbar } from 'react-bootstrap';
//
// export default class HeroImg extends React.Component {
//
//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
//
// }
