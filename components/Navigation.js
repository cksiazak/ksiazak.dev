import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavData = [
  { title: 'Uses', href: '/uses' },
  { title: 'Contact', href: '/contact' }
];

const NavSection = styled.section`
  width: 100%;
  box-shadow: 0px 2px 10px -2px rgba(42, 42, 42, 0.6);
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

const Navigation = () => {
  return (
    <NavSection>
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
            <li>🌙</li>
            <li>☀️</li>
          </ul>
        </Nav>
      </InnerNav>
    </NavSection>
  );
};

export default Navigation;
