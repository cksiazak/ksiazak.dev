import React from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

const Project = () => {
  return (
    <Element name="projects" className="project-box section-padding">
      <Fade bottom>Project section</Fade>
    </Element>
  );
};

export default Project;
