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
    fontSize: '4rem',
    padding: '50px 0px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'inset 0px 2px 8px -2px rgba(42,42,42,0.4)',
    color: '#011502',
    background: '#C9936B',
    fontFamily: "'Permanent Marker', cursive",
    '@media (max-width: 850px)': {
      padding: '25px 0px',
      fontSize: '3.5rem'
    }
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
        flexDirection: 'row-reverse',
        '@media (max-width: 1050px)': {
          flexDirection: 'column-reverse'
        }
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
    alignItems: 'center',
    '@media (max-width: 1250px)': {
      width: '90%'
    },
    '@media (max-width: 1050px)': {
      flexDirection: 'column-reverse'
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
    height: '100%',
    '@media (max-width: 1050px)': {
      paddingTop: '50px',
      width: '90%'
    }
  },
  projectHeadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '50px',
    fontSize: '3rem',
    fontFamily: "'Courgette', cursive",
    width: '100%'
  },
  projectHeader: {
    textDecoration: 'none',
    color: '#22223B',
    transition: '0.2s',
    borderBottom: '2px solid',
    '&:hover': {
      color: '#D81E5B'
    },
    '@media (max-width: 500px)': {
      borderBottom: '0px'
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
    fontSize: '2rem',
    fontFamily: "'Rubik', sans-serif"
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
    justifyContent: 'space-between',
    '@media (max-width: 1050px)': {
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '50px'
    }
  },
  imageStyle: {
    width: 'auto',
    height: '300px',
    '@media (max-width: 500px)': {
      height: '250px'
    }
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
            <a href={githubLink} title={`${title} Github`} className={gitLink}>
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
