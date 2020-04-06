import React from 'react';

// stylings
import styled from 'styled-components';

import * as Content from '../data/aboutme/about-me.mdx';
import { theme } from '../constants/themes';

const AboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);;
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.6);
  padding: 50px 0px 75px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.global.pageWidth};
`;

const SectionHeading = styled.h2`
  font-size: 3.5rem;
  margin: 0px;
  margin-bottom: 25px;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutInfo = styled.div`
  width: 60%;
  font-size: 1.75rem;
`;

const SelfImage = styled.img`
  width: auto;
  height: 325px;
  border-radius: 25px 0px;
  margin-right: 100px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
`;

const TechList = styled.ul`
  column-count: 3;
  list-style: inside square;
  font-size: 1.6rem;
  width: 60%;
  padding: 0px;
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <InnerContainer>
        <SectionHeading>About Me</SectionHeading>
        <SectionContent>
          <AboutInfo>
            <Content.default />
            <TechList>
              {Content.meta.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </TechList>
          </AboutInfo>
          <SelfImage src={Content.meta.image} />
        </SectionContent>
      </InnerContainer>
    </AboutMeSection>
  );
};

export default AboutMe;
