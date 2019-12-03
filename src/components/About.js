import React from 'react';
import { Element } from 'react-scroll';

import '../styles/aboutme.scss';
import avatar from './assets/avatar2.jpg';

const technologies = [
  'HTML',
  'CSS (LESS/SASS)',
  'React.js',
  'Node/Express.js',
  'SQLite/PostgreSQL'
];

const About = () => {
  return (
    <Element name="About" className="section-container">
      <h2 className="section-header">About Me</h2>
      <div className="inner-section-container about-me-inner-container">
        <div className="about-me-info">
          <p>
            Welcome! I'm Chris, a developer born and raised in El Paso, TX. I
            enjoy learning new technologies and applying that knowledge in
            designing and creating web applications.
          </p>
          <p>
            Currently, I am a Project Coordinator at C3i Solutions. I work in
            collaboration with our client, Castlight Health. Before, I attended
            the University of Texas at El Paso (UTEP) to study Electrical
            Engineering. At some point during this time, I realized that it
            wasn't a topic that I enjoyed. I joined the Full Stack Web
            Development program at Lambda School, which aided me in discovering
            my passion for tech and design.
          </p>
          <h3>Here are a few technologies I'm working with:</h3>
          <ul>
            {technologies.map((tech, id) => (
              <li key={id}>{tech}</li>
            ))}
          </ul>
        </div>
        <img src={avatar} className="user-avatar" alt="Christopher Ksiazak" />
      </div>
    </Element>
  );
};

export default About;
