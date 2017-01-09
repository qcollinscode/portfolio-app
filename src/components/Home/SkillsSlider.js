/**
 * Modules Import
 */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


/**
 * SkillsList Imports
 */
import SkillsList1 from './SkillsList1';
import SkillsList2 from './SkillsList2';
import SkillsList3 from './SkillsList3';
import SkillsList4 from './SkillsList4';
import SkillsList5 from './SkillsList5';

export default class SkillsSlider extends Component {
    render() {
        return (
            <Carousel indicators={false} controls={false} interval={1500}>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList1/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList2/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList3/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList4/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList5/>
                </Carousel.Item>
            </Carousel>
        );
    }
}