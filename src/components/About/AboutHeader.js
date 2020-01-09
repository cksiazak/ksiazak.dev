import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  AboutHeaderMain: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '150px 0px 225px',
    '@media (max-width: 650px)': {
      padding: '175px 0px'
    }
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    '@media (max-width: 1500px)': {
      width: '65%'
    },
    '@media (max-width: 1100px)': {
      width: '75%'
    },
    '@media (max-width: 950px)': {
      width: '90%'
    }
  },
  topHeading: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '75px',
    '@media (max-width: 600px)': {
      textAlign: 'center'
    },

    '& span': {
      fontSize: '2.4rem',
      color: '#BBC3C0',
      fontFamily: "'Lobster', cursive",
      '@media (max-width: 800px)': {
        fontSize: '2rem'
      }
    },
    '& h1': {
      fontSize: '8.2rem',
      color: '#B41F15',
      fontFamily: "'Courgette', cursive",
      '@media (max-width: 800px)': {
        fontSize: '6.2rem'
      }
    },
    '& p': {
      fontSize: '5rem',
      color: '#CACAC9',
      fontFamily: "'Lobster', cursive",
      '@media (max-width: 800px)': {
        fontSize: '3.5rem'
      }
    }
  },
  shortBio: {
    fontSize: '2.5rem',
    width: '85%',
    lineHeight: '125%',
    color: '#CACAC9',
    fontFamily: "'Rubik', sans-serif",
    '@media (max-width: 800px)': {
      fontSize: '2rem'
    },
    '@media (max-width: 600px)': {
      width: '95%',
      textAlign: 'center'
    }
  }
});

const Header = () => {
  const {
    AboutHeaderMain,
    headingContainer,
    topHeading,
    shortBio
  } = useStyles();
  return (
    <section className={AboutHeaderMain}>
      <div className={headingContainer}>
        <div className={topHeading}>
          <span>Hello, my name is </span>
          <h1>Christopher Ksiazak</h1>
          <p>& I like to build things.</p>
        </div>

        <p className={shortBio}>
          I am a (mostly) self taught developer from El Paso, Texas. Apart from
          English and Spanish, I also speak HTML, CSS, and Javascript.
        </p>
      </div>
    </section>
  );
};

export default Header;
