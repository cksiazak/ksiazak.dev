import React from 'react';
import Typist from 'react-typist';

const HeaderTypist = () => {
  return (
    <Typist cursor={{ show: false }} startDelay={1200} avgTypingDelay={55}>
      <span className="initial-hello">
        Hello, <Typist.Delay ms={250} /> my name is
      </span>
      <h1 className="header-name">Christopher Ksiazak</h1>
      <Typist.Delay ms={250} />
      <span className="short-bio">& I like to build things.</span>
    </Typist>
  );
};

export default HeaderTypist;