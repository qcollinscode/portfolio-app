import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './../animate/animate.min.css';
import './style.scss';

window.onload = () => {
    ReactDOM.render(
        <h1>admin</h1>,
         document.getElementById('admin')
    );
};
