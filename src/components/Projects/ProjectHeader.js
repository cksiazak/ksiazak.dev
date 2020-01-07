import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ProjectHeader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '150px 0px 200px'
  },
  innerProjectContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    '& hr': {
      margin: '25px 0px',
      width: '75%'
    }
  },
  header: {
    fontSize: '5.4rem'
  },
  headerDesc: {
    fontSize: '3.2rem',
    lineHeight: '125%',
    width: '80%'
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
          Building digital experiences and bringing ideas to life
        </h2>
        <hr />
        <p className={headerDesc}>
          Participating in remote teams working towards a common goal
        </p>
      </div>
    </section>
  );
};

export default ProjectHeader;