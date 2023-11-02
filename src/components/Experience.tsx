import styled from "styled-components"

// stylings
import { theme, useTheme } from "../theme"

// components
import ExperienceCard from "./Experience/ExperienceCard"
import type { ExperienceCardProps } from './Experience/ExperienceCard'

// data
import * as Kinsta from '../data/experiences/kinsta.mdx'
import * as PatrickThomas from "../data/experiences/patrick-thomas.mdx"
import * as EDealer from "../data/experiences/e-dealer-direct.mdx"
import * as C3i from "../data/experiences/c3i-solutions.mdx"

const WorkSection = styled.section`
  padding: 75px 0px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 50px 0px 30px;
  }
`

const SectionHeading = styled.h2<{
  isDarkMode: boolean
}>`
  font-size: 3.75rem;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
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
  const { isDarkMode } = useTheme()

  return (
    <WorkSection>
      <SectionHeading isDarkMode={isDarkMode}>Experiences</SectionHeading>
      <InnerWrap>
        <ExperienceCard work={Kinsta as ExperienceCardProps["work"]} />
        <ExperienceCard work={EDealer as ExperienceCardProps["work"]} />
        <ExperienceCard work={PatrickThomas as ExperienceCardProps["work"]} />
        <ExperienceCard work={C3i as ExperienceCardProps["work"]} />
      </InnerWrap>
    </WorkSection>
  )
}

export default Experience
