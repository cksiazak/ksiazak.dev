import styled from "styled-components"

// themes
import { useTheme, theme } from "../theme"

import * as ga from "../../lib/ga"

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

const SectionHeader = styled.h2<{
  isDarkMode: boolean
}>`
  font-size: 3.75rem;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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

const Sentence = styled.p<{
  isDarkMode: boolean
}>`
  width: 40%;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 25px;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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
`

const GithubLink = styled.a<{
  isDarkMode: boolean
}>`
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  text-decoration: none;
  font-size: 2.5rem;
  padding: 15px 20px;
  border: 2px solid ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
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
    color: ${({ isDarkMode }) => (isDarkMode ? theme.isDarkMode.background : "white")};
  }
`

const Projects = () => {
  const { isDarkMode } = useTheme()

  const navigateToGithub = () =>
    ga.event({
      action: "Navigate to github",
      params: { section: "Projects" },
    })

  return (
    <ProjectSection>
      <SectionHeader isDarkMode={isDarkMode}>Things I've Built</SectionHeader>
      <InnerProjectWrapper>
        <Sentence isDarkMode={isDarkMode}>
          I've been pretty busy over the last few years (what with COVID and all),
          that the projects I had before didn't exactly meet anywhere near my current abilities.
          So I removed them all and am planning to create bigger and better things.
        </Sentence>
        <GithubLink
          onClick={navigateToGithub}
          href="https://github.com/cksiazak"
          title="Cksiazak GitHub"
          isDarkMode={isDarkMode}
        >
          Check out my GitHub anyway?
        </GithubLink>
      </InnerProjectWrapper>
    </ProjectSection>
  )
}

export default Projects
