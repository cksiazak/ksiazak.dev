import React from 'react';
import { createUseStyles } from 'react-jss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// navigation data
import { navData } from '../../data/navData';

const useStyles = createUseStyles({
  mainNav: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100%',
    background: 'whitesmoke'
  },
  innerNavContainer: {
    width: '85%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0px',
    fontSize: '1.8rem'
  },
  listStyle: {
    width: '45%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkStyle: {
    textDecoration: 'none'
  }
});

const Navigation = () => {
  const { mainNav, innerNavContainer, listStyle, linkStyle } = useStyles();

  return (
    <nav className={mainNav}>
      <div className={innerNavContainer}>
        <AniLink
          paintDrip
          hex='#663399'
          duration={1}
          to='/'
          className={linkStyle}
        >
          {'<CK/>'}
        </AniLink>
        <ul className={listStyle}>
          <li>
            <AniLink
              paintDrip
              hex='#663399'
              duration={1}
              to='/'
              className={linkStyle}
            >
              00. Home
            </AniLink>
          </li>
          {navData.map((link, i) => (
            <li key={i}>
              <AniLink
                swipe
                left='entry'
                to={link.url}
                className={linkStyle}
                title={link.title}
              >
                {link.title}
              </AniLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
