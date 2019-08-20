import React from 'react';
import Typist from 'react-typist';

const heading = () => {
  return (
    <div>
      <Typist cursor={{ show: false }}>
        <Typist.Delay ms={1000} />
        <p>Hello,<Typist.Delay ms={800} /> my name is</p>
        <h1>Christopher Ksiazak</h1>
        <Typist.Delay ms={500} />
        <h2>And I like to build things</h2>
      </Typist>
    </div>
  );
};

export default heading;
