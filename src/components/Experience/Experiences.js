import React, { Fragment } from 'react';
import { workHistory } from '../../data/experienceData';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: '75px 0px',
    '@media (max-width: 650px)': {
      padding: '50px 0px'
    }
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '65%',
    '@media (max-width: 1100px)': {
      width: '80%'
    },
    '@media (max-width: 800px)': {
      width: '90%'
    }
  },
  sectionHeading: {
    fontSize: '4rem',
    padding: '0px 0px 50px',
    color: '#E9E6FF',
    fontFamily: "'Permanent Marker', cursive",
    '@media (max-width: 650px)': {
      padding: '0px 0px 25px'
    }
  },
  experienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '25px 0px',
    padding: '20px 30px',
    background: '#993955',
    borderRadius: '25px 0px',
    transition: '.4s',
    position: 'relative',
    zIndex: '0',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, .4)',
    '&:nth-child(even)': {
      borderRadius: '0px 25px'
    }
  },
  jobInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '25px',
    fontFamily: "'Monda', sans-serif"
  },
  jobLocation: {
    fontSize: '3.2rem',
    color: '#10294C',
    '@media (max-width: 800px)': {
      fontSize: '2.75rem'
    }
  },
  jobTitle: {
    fontSize: '2.2rem',
    padding: '3px 0px',
    color: '#E9E6FF',
    '@media (max-width: 800px)': {
      fontSize: '1.8rem'
    }
  },
  jobDates: {
    fontSize: '2.2rem',
    color: '#E9E6FF',
    '@media (max-width: 800px)': {
      fontSize: '1.8rem'
    }
  },
  jobDesc: {
    fontSize: '2.2rem',
    color: '#22223B',
    fontFamily: "'Monda', sans-serif",
    '@media (max-width: 800px)': {
      fontSize: '1.8rem'
    }
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
                <Fragment key={id}>
                  <p>{desc}</p>
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
