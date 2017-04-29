/**
 * Modules
 */

import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/**
 * Pages
 */
import App from './components/App';
import Home from './components/Home';



export default class Routes extends Component {
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Home }/>
                </Route>
            </Router>
        );
    }
}
