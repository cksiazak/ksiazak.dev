import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sectionStyle: {
    padding: '10px 0px',
    background: '#254e70',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  pStyle: {
    fontSize: '1rem',
    fontFamily: "'Rubik', sans-serif",
    color: '#8ee3ef',
    '@media (max-width: 650px)': {
      fontSize: '.75rem',
      textAlign: 'center'
    },
    '@media (max-width: 500px)': {
        width: '60%',
      }
  },
  hrefStyle: {
    color: '#E9E6FF',
    textDecoration: 'none',
    transition: '.3s',
    '&:hover': {
      color: '#da4167'
    }
  }
});

const Credits = () => {
  const { sectionStyle, pStyle, hrefStyle } = useStyles();
  return (
    <section className={sectionStyle}>
      <p className={pStyle}>
        I am not a (full) designer, some of these icons are provided by{' '}
        <a href='https://ionicons.com/' className={hrefStyle}>
          Ionic
        </a>{' '}
        &{' '}
        <a href='https://game-icons.net/' className={hrefStyle}>
          Game Icons
        </a>
      </p>
    </section>
  );
};

export default Credits;
