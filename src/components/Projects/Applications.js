import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainProjectSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
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
    flexDirection: 'column'
  },
  projectHeader: {
    fontSize: '2.6rem'
  },
  projectDesc: {},
  innerProjectDesc: {},
  buttonContainer: {}
});

const IndividualApp = () => {
  const {
    projectContainer,
    textContainer,
    projectHeader,
    projectDesc,
    innerProjectDesc,
    buttonContainer
  } = useStyles();
  return (
    <div className={projectContainer}>
      <div className={textContainer}>
        <h3 className={projectHeader}>PROJECTTITLE</h3>
        <div className={projectDesc}>
          <div className={innerProjectDesc}>
            <p>PROJECT DESC</p>
            <div className={buttonContainer}>
              <a href='/'>PROJECT</a>
              <a href='/'>GIT</a>
            </div>
            <hr />
            <ul>
              <li>TECH</li>
              <li>TECH</li>
              <li>TECH</li>
            </ul>
          </div>
        </div>
      </div>
      <div>IMG</div>
    </div>
  );
};

const Applications = () => {
  const { mainProjectSection } = useStyles();
  return (
    <section className={mainProjectSection}>
      <h2>Projects</h2>
      <IndividualApp />
      <IndividualApp />
      <IndividualApp />
    </section>
  );
};

export default Applications;
