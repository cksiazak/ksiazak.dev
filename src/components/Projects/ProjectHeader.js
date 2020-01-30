import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ProjectHeader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '175px 0px 150px',
    fontFamily: "'Courgette', cursive",
    '@media (max-width: 650px)': {
      padding: '150px 0px 125px'
    }
  },
  innerProjectContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    '& hr': {
      margin: '25px 0px',
      width: '75%'
    },
    '@media (max-width: 1400px)': {
      width: '75%'
    },
    '@media (max-width: 900px)': {
      width: '80%'
    },
    '@media (max-width: 750px)': {
      width: '90%'
    }
  },
  header: {
    fontSize: '6rem',
    color: '#D36582',
    '@media (max-width: 650px)': {
      fontSize: '3.5rem'
    }
  },
  headerDesc: {
    fontSize: '3.2rem',
    lineHeight: '125%',
    width: '80%',
    color: '#E9E6FF',
    '@media (max-width: 650px)': {
      fontSize: '2.75rem'
    }
  }
});

const ProjectHeader = () => {
  const {
    ProjectHeader,
    innerProjectContainer,
    header,
    headerDesc
  } = useStyles();
  return (
    <section className={ProjectHeader}>
      <div className={innerProjectContainer}>
        <h2 className={header}>
          Building digital experiences and bringing plans to life
        </h2>
        <hr />
        <p className={headerDesc}>Distributed teams with distributed ideas</p>
      </div>
    </section>
  );
};

export default ProjectHeader;
