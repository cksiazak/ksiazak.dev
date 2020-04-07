import React, { useContext } from 'react';

import styled from 'styled-components';
import { theme } from '../constants/themes';
import ThemeContext from '../lib/ThemeContext';

const Section = styled.section`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHead = styled.h2`
  font-size: 3.75rem;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

const Sentence = styled.p`
  width: 40%;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 25px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};

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

const Email = styled.a`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  text-decoration: none;
  font-size: 2.5rem;
  padding: 15px 20px;
  border: 2px solid ${(props) => (props.darkMode ? 'white' : 'black')};
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
    color: ${(props) => (props.darkMode ? theme.darkMode.background : 'white')};
  }
`;

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Section>
      <ContactHead darkMode={darkMode}>Thanks for visiting!</ContactHead>
      <Sentence darkMode={darkMode}>
        I'm currently available and actively looking for positions. Fee free to
        reach out to me, even if you just want to talk. I'll get back to you as
        soon as possible.
      </Sentence>

      <Email href='mailto:cksiazak@gmail.com' title='email' darkMode={darkMode}>
        Get in touch
      </Email>
    </Section>
  );
};

export default Contact;
