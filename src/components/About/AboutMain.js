import React from 'react';
import { createUseStyles } from 'react-jss';
import avatar from '../../assets/avatar.jpg';

const useStyles = createUseStyles({
  mainSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '150px 0px'
  },
  innerSection: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column'
  },
  aboutHeading: {
    fontSize: '3.5rem'
  },
  outerInfoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '50px 0px',
    alignItems: 'center'
  },
  textContainer: {
    fontSize: '2rem',
    lineHeight: '125%',
    width: '55%'
  },
  selfImage: {
    width: 'auto',
    height: '350px',
    marginRight: '100px',
    borderRadius: '25px 0px'
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
        <h2 className={aboutHeading}>01. About Me</h2>
        <div className={outerInfoContainer}>
          <div className={textContainer}>
            <p>
              Welcome! I'm Chris, a developer born and raised in El Paso, TX. I
              enjoy learning new technologies and applying that knowledge in
              designing and creating web applications.
            </p>
            <br />
            <p>
              Currently, I serve as a Project Coordinator at C3i Solutions. I
              work in collaboration with our client, Castlight Health. Before
              this, I attended the University of Texas at El Paso (UTEP). I
              realized that Electrical Engineering wasn't a topic that I
              enjoyed. I joined the Full Stack Web Development program at Lambda
              School, which has provided me valuable experience in application
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
