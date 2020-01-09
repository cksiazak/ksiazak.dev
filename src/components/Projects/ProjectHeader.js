import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ProjectHeader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '150px 0px 250px',
    fontFamily: "'Courgette', cursive"
  },
  innerProjectContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '53%',
    '& hr': {
      margin: '25px 0px',
      width: '75%'
    }
  },
  header: {
    fontSize: '6rem',
    color: '#D36582'
  },
  headerDesc: {
    fontSize: '3.2rem',
    lineHeight: '125%',
    width: '80%',
    color: '#E9E6FF'
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
