import React from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';

import './heading.scss';

const heading = () => {
  return (
    <section className="heading">
      <Typist cursor={{ show: false }} avgTypingDelay={60}>
        <Typist.Delay ms={1000} />
        <span className="opening-hello">
          Hi
          <Typist.Delay ms={500} />, my name is
        </span>
        <h1>Christopher Ksiazak</h1>
        <Typist.Delay ms={300} />
        <h2>& I love to build things.</h2>
      </Typist>
      <Fade bottom delay={5500} >
        <p className="heading-information">Enter Information Here</p>
      </Fade>
    </section>
  );
};

export default heading;
