import React from 'react';

import '../styles/aboutme.scss';

const technologies = [
  'HTML',
  'CSS (LESS/SASS)',
  'React.js',
  'Node/Express.js',
  'SQLite/PostgreSQL',
  'Golang (WIP)'
];

const About = () => {
  return (
    <section className="about-me-container">
      <h2 className="about-me-header">About Me</h2>
      <div className="about-me-inner-container">
        <div className="about-me-info">
          <p>
            Welcome! I'm Chris, a developer born and raised in El Paso, TX. I
            enjoy learning new technologies and applying that knowledge into
            designing and creating web applications.
          </p>
          <p>
            Currently, I am a Project Coordinator at C3i Solutions. I work in
            colloberation with our client, Castlight Health. Before, I attended
            the University of Texas at El Paso to study Electrical Engineering.
            At some point during this time, I realized that Electrical
            Engineering wasn't something I quite enjoyed. I joined the Full Stack Web
            Development program at Lambda School, which helped me in discovering
            my passion for tech and design.
          </p>
          <h3>Here are a few technologies I'm working with:</h3>
          <ul>
            {technologies.map((tech, id) => (
              <li key={id}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="placeholder-image"></div>
      </div>
    </section>
  );
};

export default About;
