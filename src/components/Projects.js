import React from 'react';

import { projects } from './data/projectData';

import '../styles/projects.scss';

const Projects = () => {
  return (
    <section className="section-container project-section">
      <h2 className="section-header">Projects</h2>
      {projects.map((project, id) => (
        <div className="inner-section-container project-container" key={id}>
          <div className="project-title-links">
            <a href={project.url}>{project.title}</a>
          </div>
          <div className="projects-inner">
            <div className="project-info">
              <div className="project-description">
                {project.description.map((desc, id) => (
                  <p key={id}>{desc}</p>
                ))}
              </div>
              <hr />
              <ul>
                {project.technologies.map((tech, id) => (
                  <li key={id}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="image-place" alt={project.title}>
              THIS IS AN IMAGE
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
