import React from 'react';

// Components
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Heading';

import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Home = () => (
  <div>
    <Navigation />
    <AppWrapper>
      <Header />
    </AppWrapper>
  </div>
);

export default Home;
