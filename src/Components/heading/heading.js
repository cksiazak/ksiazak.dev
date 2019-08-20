import React from 'react';
import Typist from 'react-typist';

const heading = () => {
  return (
    <section>
      <Typist cursor={{ show: false }}>
        <Typist.Delay ms={2000} />
        <span>Hello,<Typist.Delay ms={800} /> my name is</span>
        <h1>Christopher Ksiazak</h1>
        <Typist.Delay ms={500} />
        <h2>And I like to build things</h2>
      </Typist>
    </section>
  );
};

export default heading;
