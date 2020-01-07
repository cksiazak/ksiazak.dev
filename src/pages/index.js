import React, { Fragment } from 'react';
import Head from '../components/Global/Head';
import { createUseStyles } from 'react-jss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// component data
import { navData } from '../data/navData';

// Reset CSS
import '../styles/global.css';

const useStyles = createUseStyles({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  pageHeadingUpper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed'
  },
  headingContainer: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#0F0326',
    padding: '10px 25px',
    marginTop: '25px',
    borderRadius: '50px'
  },
  mainHeading: {
    fontSize: '4rem',
    paddingBottom: '10px',
    fontFamily: "'Fugaz One', cursive"
  },
  underHeading: {
    fontSize: '2rem',
    fontFamily: "'Courgette', cursive"
  },
  navContainer: {
    width: '100%',
    height: '100%'
  },
  navigationList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    background: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
  },
  navItem: {
    height: '100vh',
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 60px',
    textDecoration: 'none',
    background: '#0F0326',
    transition: '.4s',
    color: '#F4F4F8',

    '&:hover': {
      background: 'transparent',
      color: '#0F0326',

      '& hr': {
        borderBottom: '3px solid #2A324B'
      }
    }
  },
  pageHeading: {
    fontSize: '4.5rem',
    fontFamily: "'Lobster', cursive"
  },
  pageBreak: {
    display: 'block',
    border: 'none',
    borderBottom: '3px solid rgba(199, 204, 219, 0.5)',
    margin: '25px 0px',
    width: '50%',
    transition: '.4s'
  },
  linkDesc: {
    fontSize: '2.2rem',
    textAlign: 'center',
    lineHeight: '125%',
    fontFamily: "'Courgette', cursive"
  }
});

const metadata = {
  title: 'Christopher Ksiazak',
  desc: 'A personal developer portfolio and art piece by Christopher Ksiazak'
};

const Index = () => {
  const {
    pageContainer,
    pageHeadingUpper,
    headingContainer,
    mainHeading,
    underHeading,
    navContainer,
    navigationList,
    navItem,
    pageHeading,
    pageBreak,
    linkDesc
  } = useStyles();

  return (
    <Fragment>
      <Head metadata={metadata} />
      <div className={pageContainer}>
        <div className={pageHeadingUpper}>
          <div className={headingContainer}>
            <h1 className={mainHeading}>Christopher Ksiazak</h1>
            <span className={underHeading}>Web Developer</span>
          </div>
        </div>
        <nav className={navContainer}>
          <div className={navigationList}>
            {navData.map((page, i) => (
              <AniLink
                paintDrip
                duration={1}
                hex='#663399'
                to={page.url}
                key={i}
                className={navItem}
                title={page.title}
              >
                <h2 className={pageHeading}>{page.title}</h2>
                <hr className={pageBreak} />
                <p className={linkDesc}>{page.desc}</p>
              </AniLink>
            ))}
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Index;
