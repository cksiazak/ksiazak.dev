import React, { useContext } from 'react'

// stylings
import styled from 'styled-components'
import { theme } from '../constants/themes'

// components
import ExperienceCard from './Experience/ExperienceCard'

// data
import * as AriannaSuisse from '../data/experiences/arianna-suisse.mdx'
import * as EDealer from '../data/experiences/e-dealer-direct.mdx'
import * as C3i from '../data/experiences/c3i-solutions.mdx'
import ThemeContext from '../lib/ThemeContext'

const WorkSection = styled.section`
  padding: 75px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    padding: 50px 0px 30px;
  }
`

const SectionHeading = styled.h2`
  font-size: 3.75rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  @media (max-width: 900px) {
    margin: 0px;
  }
`

const InnerWrap = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const Experience = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <WorkSection>
      <SectionHeading darkMode={darkMode}>Experiences</SectionHeading>
      <InnerWrap>
        <ExperienceCard work={AriannaSuisse} />
        <ExperienceCard work={EDealer} />
        <ExperienceCard work={C3i} />
      </InnerWrap>
    </WorkSection>
  )
}

export default Experience
