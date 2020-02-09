import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavSection = styled.section`
  width: 100%;
`;

const NavWrapper = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ListWrap = styled.ul`
  display: flex;
`;

const Navigation = () => {
  return (
    <NavSection>
      <NavWrapper>
        <Link href='/'>
          <a>{`<CK/>`}</a>
        </Link>
        <ListWrap>
          <li>/uses</li>
          <li>/about</li>
          <li>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </li>
        </ListWrap>
      </NavWrapper>
    </NavSection>
  );
};

export default Navigation;
