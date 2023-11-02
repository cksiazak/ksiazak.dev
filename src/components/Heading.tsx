import styled from "styled-components"

// styling
import { useTheme } from "../theme"

// Components
import ContactCard from "./Heading/ContactCard"
import Particles from "./Heading/Particles"

const HeadingSection = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
`

const Intro = styled.span<{
  isDarkMode: boolean
}>`
  font-size: 3rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 200px;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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
`

const Name = styled.h1<{
  isDarkMode: boolean
}>`
  font-size: 7rem;
  margin: 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 235px;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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
`

const Desc = styled.span<{
  isDarkMode: boolean
}>`
  font-size: 3.8rem;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 320px;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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
`

const UnderHeading = styled.p<{
  isDarkMode: boolean
}>`
  font-size: 3rem;
  margin: 100px 0px 0px;
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 325px;
  width: 40%;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

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
`

const Heading = () => {
  const { isDarkMode } = useTheme()

  return (
    <HeadingSection>
      <Particles />
      <ContactCard />
      <Intro isDarkMode={isDarkMode}>Hello, my name is</Intro>
      <Name isDarkMode={isDarkMode}>Christopher Ksiazak</Name>
      <Desc isDarkMode={isDarkMode}>& I like to build things</Desc>
      <UnderHeading isDarkMode={isDarkMode}>
        I am a (mostly) self taught developer from El Paso, Texas.
        Apart from English and Spanish, I also speak Typescript.
      </UnderHeading>
    </HeadingSection>
  )
}

export default Heading
