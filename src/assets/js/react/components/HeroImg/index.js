import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './style.scss';

export default class HeroImg extends React.Component {

    render() {
        return (
            <Jumbotron className="heroImg">
                <div className="heroImg-text-container">
                    <h1>Hello, I'm Q</h1>
                    <p>A Full-Stack Web Developer</p>
                    <p><Button bsStyle="primary">Learn More</Button></p>
                </div>
            </Jumbotron>
        );
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
