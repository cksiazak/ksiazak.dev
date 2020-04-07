import React, { useContext } from 'react';

// styling
import ThemeContext from '../lib/ThemeContext';
import styled from 'styled-components';

// Components
import ContactCard from './Heading/ContactCard';
import Particles from './Heading/Particles';

const HeadingSection = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
`;

const ParticleWrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 750px;
  overflow: hidden;

  div {
    height: 100%;
  }

  @media (max-width: 450px) {
    height: 675px;
  }
`;

const Intro = styled.span`
  font-size: 3rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 200px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1650px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1100px) {
    left: 7.25%;
  }
  @media (max-width: 800px) {
    top: 150px;
  }
  @media (max-width: 600px) {
    left: 5%;
  }
  @media (max-width: 400px) {
    top: 160px;
    font-size: 1.65rem;
  }
`;

const Name = styled.h1`
  font-size: 7rem;
  margin: 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 235px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1650px) {
    font-size: 6rem;
  }
  @media (max-width: 1100px) {
    left: 7.25%;
  }
  @media (max-width: 1000px) {
    font-size: 5.5rem;
  }
  @media (max-width: 800px) {
    top: 180px;
  }
  @media (max-width: 600px) {
    left: 5%;
  }
  @media (max-width: 550px) {
    font-size: 4.5rem;
  }
  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
  @media (max-width: 400px) {
    font-size: 3.25rem;
  }
`;

const Desc = styled.span`
  font-size: 3.8rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 320px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1650px) {
    font-size: 3.4rem;
    top: 310px;
  }

  @media (max-width: 1100px) {
    left: 7.25%;
  }

  @media (max-width: 1000px) {
    top: 290px;
  }

  @media (max-width: 800px) {
    top: 240px;
  }

  @media (max-width: 600px) {
    left: 5%;
  }

  @media (max-width: 550px) {
    top: 230px;
  }

  @media (max-width: 450px) {
    top: 215px;
  }

  @media (max-width: 400px) {
    font-size: 2.5rem;
    top: 218px;
  }
`;

const UnderHeading = styled.p`
  font-size: 3rem;
  margin: 100px 0px 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 325px;
  width: 40%;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1650px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1100px) {
    left: 7.25%;
  }

  @media (max-width: 1000px) {
    width: 45%;
    font-size: 1.75rem;
  }

  @media (max-width: 800px) {
    top: 275px;
    margin: 50px 0px 0px;
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 60%;
    left: 5%;
  }

  @media (max-width: 550px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    top: 225px;
    width: 85%;
    font-size: 1.6rem;
  }
`;

const Heading = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <HeadingSection>
      <ParticleWrapper>
        <Particles darkMode={darkMode} />
      </ParticleWrapper>
      <ContactCard />
      <Intro darkMode={darkMode}>Hello, my name is</Intro>
      <Name darkMode={darkMode}>Christopher Ksiazak</Name>
      <Desc darkMode={darkMode}>& I like to build things</Desc>
      <UnderHeading darkMode={darkMode}>
        I am a (mostly) self taught developer from El Paso, Texas. Apart from
        English and Spanish, I also speak HTML, CSS, and Javascript.
      </UnderHeading>
    </HeadingSection>
  );
};

export default Heading;
