import React from 'react';
import styled from 'styled-components';

const HeaderMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 150px 0px 225px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;

  span {
    font-size: 2.4rem;
  }

  h1 {
    font-size: 8.2rem;
  }

  p {
    font-size: '5rem';
  }
`;

const ShortBio = styled.p`
  fontsize: 2.5rem;
  width: 85%;
  lineheight: 125%;
`;

const Header = () => {
  return (
    <HeaderMain>
      <HeaderContainer>
        <TopHeading>
          <span>Hello, my name is </span>
          <h1>Christopher Ksiazak</h1>
          <p>& I like to build things.</p>
        </TopHeading>

        <ShortBio>
          I am a (mostly) self taught developer from El Paso, Texas. Apart from
          English and Spanish, I also speak HTML, CSS, and Javascript.
        </ShortBio>
      </HeaderContainer>
    </HeaderMain>
  );
};

export default Header;
