import React, { useContext } from 'react';

// styling
import ThemeContext from '../lib/ThemeContext';
import styled from 'styled-components';
import { theme } from '../constants/themes';

// Components
import ContactCard from './Heading/ContactCard';
import Particles from './Heading/Particles';

const HeadingSection = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: ${theme.global.maxPageWidth};
`;

const ParticleWrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 750px;
  overflow: hidden;
`;

const Intro = styled.span`
  font-size: 1.8rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 200px;
`;

const Name = styled.h1`
  font-size: 7rem;
  margin: 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 220px;
`;

const Desc = styled.span`
  font-size: 2.8rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 300px;
`;

const UnderHeading = styled.p`
  font-size: 2rem;
  margin: 100px 0px 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 325px;
  width: 30%;
`;

const Heading = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <HeadingSection>
      <ParticleWrapper>
        <Particles darkMode={darkMode} />
      </ParticleWrapper>
      <ContactCard />
      <Intro>Hello, my name is</Intro>
      <Name>Christopher Ksiazak</Name>
      <Desc>& I like to build things</Desc>
      <UnderHeading>
        I am a (mostly) self taught developer from El Paso, Texas. Apart from
        English and Spanish, I also speak HTML, CSS, and Javascript.
      </UnderHeading>
    </HeadingSection>
  );
};

export default Heading;
