import React, { Component } from 'react';
import Navigation from './../Navigation';
import Home from './../Home';
import Footer from './../Footer';

import './style.scss';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIds: {
                myTest: "one",
                projects: ""
            }
        };
    }

    testThis(props) {
        this.setState({
            navIds: {
                myTest: props
            }
        });
        console.log(this.state)
    }

    getRefs(ref) {
        const self = this;
        const navIds = ref;
        this.testThis(navIds);
        return ref;
    }
    render() {
        return (
            <div className="wrapper">
                <Navigation navIds={this.state.navIds}/>
                <Home getRefs={this.getRefs.bind(this)}/>
            </div>
        );
    }
}
    // componentWillUnmount() {
    //     this.serverRequest.abort();
    // }
