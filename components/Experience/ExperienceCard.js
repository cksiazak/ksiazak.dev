import React from 'react';

import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  margin: 50px 0px 0px;
  width: 70%;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);

  p {
    font-size: 1.6rem;
    margin: 10px 0px;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    font-size: 2.5rem;
  }

  span {
    font-size: 1.8rem;
  }
`;

const ExperienceCard = ({ work: { default: WorkContent, meta } }) => {
  return (
    <CardWrapper>
      <MetaWrapper>
        <h3>{meta.location}</h3>
        <span>{meta.position}</span>
        <span>{meta.dates}</span>
      </MetaWrapper>
      <WorkContent />
    </CardWrapper>
  );
};

export default ExperienceCard;
