import React from 'react';
import { createUseStyles } from 'react-jss';
import avatar from '../../assets/avatar.jpg';

const useStyles = createUseStyles({
  mainSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '125px 0px',
    '@media (max-width: 950px)': {
      padding: '75px 0px'
    }
  },
  innerSection: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    '@media (max-width: 1400px)': {
      width: '80%'
    },
    '@media (max-width: 1200px)': {
      width: '90%'
    },
    '@media (max-width: 950px)': {
      alignItems: 'center'
    },
    '@media (max-width: 650px)': {
      width: '95%'
    }
  },
  aboutHeading: {
    fontSize: '3.5rem',
    color: '#F0AE4E',
    fontFamily: "'Permanent Marker', cursive"
  },
  outerInfoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '40px 0px',
    alignItems: 'flex-end',
    '@media (max-width: 950px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      padding: '50px 0px 0px'
    }
  },
  textContainer: {
    fontSize: '2.25rem',
    lineHeight: '125%',
    width: '60%',
    color: '#F7EDDB',
    fontFamily: "'Rubik', sans-serif",
    '@media (max-width: 950px)': {
      padding: '50px 0px 0px',
      width: '75%'
    },
    '@media (max-width: 750px)': {
      fontSize: '1.75rem'
    },
    '@media (max-width: 650px)': {
      width: '90%'
    }
  },
  selfImage: {
    width: 'auto',
    height: '350px',
    marginRight: '100px',
    borderRadius: '25px 0px',
    '@media (max-width: 1400px)': {
      marginRight: '50px'
    },
    '@media (max-width: 1200px)': {
      marginRight: '0px'
    },
    '@media (max-width: 750px)': {
      height: '250px'
    }
  }
});

const AboutMain = () => {
  const {
    mainSection,
    innerSection,
    aboutHeading,
    outerInfoContainer,
    textContainer,
    selfImage
  } = useStyles();
  return (
    <section className={mainSection}>
      <div className={innerSection}>
        <h2 className={aboutHeading}>About Me</h2>
        <div className={outerInfoContainer}>
          <div className={textContainer}>
            <p>
              Welcome! I'm Chris, a developer born and raised in El Paso, TX. I
              enjoy learning new technologies and applying that knowledge in
              designing and creating web applications.
            </p>
            <br />
            <p>
              Currently, I serve as a Project Coordinator at C3i Solutions, I'd
 say I'm about 95% autonomous as I collaborate with our client across 
various time zones. Before this, I attended the University of Texas at 
El Paso (UTEP). I realized that Electrical Engineering wasn't a topic 
that I quite enjoyed, so I joined the Full Stack Web Development program 
at Lambda School, which has provided me valuable experience in application 
development with distributed teams.
            </p>
          </div>
          <img className={selfImage} src={avatar} alt='Christopher Ksiazak' />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
