import React, { useState, useEffect, useContext } from 'react';

// styling
import styled from 'styled-components';
import ThemeContext from '../../lib/ThemeContext';
import { theme } from '../../constants/themes';

// components
import ThemeSwitcher from './Navigation/ThemeSwitcher';
import NavLink from './Navigation/NavLink';

const NavSection = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: ${(props) =>
    props.scrolled ? '0px 2px 10px -2px rgba(42, 42, 42, 0.6)' : 'none'};
  background: ${(props) => {
    if (!props.scrolled) {
      return 'transparent';
    } else if (props.scrolled) {
      return props.darkMode ? '#403F4C' : theme.lightMode.background;
    }
  }};
  transition: ${theme.global.transitionTime};
  z-index: 10;
`;

const InnerNav = styled.div`
  width: ${theme.global.pageWidth};
  max-width: ${theme.global.maxPageWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  padding: 15px 0px;

  a {
    text-decoration: none;
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    transition: ${theme.global.transitionTime};
    &:hover {
      color: ${theme.lightMode.linkHover};
    }
  }

  @media (max-width: 1650px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1350px) {
    width: 80%;
  }

  @media (max-width: 1250px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

const Nav = styled.nav`
  width: 10%;

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;

    li {
      cursor: pointer;
    }
  }
`;

const Navigation = () => {
  const { darkMode, themeController } = useContext(ThemeContext);
  const [awayFromTop, setAwayFromTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const scrollListener = () => {
    const position = window.pageYOffset;
    position > 20 ? setAwayFromTop(true) : setAwayFromTop(false);
  };

  return (
    <NavSection scrolled={awayFromTop} darkMode={darkMode}>
      <InnerNav darkMode={darkMode}>
        <NavLink title='<CK/>' href='/' />
        <Nav>
          <ul>
            {/* <NavLink href='/about-me' title='/About Me' /> */}
            {/* <NavLink href='/contact' title='/Contact' /> */}
            {/* <NavLink href='/uses' title='/Uses' /> */}
            {/* <NavLink href='/blog' title='/Blog' /> */}
            {darkMode ? (
              <ThemeSwitcher icon='🌙' themeController={themeController} />
            ) : (
              <ThemeSwitcher icon='☀️' themeController={themeController} />
            )}
          </ul>
        </Nav>
      </InnerNav>
    </NavSection>
  );
};

export default Navigation;
