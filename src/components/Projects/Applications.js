import React from 'react';
import { createUseStyles } from 'react-jss';

import { projects } from '../../data/projectData';
import { IoLogoGithub } from 'react-icons/io';

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
    padding: '50px 0px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'inset 0px 2px 8px -2px rgba(42,42,42,0.4)',
    color: '#011502',
    background: '#C9936B'
  },
  projectContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0px',
    background: '#E9E6FF',
    '&:nth-child(3)': {
      boxShadow: 'inset 0px 2px 8px -2px rgba(42,42,42,0.4)'
    },
    '&:nth-child(odd)': {
      background: '#C5D1EB',
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
    padding: '25px 0px',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    height: '100%'
  },
  projectHeadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '50px',
    fontSize: '3rem'
  },
  projectHeader: {
    textDecoration: 'none',
    color: '#22223B',
    transition: '0.2s',
    borderBottom: '2px solid',
    '&:hover': {
      color: '#D81E5B'
    }
  },
  gitLink: {
    textDecoration: 'none',
    color: '#22223B',
    transition: '0.2s',
    '&:hover': {
      color: '#D81E5B'
    }
  },
  projectDesc: {
    fontSize: '2rem'
  },
  innerProjectDesc: {
    lineHeight: '125%',
    '& p:nth-child(2)': {
      padding: '10px 0px'
    },
    '& hr': {
      margin: '10px 0px',
      border: '0px',
      borderBottom: '2px solid'
    }
  },
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
    listStyle,
    imageStyle,
    projectHeadingContainer,
    gitLink
  } = useStyles();
  return (
    <div className={projectContainer}>
      <div className={`${innerContainer} reverseContainer`}>
        <div className={`${textContainer} reverseTitle`}>
          <div className={projectHeadingContainer}>
            <a href={url} className={projectHeader} title={title}>
              {title}
            </a>
            <a
              href={githubLink}
              title={`${title} Github`}
              className={gitLink}
            >
              <IoLogoGithub />
            </a>
          </div>
          <div className={projectDesc}>
            <div className={innerProjectDesc}>
              {description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
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
      <h2 className={sectionHeader}>Projects</h2>
      {projects.map((proj, i) => (
        <IndividualApp key={i} data={proj} />
      ))}
    </section>
  );
};

export default Applications;
