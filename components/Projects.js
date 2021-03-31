import React, { useContext } from 'react'

// themes
import styled from 'styled-components'
import { theme } from '../constants/themes'
import ThemeContext from '../lib/ThemeContext'

// Components
import ProjectCard from './Projects/ProjectCard'

// Markdown Data
import * as Ksiazakdev from '../data/projects/ksiazak-dev.mdx'
import * as AirBnBPricing from '../data/projects/airbnb-optimal-pricing.mdx'
import * as SongSight from '../data/projects/song-sight.mdx'

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 75px;

  @media (max-width: 900px) {
    padding-top: 50px;
  }
`

const SectionHeader = styled.h2`
  font-size: 3.75rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 900px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

const InnerProjectWrapper = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
`

const Sentence = styled.p`
  width: 40%;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 25px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 1800px) {
    font-size: 2rem;
  }

  @media (max-width: 1500px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
  }
`;

const GithubLink = styled.a`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  text-decoration: none;
  font-size: 2.5rem;
  padding: 15px 20px;
  border: 2px solid ${(props) => (props.darkMode ? 'white' : 'black')};
  text-align: center;
  margin: 5px 0px;
  border-radius: 5px;
  transition: ${theme.global.transitionTime};
  margin-bottom: 4rem;

  @media (max-width: 450px) {
    font-size: 1.75rem;
  }

  &:hover {
    border: 2px solid ${theme.lightMode.linkHover};
    background: ${theme.lightMode.linkHover};
    color: ${(props) => (props.darkMode ? theme.darkMode.background : 'white')};
  }
`;

const Projects = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <ProjectSection>
      <SectionHeader darkMode={darkMode}>Things I've Built</SectionHeader>
      <InnerProjectWrapper>
      <Sentence darkMode={darkMode}>
        I've been pretty busy over the last year that the projects currently listed below don't exactly meet my current abilities. In the meantime, feel free to poke through my github for anything new and upcoming!
      </Sentence>
      <GithubLink href='https://github.com/cksiazak' title='Cksiazak Github' darkMode={darkMode}>
        Onward to Github!
      </GithubLink>
        <ProjectCard project={Ksiazakdev} />
        <ProjectCard project={AirBnBPricing} />
        <ProjectCard project={SongSight} />
      </InnerProjectWrapper>
    </ProjectSection>
  )
}

export default Projects
