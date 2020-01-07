import React from 'react';
import { createUseStyles } from 'react-jss';

import { projects } from '../../data/projectData';

const useStyles = createUseStyles({
  mainProjectSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '50px 0px'
  },
  sectionHeader: {
    fontSize: '3.5rem',
    paddingBottom: '50px'
  },
  projectContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '&:nth-child(odd)': {
      flexDirection: 'row-reverse'
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 100px'
  },
  projectHeader: {
    fontSize: '2.6rem'
  },
  projectDesc: {},
  innerProjectDesc: {},
  buttonContainer: {},
  imageStyle: {
    width: '50%',
    height: 'auto'
  }
});

const IndividualApp = ({
  data: { title, url, githubLink, description, technologies, imgurl }
}) => {
  const {
    projectContainer,
    textContainer,
    projectHeader,
    projectDesc,
    innerProjectDesc,
    buttonContainer,
    imageStyle
  } = useStyles();
  return (
    <div className={projectContainer}>
      <div className={textContainer}>
        <h3 className={projectHeader}>{title}</h3>
        <div className={projectDesc}>
          <div className={innerProjectDesc}>
            {description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
            <div className={buttonContainer}>
              <a href={url} title={title}>
                PROJECT
              </a>
              <a href={githubLink} title={`${title} Github`}>
                GIT
              </a>
            </div>
            <hr />
            <ul>
              {technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img src={imgurl} alt={title} className={imageStyle} />
    </div>
  );
};

const Applications = () => {
  const { mainProjectSection, sectionHeader } = useStyles();
  return (
    <section className={mainProjectSection}>
      <h2 className={sectionHeader}>03. Projects</h2>
      {projects.map((proj, i) => (
        <IndividualApp key={i} data={proj} />
      ))}
    </section>
  );
};

export default Applications;
