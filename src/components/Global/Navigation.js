import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';

// navigation data
import { navData } from '../../data/navData';

const useStyles = createUseStyles({
  mainNav: {
    display: 'flex',
    justifyContent: 'center'
  },
  innerNavContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0px',
    fontSize: '1.8rem'
  },
  listStyle: {
    width: '40%',
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
        <Link to='/' className={linkStyle}>
          {'<CK/>'}
        </Link>
        <ul className={listStyle}>
          <li>
            <Link to='/' className={linkStyle}>
              Home
            </Link>
          </li>
          {navData.map((link, i) => (
            <li key={i}>
              <Link to={link.url} className={linkStyle} title={link.title}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
