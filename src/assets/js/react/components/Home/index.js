import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';
import HeroImg from './../HeroImg';
import Footer from './../Footer';
import PrevProjectsMobile from './../PrevProjectsMobile';
import PrevProjectsWeb from './../PrevProjectsWeb';
import SkillsSlider from './../SkillsSlider';
import Testimonials from './../Testimonials';

import './style.scss';

export default class Home extends React.Component {

    render() {
        const webProjects = [{
            app01: {
                title: "Photo Gallery Web App",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
            app02: {
                title: "Birdsville Web App",
                tech: "HTML5, Sass, Javascript, MongoDB, Mongoose, EJS, NodeJS, ExpressJS, and Gulp",
                info: "Wikipedia clone",
                github: "https://github.com/qcollinscode/birdsville-web-app",
                demo: "https://birdville.herokuapp.com/"
            },
            app03: {
                title: "Chat Web App",
                tech: "HTML5, Sass, NodeJS, ExpressJS, Javascript, Socket.io, and Gulp",
                info: "Chat Room",
                github: "https://github.com/qcollinscode/chat-app",
                demo: "https://qchat-app.herokuapp.com/"
            },
        }];
        const modileProjects = [{
            app01: {
                title: "Photo Gallery 01",
                tech: "PHP, SQL, and MySQL",
                info: "I created a custom backend for a HTML5up template.",
                github: "https://github.com/qcollinscode/backend-photogallery01",
                demo: "https://photogallery01.herokuapp.com/"
            },
            app02: {
                title: "",
                tech: "",
                info: "",
                github: "",
                demo: ""
            },
            app03: {
                title: "",
                tech: "",
                info: "",
                github: "",
                demo: ""
            },
        }];
        return (
            <div className="home">
                <section className="home-section">
                <div className="bg-black">
                    <div className="hero-bg"></div>
                </div>
                <HeroImg />
                    <Grid fluid componentClass="section" className="about-section">
                        <p className="about-section-headtext">My name is Q. Collins, and I'm a full stack web developer specializing in web and mobile app development. My goal is to make the web a more accessible and less stressful place for businesses and individuals who need an online presence. </p>
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>Web App Projects</h1>
                        <PrevProjectsWeb webProjects={webProjects} />
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>Mobile App Projects</h1>
                        <PrevProjectsMobile mobileProjects={modileProjects}/>
                    </Grid>
                    <section className="para01-section">
                        <div className="textbox">
                            <p>&#39;&nbsp;Travel as much as you can. As far as you can. As long as you can.<br/>Life’s not meant to be lived in one place. &#39; <br/><span className="arthor">- Traveller</span></p>
                        </div>
                    </section>
                    <Grid fluid componentClass="section" className="tech-section">
                        <h1>Current Skills</h1>
                        <SkillsSlider/>
                    </Grid>
                    <Grid fluid componentClass="section" className="testimonials-section">
                        <Testimonials/>
                    </Grid>
                    <Grid fluid componentClass="footer">
                        <Footer />
                    </Grid>
                </section>
            </div>
        );
    }

}
