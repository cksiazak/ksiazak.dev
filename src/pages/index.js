import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Helmet from 'react-helmet';

// component data
import { navData } from '../data/navData';

// Reset CSS
import '../styles/global.css';

const useStyles = createUseStyles({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      flexDirection: 'column'
    }
  },
  pageHeadingUpper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    '@media (max-width: 900px)': {
      position: 'relative',
      borderBottom: '2px solid white'
    }
  },
  headingContainer: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#0F0326',
    padding: '10px 25px',
    marginTop: '25px',
    borderRadius: '50px',
    '@media (max-width: 900px)': {
      marginTop: '0px'
    },
    '@media (max-width: 300px)': {
      textAlign: 'center'
    }
  },
  mainHeading: {
    fontSize: '4rem',
    paddingBottom: '10px',
    fontFamily: "'Permanent Marker', cursive",
    '@media (max-width: 900px)': {
      fontSize: '4rem'
    },
    '@media (max-width: 600px)': {
      fontSize: '3rem'
    },
    '@media (max-width: 450px)': {
      fontSize: '2.5rem'
    },
    '@media (max-width: 400px)': {
      fontSize: '2.25rem'
    }
  },
  underHeading: {
    fontSize: '2rem',
    fontFamily: "'Courgette', cursive",
    '@media (max-width: 600px)': {
      fontSize: '1.75rem'
    },
    '@media (max-width: 450px)': {
      fontSize: '1.5rem'
    }
  },
  navContainer: {
    width: '100%',
    height: '100%'
  },
  navigationList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    background:
      'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
    '@media (max-width: 900px)': {
      flexDirection: 'column'
    }
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
    },
    '@media (max-width: 1300px)': {
      padding: '0px 35px'
    },
    '@media (max-width: 1000px)': {
      padding: '0px 20px'
    },
    '@media (max-width: 900px)': {
      height: '22vh',
      width: '100%'
    }
  },
  pageHeading: {
    fontSize: '4.5rem',
    fontFamily: "'Lobster', cursive",
    '@media (max-width: 1300px)': {
      fontSize: '4rem'
    },
    '@media (max-width: 1000px)': {
      fontSize: '3.5rem'
    },
    '@media (max-width: 600px)': {
      fontSize: '2.75rem'
    }
  },
  pageBreak: {
    display: 'block',
    border: 'none',
    borderBottom: '3px solid rgba(199, 204, 219, 0.5)',
    margin: '25px 0px',
    width: '50%',
    transition: '.4s',
    '@media (max-width: 1000px)': {
      width: '75%'
    },
    '@media (max-width: 900px)': {
      margin: '15px 0px',
      width: '40%'
    }
  },
  linkDesc: {
    fontSize: '2.2rem',
    textAlign: 'center',
    lineHeight: '125%',
    fontFamily: "'Courgette', cursive",
    '@media (max-width: 1300px)': {
      fontSize: '2rem'
    },
    '@media (max-width: 600px)': {
      fontSize: '1.75rem'
    },
    '@media (max-width: 450px)': {
      fontSize: '1.5rem'
    }
  }
});

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
      <Helmet>
        <meta charSet='utf-8' />
        <title>Christopher Ksiazak</title>
        <meta
          name='description'
          content='A personal developer portfolio and art piece by Christopher Ksiazak'
        />
      </Helmet>
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
                duration={0.75}
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
