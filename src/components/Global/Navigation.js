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
    background: '#E9E6FF'
  },
  innerNavContainer: {
    width: '85%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.8rem'
  },
  listStyle: {
    width: '45%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkStyle: {
    textDecoration: 'none',
    padding: '20px 0px',
    color: 'black',
    transition: '.3s',
    '&:hover': {
      color: '#D81E5B'
    }
  }
});

const Navigation = () => {
  const { mainNav, innerNavContainer, listStyle, linkStyle } = useStyles();

  return (
    <nav className={mainNav}>
      <div className={innerNavContainer}>
        <AniLink
          paintDrip
          hex='#0F0326'
          duration={0.75}
          to='/'
          className={linkStyle}
        >
          {'<CK/>'}
        </AniLink>
        <ul className={listStyle}>
          <li>
            <AniLink
              paintDrip
              hex='#0F0326'
              duration={0.75}
              to='/'
              className={linkStyle}
            >
              Home
            </AniLink>
          </li>
          {navData.map((link, i) => (
            <li key={i}>
              <AniLink
                cover
                to={link.url}
                duration={0.75}
                direction='right'
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
