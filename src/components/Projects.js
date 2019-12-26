import React from 'react';
import { Element } from 'react-scroll';
import { IoLogoGithub } from 'react-icons/io';

import { projects } from '../data/projectData';

import '../styles/projects.scss';

const Projects = () => {
  return (
    <Element name='Projects' className='section-container project-section'>
      <h2 className='section-header'>Projects</h2>
      {projects.map((project, id) => (
        <div className='inner-section-container project-container' key={id}>
          <div className='project-title-links'>
            <a href={project.url}>{project.title}</a>
            <a
              href={project.githubLink}
              className='project-github-link'
              title={`${project.title} Github Link`}
            >
              <IoLogoGithub />
            </a>
          </div>
          <div className='projects-inner'>
            <div className='project-info'>
              <div className='project-description'>
                {project.description.map((desc, id) => (
                  <p key={id}>{desc}</p>
                ))}
              </div>
              <ul>
                {project.technologies.map((tech, id) => (
                  <li key={id}>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={project.imgurl}
              className='image-place'
              alt={project.title}
            />
          </div>
        </div>
      ))}
    </Element>
  );
};

export default Projects;
