/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Button, Row, Col, Thumbnail } from 'react-bootstrap';

/**
 * Images Imports
 */
import projPic1 from './../../img/projectimg.png';
import projPic2 from './../../img/projectimg2.png';
import projPic3 from './../../img/projectimg3.png';
import projPic4 from './../../img/projectimg4.png';
import projPic5 from './../../img/projectimg5.png';
import projPic6 from './../../img/projectimg6.png';

/**
 * Component Imports
 */


export default class PrevProjects extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic6} alt="242x200">
                        <h2>Portfolio</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A Portfolio built with ReactJS.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic3} alt="242x200">
                        <h2>Name Changer</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A Mini React Project. Enter a random name or the name of a color.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic4} alt="242x200">
                        <h2>Presidents</h2>
                        <h4><b>Tech:</b> ReactJS, NodeJS, ExpressJS, Babel, Webpack</h4>
                        <p>A POTUS information application.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic1} alt="242x200">
                        <h2>MovieDB</h2>
                        <h4><b>Tech:</b> ExpressJS, NodeJS, Babel, Webpack</h4>
                        <p>A movie information app.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic2} alt="242x200">
                        <h2>Star Wars</h2>
                        <h4><b>Tech:</b> ExpressJS, NodeJS, Babel, Webpack</h4>
                        <p>A basic movie information app for star wars fans. </p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={12} md={4} lg={2}>
                    <Thumbnail src={projPic5} alt="242x200">
                        <h2>Music Player</h2>
                        <h4><b>Tech:</b> HTML5, CSS3, Javascript, Gulp</h4>
                        <p>An online music player.</p>
                        <p>                        
                        <Button className="btn-more" bsStyle="default">More</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        );
    }
}