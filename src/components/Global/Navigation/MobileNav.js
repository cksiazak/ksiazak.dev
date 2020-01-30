import React, { useState } from 'react';
import HambugerMenu from './HamburgerMenu';
import { createUseStyles } from 'react-jss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import { navData } from '../../../data/navData';

const useStyles = createUseStyles({
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100%',
    background: '#E9E6FF',
    boxShadow: '2px 2px 1px rgba(42, 42, 42, 0.8)'
  },
  innerNav: {
    display: 'flex',
    width: '100%',
    boxShadow: '1px 1px 3px 1px rgba(42, 42, 42, 0.8)',
    justifyContent: 'center',
    background: '#E9E6FF',
    position: 'relative',
    zIndex: '2'
  },
  navTopper: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: '4',
    background: '#E9E6FF'
  },
  logo: {
    textDecoration: 'none',
    fontSize: '2rem',
    color: 'black',
    transition: '.2s',
    fontFamily: "'Courgette', cursive"
  },
  slidingMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: '0',
    width: '100%',
    marginTop: '-275px',
    transition: '0.4s'
  },
  menuLinks: {
    fontSize: '2rem',
    width: '100%',
    textAlign: 'center',
    padding: '15px 0px',
    textDecoration: 'none',
    color: 'black',
    transition: '.2s',
    fontFamily: "'Courgette', cursive",
    '&:hover': {
      color: '#D81E5B',
      background: '#22223B'
    }
  },
  menuOpen: {
    marginTop: '0px'
  }
});

const MobileNav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerHelper = () => {
    !hamburgerOpen ? setHamburgerOpen(true) : setHamburgerOpen(false);
  };
  const hamburgerHelperKey = e => {
    if (e.keyCode === 13) {
      hamburgerHelper();
    }
  };

  const {
    mobileNav,
    innerNav,
    logo,
    slidingMenu,
    menuLinks,
    navTopper,
    menuOpen
  } = useStyles();
  return (
    <TransitionPortal>
      <nav className={mobileNav}>
        <div className={innerNav}>
          <div className={navTopper}>
            <AniLink
              paintDrip
              hex='#0F0326'
              duration={0.75}
              to='/'
              className={logo}
            >
              {'<CK/>'}
            </AniLink>
            <HambugerMenu
              hamburgerOpen={hamburgerOpen}
              hamburgerHelper={hamburgerHelper}
              hamburgerHelperKey={hamburgerHelperKey}
            />
          </div>
        </div>
        <div
          className={
            !hamburgerOpen ? slidingMenu : `${slidingMenu} ${menuOpen}`
          }
        >
          <AniLink
            paintDrip
            hex='#0F0326'
            duration={0.75}
            className={menuLinks}
            to='/'
          >
            Home
          </AniLink>
          {navData.map((link, i) => (
            <AniLink
              key={i}
              cover
              to={link.url}
              duration={0.75}
              direction='right'
              title={link.title}
              className={menuLinks}
              onClick={hamburgerHelper}
            >
              {link.title}
            </AniLink>
          ))}
        </div>
      </nav>
    </TransitionPortal>
  );
};

export default MobileNav;
