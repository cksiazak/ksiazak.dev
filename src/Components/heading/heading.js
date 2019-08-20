import React from 'react';
import Typist from 'react-typist';

import './heading.scss';

const heading = () => {
  return (
    <section className="heading">
      <Typist cursor={{ show: false }}>
        <Typist.Delay ms={2000} />
        <span className="opening-hello">
          Hi,
          <Typist.Delay ms={600} /> my name is
        </span>
        <h1>Christopher Ksiazak</h1>
        <Typist.Delay ms={500} />
        <h2>And I like to build things</h2>
      </Typist>
    </section>
  );
};

export default heading;
