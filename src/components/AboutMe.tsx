import styled from 'styled-components'

// stylings
import { useTheme, theme } from '../theme'

import * as Content from '../data/aboutme/about-me.mdx'

const AboutMeSection = styled.section<{
  isDarkMode: boolean
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ isDarkMode }) =>
    isDarkMode
      ? 'rgba(90,92,106,1)'
      : 'linear-gradient(90deg, #d53369 0%, #daae51 100%)'};
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.8);
  padding: 50px 0px 75px;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.global.pageWidth};

  @media (max-width: 1000px) {
    width: 85%;
    align-items: center;
  }
`

const SectionHeading = styled.h2<{
  isDarkMode: boolean
}>`
  font-size: 3.75rem;
  margin: 0px;
  margin-bottom: 25px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};

  @media (max-width: 1800px) {
    font-size: 3.25rem;
  }
`

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    align-items: flex-start;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const AboutInfo = styled.div<{
  isDarkMode: boolean
}>`
  width: 60%;
  font-size: 2.2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};

  @media (max-width: 1800px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    font-size: 1.6rem;
  }
`

const SelfImage = styled.img`
  width: auto;
  height: 350px;
  border-radius: 25px 0px;
  margin-right: 100px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  margin-bottom: 100px;

  @media (max-width: 1600px) {
    margin-right: 50px;
    height: 375px;
  }

  @media (max-width: 1400px) {
    margin-right: 25px;
  }

  @media (max-width: 1200px) {
    margin-right: 0px;
  }

  @media (max-width: 1000px) {
    height: 350px;
    margin: 25px 0px;
  }

  @media (max-width: 575px) {
    height: 200px;
    margin: 0px 0px 25px;
  }
`

const TechList = styled.ul`
  column-count: 3;
  list-style: none;
  font-size: 2rem;
  width: 80%;
  padding: 0px;

  @media (max-width: 1800px) {
    font-size: 1.75rem;
  }

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`

type ContectData = {
  meta: {
    tech: string[]
    image: string
  }
}

const AboutMe = () => {
  const { isDarkMode } = useTheme()

  return (
    <AboutMeSection isDarkMode={isDarkMode}>
      <InnerContainer>
        <SectionHeading isDarkMode={isDarkMode}>About Me</SectionHeading>
        <SectionContent>
          <AboutInfo isDarkMode={isDarkMode}>
            <Content.default />
            <TechList>
              {(Content as unknown as ContectData).meta.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </TechList>
          </AboutInfo>
          <SelfImage
            src={(Content as unknown as ContectData).meta.image}
            alt='Picture of myself'
          />
        </SectionContent>
      </InnerContainer>
    </AboutMeSection>
  )
}

export default AboutMe
