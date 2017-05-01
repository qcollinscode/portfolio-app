import React, { Component } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Navigation from './../Navigation';
import { browserHistory } from 'react-router';
import Home from './../Home';
import Footer from './../Footer';

import './style.scss';

export default class App extends React.Component {
    render() {
        return (
            <ReactCssTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
                <div className="App" key={location.pathname}>
                <Navigation/>
                    {this.props.children}
                </div>
            </ReactCssTransitionGroup>
        );
    }
}

    // componentWillUnmount() {
    //     this.serverRequest.abort();
    // }
