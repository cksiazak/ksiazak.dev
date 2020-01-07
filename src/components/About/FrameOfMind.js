import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainFrame: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '75px 0px',
    background: '#AFBC88',
    boxShadow: 'inset 0px 2px 10px 1px rgba(42,42,42,0.4)'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%'
  },
  sectionLogo: {
    fontSize: '4.5rem'
  },
  sectionHeader: {
    fontSize: '3.5rem',
    padding: '15px 0px 25px'
  },
  sectionInfo: {
    fontSize: '2.2rem',
    textAlign: 'center',
    lineHeight: '125%'
  }
});

const FrameOfMind = () => {
  const {
    mainFrame,
    innerContainer,
    sectionLogo,
    sectionHeader,
    sectionInfo
  } = useStyles();
  return (
    <section className={mainFrame}>
      <div className={innerContainer}>
        <GiBrain className={sectionLogo} />
        <h2 className={sectionHeader}>Frame of Mind</h2>

        <p className={sectionInfo}>
          Throughout most of my life, I've grown up in a time where information
          has been readily available at the palm of our hands, and as such, I
          believe that we should take every moment as a learning opportunity.
        </p>
      </div>
    </section>
  );
};

export default FrameOfMind;