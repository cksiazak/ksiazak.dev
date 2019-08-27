import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import './heading.scss';

const heading = () => {
  return (
    <section className="heading section-padding">
      <Fade bottom delay={700}>
        <span className="opening-hello">Hi, my name is</span>
      </Fade>
      <Fade bottom delay={1200}>
        <h1>Christopher Ksiazak</h1>
      </Fade>
      <Fade bottom delay={1600}>
        <h2>& I love to build things.</h2>
      </Fade>
      <Fade bottom delay={2000}>
        <p className="heading-information">I'm a (mostly) self taught web developer based out of El Paso, TX. I have enjoy long walks on the beach as well as expanding my abilities, all while working to provide complete solutions</p>
      </Fade>
      <Fade bottom delay={2600}>
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
