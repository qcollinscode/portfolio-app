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
import PortfolioHome from './components/PortfolioHome';
import TechHome from './components/TechHome';
import ProjectPage from './components/ProjectPage';
import JournalHome from './components/JournalHome';
import EntryPage from './components/EntryPage';
import ContactHome from './components/ContactHome';
import ResumeHome from './components/ResumeHome';
import ContactForm from './components/modules/ContactForm';
import NotFound from './components/NotFound';



export default class Routes extends Component {
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Home }/>
                    <Route path="portfolio" component={ PortfolioHome } />
                    <Route path="portfolio/:id" component={ TechHome } />
                    <Route path="portfolio/:id/:id" component={ ProjectPage } />
                    <Route path="journal" component={ JournalHome } />
                    <Route path="journal/:id" component={ EntryPage } />
                    <Route path="contact" component={ ContactHome } />
                    <Route path="contact/form" component={ ContactForm } />
                    <Route path="resume" component={ ResumeHome } />
                </Route>
                <Route path="*" component={ NotFound } />
                <Route path="*/*" component={ NotFound } />
                <Route path="*/*/*" component={ NotFound } />
            </Router>
        );
    }
}