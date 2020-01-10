import React from 'react';
import Navigation from '../components/Global/Navigation';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  _404Section: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    alignItems: 'center'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    color: '#E9E6FF',
    fontFamily: "'Rubik', sans-serif"
  },
  _404Heading: {
    fontSize: '4rem'
  },
  emoji: {
    paddingLeft: '5px'
  },
  underText: {
    padding: '25px 0px',
    fontSize: '3.5rem',
    '& a': {
      textDecoration: 'none',
      color: '#993955',
      transition: '0.3s',
      '&:hover': {
        color: '#F0AE4E'
      }
    }
  }
});

const ErrorPage = () => {
  const {
    _404Section,
    innerContainer,
    _404Heading,
    emoji,
    underText
  } = useStyles();
  return (
    <section className={_404Section}>
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <div className={innerContainer}>
        <h2 className={_404Heading}>
          404! This page doesn't exist
          <span role='img' aria-label='sad-emoji' className={emoji}>
            😟
          </span>
        </h2>
        <p className={underText}>
          <AniLink paintDrip hex='#0F0326' duration={0.75} to='/'>
            Click here
          </AniLink>{' '}
          to return home.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
