import React from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import './heading.scss';

const heading = () => {
  return (
    <section className="heading">
      <Typist cursor={{ show: false }} avgTypingDelay={60}>
        <Typist.Delay ms={1000} />
        <span className="opening-hello">
          Hi
          <Typist.Delay ms={200} />, my name is
        </span>
        <h1>Christopher Ksiazak</h1>
        <Typist.Delay ms={300} />
        <h2>& I love to build things.</h2>
      </Typist>
      <Fade bottom delay={5200}>
        <p className="heading-information">Enter Information Here</p>
      </Fade>
      <Fade bottom delay={5600} >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="page-btn"
        >
          Contact Me
        </Link>
      </Fade>
    </section>
  );
};

export default heading;
