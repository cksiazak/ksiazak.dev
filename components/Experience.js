import React from 'react';

// stylings
import styled from 'styled-components';
import { theme } from '../constants/themes';

// components
import ExperienceCard from './Experience/ExperienceCard';

// data
import * as EDealer from '../data/experiences/e-dealer-direct.mdx';
import * as C3i from '../data/experiences/c3i-solutions.mdx';

const WorkSection = styled.section`
  padding: 0px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeading = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 0px;
`;

const InnerWrap = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Experience = () => {
  return (
    <WorkSection>
      <SectionHeading>Experiences</SectionHeading>
      <InnerWrap>
        <ExperienceCard work={EDealer} />
        <ExperienceCard work={C3i} />
      </InnerWrap>
    </WorkSection>
  );
};

export default Experience;
