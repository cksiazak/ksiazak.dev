import React, { useContext } from 'react';

// stylings
import styled from 'styled-components';
import { theme } from '../constants/themes';
import ThemeContext from '../lib/ThemeContext';

import * as Content from '../data/aboutme/about-me.mdx';

const AboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) =>
    props.darkMode
      ? 'rgba(90,92,106,1)'
      : 'linear-gradient(90deg, #d53369 0%, #daae51 100%)'};
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.8);
  padding: 50px 0px 75px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.global.pageWidth};

  @media (max-width: 1000px) {
    width: 85%;
  }
  @media (max-width: 850px) {
    align-items: center;
  }
`;

const SectionHeading = styled.h2`
  font-size: 3.5rem;
  margin: 0px;
  margin-bottom: 25px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    align-items: flex-start;
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const AboutInfo = styled.div`
  width: 60%;
  font-size: 1.75rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 850px) {
    width: 80%;
    font-size: 2rem;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    font-size: 1.6rem;
  }
`;

const SelfImage = styled.img`
  width: auto;
  height: 325px;
  border-radius: 25px 0px;
  margin-right: 100px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);

  @media (max-width: 1300px) {
    margin-right: 50px;
  }
  @media (max-width: 1200px) {
    margin-right: 0px;
  }
  @media (max-width: 1000px) {
    height: 275px;
  }
  @media (max-width: 850px) {
    margin: 50px 0px;
  }
  @media (max-width: 575px) {
    height: 200px;
    margin: 0px 0px 25px;
  }
`;

const TechList = styled.ul`
  column-count: 3;
  list-style: inside square;
  font-size: 1.6rem;
  width: 60%;
  padding: 0px;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
  @media (max-width: 350px) {
    font-size: 1.1rem;
  }
`;

const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <AboutMeSection darkMode={darkMode}>
      <InnerContainer>
        <SectionHeading darkMode={darkMode}>About Me</SectionHeading>
        <SectionContent>
          <AboutInfo darkMode={darkMode}>
            <Content.default />
            <TechList>
              {Content.meta.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </TechList>
          </AboutInfo>
          <SelfImage src={Content.meta.image} alt="Picture of myself"/>
        </SectionContent>
      </InnerContainer>
    </AboutMeSection>
  );
};

export default AboutMe;
