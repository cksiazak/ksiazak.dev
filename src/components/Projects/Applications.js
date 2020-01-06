import React from 'react';
import { projects } from '../../data/projectData';

const Applications = () => {
  return (
    <section>
      {projects.map((project, i) => (
        <div key={i}>
          <div>
            <div>
              <h3>{project.title}</h3>
              <span>{project.githubLink}</span>
            </div>
            <div>
              <div>
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              <hr />
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>{/* IMG HERE */}</div>
        </div>
      ))}
    </section>
  );
};

export default Applications;
