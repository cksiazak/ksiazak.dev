import React from 'react';
import { Element } from 'react-scroll';
import { workHistory } from './data/experienceData';

import '../styles/experience.scss';

const Experience = () => {
  return (
    <Element name="Experience" className="section-container experience-section">
      <h2 className="section-header">Experience</h2>
      {workHistory.map((job, id) => (
        <div className="inner-section-container experience-container" key={id}>
          <div className="experience-meta">
            <h3>{job.location}</h3>
            <h4>{job.title}</h4>
            <span>{job.date}</span>
          </div>
          <div className="experience-inner-container">
            {job.description.map((desc, id) => (
              <p key={id}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </Element>
  );
};

export default Experience;
