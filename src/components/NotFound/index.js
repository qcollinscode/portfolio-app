import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './style.css';

export default class NotFound extends Component {
    render() {
        function preventAnchor(e){   
            e.preventDefault();
            return false
        }
        return (
            <main className="NotFound">
                <section className="container">
                    <h1>You've reached the last page in history.</h1>
                    <Link onClick={() => browserHistory.push('/')}>
                        <a href="home" onClick={preventAnchor.bind(this)}>Go back</a>
                    </Link>
                </section>
            </main>
        );
    }
}