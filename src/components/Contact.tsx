import styled from "styled-components"

import { useTheme, theme } from "../theme"

import * as ga from "../../lib/ga"

const Section = styled.section`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactHead = styled.h2<{
  isDarkMode: boolean
}>`
  font-size: 3.75rem;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

  @media (max-width: 600px) {
    font-size: 2.25rem;
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

const Email = styled.a<{
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

  @media (max-width: 450px) {
    font-size: 1.75rem;
  }

  &:hover {
    border: 2px solid ${theme.lightMode.linkHover};
    background: ${theme.lightMode.linkHover};
    color: ${({ isDarkMode }) => (isDarkMode ? theme.isDarkMode.background : "white")};
  }
`

const Contact = () => {
  const { isDarkMode } = useTheme()

  const handleEmailClick = () =>
    ga.event({
      action: "Click on email button",
      params: { section: "Contact" },
    })

  return (
    <Section>
      <ContactHead isDarkMode={isDarkMode}>Thanks for visiting!</ContactHead>
      <Sentence isDarkMode={isDarkMode}>
        I'm actively in search of my next position where I can grow and develop (literally) something great. Feel free to reach out!
      </Sentence>
      <Email
        onClick={handleEmailClick}
        href="mailto:cksiazak@gmail.com"
        title="email"
        isDarkMode={isDarkMode}
      >
        Get in touch
      </Email>
    </Section>
  )
}

export default Contact
