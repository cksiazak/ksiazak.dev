import React, { Fragment } from 'react';
import { workHistory } from '../../data/experienceData';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: '75px 0px'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '65%'
  },
  sectionHeading: {
    fontSize: '4rem',
    padding: '0px 0px 50px',
    fontFamily: "'Roboto', 'sans-serif'"
  },
  experienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '25px 0px',
    padding: '20px 30px',
    background: '#2E294E',
    borderRadius: '25px 0px',
    transition: '.4s',
    position: 'relative',
    zIndex: '0',
    '&:nth-child(even)': {
      borderRadius: '0px 25px'
    },
    '&:hover': {
      transform: 'scale(1.01)'
    }
  },
  jobInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '25px'
  },
  jobLocation: {
    fontSize: '3.2rem',
    color: '#FBB13C'
  },
  jobTitle: {
    fontSize: '2.2rem',
    padding: '3px 0px',
    color: '#D81159'
  },
  jobDates: {
    fontSize: '2.2rem',
    color: '#D81159'
  },
  jobDesc: {
    fontSize: '2.2rem',
    color: '#F1E9DA'
  }
});

const Experiences = () => {
  const {
    mainSection,
    innerContainer,
    sectionHeading,
    experienceContainer,
    jobInfo,
    jobLocation,
    jobTitle,
    jobDates,
    jobDesc
  } = useStyles();
  return (
    <section className={mainSection}>
      <div className={innerContainer}>
        <h2 className={sectionHeading}>Experiences</h2>
        {workHistory.map((job, id) => (
          <div key={id} className={experienceContainer}>
            <div className={jobInfo}>
              <h3 className={jobLocation}>{job.location}</h3>
              <h4 className={jobTitle}>{job.title}</h4>
              <span className={jobDates}>{job.date}</span>
            </div>
            <div className={jobDesc}>
              {job.description.map((desc, id) => (
                <Fragment>
                  <p key={id}>{desc}</p>
                  <br />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
