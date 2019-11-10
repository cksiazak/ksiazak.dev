import React from 'react';
import Helmet from '../components/mainHelmet';
import Navigation from '../components/Navigation';

import '../styles/global.scss';

const index = () => {
  return (
    <div>
      <Helmet />
      <Navigation />
    </div>
  );
};

export default index;
