import React from 'react';
import { createUseStyles } from 'react-jss';

import { projects } from '../../data/projectData';

const useStyles = createUseStyles({
  mainProjectSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '50px 0px 0px'
  },
  sectionHeader: {
    fontSize: '3.5rem',
    paddingBottom: '50px'
  },
  projectContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0px',
    '&:nth-child(2)': {
      boxShadow: 'inset 0px 2px 10px 1px rgba(42,42,42,0.4)'
    },
    '&:nth-child(4)': {
      boxShadow: 'inset 0px 2px 10px 1px rgba(42,42,42,0.4)'
    },
    '&:nth-child(odd)': {
      '& .reverseContainer': {
        flexDirection: 'row-reverse'
      },
      '& .reverseTitle': {
        alignItems: 'flex-end'
      }
    }
  },
  innerContainer: {
    display: 'flex',
    width: '75%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '25px 0px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '60%',
    height: '100%'
  },
  projectHeader: {
    fontSize: '3rem',
    paddingBottom: '20px'
  },
  projectDesc: {
    fontSize: '2rem'
  },
  innerProjectDesc: {
    lineHeight: '125%',
    '& p:nth-child(2)': {
      padding: '10px 0px'
    }
  },
  buttonContainer: {},
  listStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: 'auto',
    height: '300px'
  }
});

const IndividualApp = ({
  data: { title, url, githubLink, description, technologies, imgurl }
}) => {
  const {
    projectContainer,
    innerContainer,
    textContainer,
    projectHeader,
    projectDesc,
    innerProjectDesc,
    buttonContainer,
    listStyle,
    imageStyle
  } = useStyles();
  return (
    <div className={projectContainer}>
      <div className={`${innerContainer} reverseContainer`}>
        <div className={`${textContainer} reverseTitle`}>
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
              <ul className={listStyle}>
                {technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <img src={imgurl} alt={title} className={imageStyle} />
      </div>
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