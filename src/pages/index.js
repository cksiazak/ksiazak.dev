import React from 'react';
import Helmet from '../components/mainHelmet';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

import '../styles/global.scss';

const index = () => {
  return (
    <div>
      <Helmet />
      <Navigation />
      <div className="container">
        <Header />
      </div>
    </div>
  );
};

export default index;
