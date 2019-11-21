import React from 'react';

import { workHistory } from './data/experienceData';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      {workHistory.map((job, id) => (
        <div className="experience-container" key={id}>
          <h3>{job.location}</h3>
          <h4>{job.title}</h4>
          <span>{job.date}</span>
          <div className="experience-inner-container">
            {job.description.map((desc, id) => (
              <p key={id}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
