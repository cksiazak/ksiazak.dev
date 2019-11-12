import React from 'react';
import Typist from 'react-typist';

import '../styles/header.scss';

const Header = () => {
  return (
    <div className="header-main">
      <Typist cursor={{ show: false }} startDelay={1200} avgTypingDelay={55}>
        <span className="initial-hello">
          Hello, <Typist.Delay ms={400} /> my name is
        </span>
        <h1 className="header-name">Christopher Ksiazak</h1>
        <Typist.Delay ms={400} />
        <span className="short-bio">& I like to build things.</span>
      </Typist>
    </div>
  );
};

export default Header;
