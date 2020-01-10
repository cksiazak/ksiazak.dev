import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  heading: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '175px 0px 250px',
    background: 'linear-gradient(135deg, #540D6E, #FC7A57)',
    color: 'white',
    '@media (max-width: 650px)': {
      padding: '150px 0px'
    }
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    fontFamily: "'Rubik', sans-serif",
    '@media (max-width:1250px )': {
      width: '75%'
    },
    '@media (max-width:850px )': {
      width: '90%'
    }
  },
  headingTitle: {
    fontSize: '4.5rem',
    fontFamily: "'Lobster', cursive",
    '@media (max-width:850px )': {
      fontSize: '4rem'
    },
    '@media (max-width:600px )': {
      fontSize: '3.5rem'
    }
  },
  headingInfo: {
    fontSize: '3.25rem',
    lineHeight: '125%',
    padding: '10px 0px',
    fontFamily: "'Monda', sans-serif",
    '@media (max-width:850px )': {
      fontSize: '2.75rem'
    },
    '@media (max-width:600px )': {
      fontSize: '2.25rem'
    }
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
          technologies, moving toward a common goal. I enjoy helping and
          learning where I can.
        </p>
      </div>
    </section>
  );
};

export default Header;
