import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';
import HeroImg from './../HeroImg';
import Footer from './../Footer';
import PrevProjects from './../PrevProjects';
import SkillsSlider from './../SkillsSlider';
import Testimonials from './../Testimonials';

import './style.scss';

export default class Home extends React.Component {

    render() {
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
                        <h1>Recent Web App Projects</h1>
                        <PrevProjects/>
                    </Grid>
                    <Grid componentClass="section" className="recentProjects-section">
                        <h1>Recent Mobile App Projects</h1>
                        <PrevProjects/>
                    </Grid>
                    <section className="para01-section">
                    </section>
                    <Grid fluid componentClass="section" className="tech-section">
                        <h1>Current Skills</h1>
                        <SkillsSlider/>
                    </Grid>
                    <Testimonials/>
                    <Grid fluid componentClass="footer">
                        <Footer />
                    </Grid>
                </section>
            </div>
        );
    }

}
