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
    width: '85%',
    flexDirection: 'column',
    '@media (max-width: 1400px)': {
      width: '80%'
    },
    '@media (max-width: 1300px)': {
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
    alignItems: 'center',
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
    height: '500px',
    marginRight: '100px',
    borderRadius: '25px 0px',
    '@media (max-width: 1650px)': {
      height: '400px'
    },
    '@media (max-width: 1500px)': {
      marginRight: '75px'
    },
    '@media (max-width: 1400px)': {
      marginRight: '25px'
    },
    '@media (max-width: 1000px)': {
      height: '300px'
    },
    '@media (max-width: 1300px)': {
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
              I am proficient in HTML, CSS and Javascript including various
              technologies such as React, Redux, and Nodejs. In my last position
              as a Software Engineer at E-Dealer Direct, I served as part of the
              core engineering team working along side the CTO and VP of
              Engineering in developing our product. I produced prototypes, had
              discussions regarding the architecture, and built out not only the
              React views, but also the API using Ruby on Rails and
              Elasticsearch, both of which I learned on the fly. Unfortunately,
              due to COVID-19 affecting the market, I was downsized as the
              company scaled back operations.
            </p>
            <br />
            <p>
              Currently, I attend Lambda School for Full Stack Web Development.
              I've worked with various, distributed teams of different skill
              sets (ranging from Data Science to UX design, as well as other
              developers) and planned through various projects.
            </p>
          </div>
          <img className={selfImage} src={avatar} alt='Christopher Ksiazak' />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
