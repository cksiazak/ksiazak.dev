import React from 'react';

import styled from 'styled-components';

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: orange;
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.6);
  width: 100%;
`;

const AboutMe = () => {
  return <AboutMeSection style={{ padding: '500px' }}>About Me</AboutMeSection>;
};

export default AboutMe;
