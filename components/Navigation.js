import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ThemeContext from '../lib/ThemeContext';

const NavSection = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: ${props =>
    props.scrolled
      ? '0px 2px 10px -2px rgba(42, 42, 42, 0.6)'
      : 'none'};
  background: white;
  height: 65px;
`;
const InnerNav = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: black;
    transition: 0.2s;
    &:hover {
      color: red;
    }
  }
`;

const Nav = styled.nav`
  width: 30%;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    li {
      cursor: pointer;
    }
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
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

  const NavData = [
    { title: 'Uses', href: '/uses' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <NavSection scrolled={awayFromTop}>
      <InnerNav>
        <Link href='/'>
          <a>{`<CK/>`}</a>
        </Link>
        <Nav>
          <ul>
            {NavData.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <a title={link.title}>/ {link.title}</a>
                </Link>
              </li>
            ))}
            {darkMode ? (
              <li>
                <ThemeButton type='button' onClick={themeController}>
                  🌙
                </ThemeButton>
              </li>
            ) : (
              <li>
                <ThemeButton type='button' onClick={themeController}>
                  ☀️
                </ThemeButton>
              </li>
            )}
          </ul>
        </Nav>
      </InnerNav>
    </NavSection>
  );
};

export default Navigation;
