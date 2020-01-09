import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  heading: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '175px 0px 250px',
    background: 'linear-gradient(135deg, #540D6E, #FC7A57)',
    color: 'white'
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    fontFamily: "'Permanent Marker', cursive"
  },
  headingTitle: {
    fontSize: '4.5rem'
  },
  headingInfo: {
    fontSize: '3.25rem',
    lineHeight: '125%',
    padding: '10px 0px'
  }
});

const Header = () => {
  const { heading, headingContainer, headingTitle, headingInfo } = useStyles();
  return (
    <section className={heading}>
      <div className={headingContainer}>
        <h1 className={headingTitle}>Before developing,</h1>
        <p className={headingInfo}>
          most of my experience comes from the support side of things, but I
          have worked with several groups, learning new techniques and
          technologies, contributing toward a common goal. I enjoy helping and
          learning where I can.
        </p>
      </div>
    </section>
  );
};

export default Header;
