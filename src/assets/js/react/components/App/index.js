import React, { Component } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Navigation from './../Navigation';
import { browserHistory } from 'react-router';
import Home from './../Home';
import Footer from './../Footer';

import './style.scss';

const App = ({ children, location }) => (
            <div className="App">
                <Navigation/>
                <ReactCssTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                {React.cloneElement(children, {
                    key: location.pathname
                })}

                </ReactCssTransitionGroup>
            </div>
        );

    // componentWillUnmount() {
    //     this.serverRequest.abort();
    // }
export default App;
