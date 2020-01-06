import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  AboutHeaderMain: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '150px 0px 225px'
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  topHeading: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '75px',

    '& span': {
      fontSize: '2.4rem'
    },
    '& h1': {
      fontSize: '8.2rem'
    },
    '& p': {
      fontSize: '5rem'
    }
  },
  shortBio: {
    fontSize: '2.5rem',
    width: '90%',
    lineHeight: '125%'
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
