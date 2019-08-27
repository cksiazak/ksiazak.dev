import React from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about" className="about-box section-padding">
      <Fade bottom>About</Fade>
    </Element>
  );
};

export default About;
