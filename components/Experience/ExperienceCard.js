import React, { useContext } from 'react';

import styled from 'styled-components';
import ThemeContext from '../../lib/ThemeContext';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background: ${(props) =>
    props.darkMode
      ? 'rgba(118,124,163,1)'
      : 'linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)'};
  margin: 50px 0px 0px;
  width: 60%;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  color: ${(props) => (props.darkMode ? 'white' : 'black')};


  ul {
    padding: 0px;
  }
  p {
    font-size: 2.2rem;
    margin: 10px 0px;

    @media (max-width: 1800px) {
      font-size: 2rem;
    }

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }

    @media (max-width: 500px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    font-size: 2.75rem;

    @media (max-width: 800px) {
      font-size: 2.5rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  span {
    font-size: 2.2rem;

    @media (max-width: 800px) {
      font-size: 2rem;
    }

    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }
`;

const ExperienceCard = ({ work: { default: WorkContent, meta } }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <CardWrapper darkMode={darkMode}>
      <MetaWrapper darkMode={darkMode}>
        <h3>{meta.location}</h3>
        <span>{meta.position}</span>
        <span>{meta.dates}</span>
      </MetaWrapper>
      <WorkContent />
    </CardWrapper>
  );
};

export default ExperienceCard;
