import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

import './navigation.scss';

const Navigation = () => {
  return (
    <div>
      <ul className="test">
        <Fade top delay={400}>
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            React Reveal
          </Link>
        </Fade>
        <Fade top delay={600}>
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            React Reveal
          </Link>
        </Fade>
        <Fade top delay={800}>
          <Link
            activeClass="active"
            to="test3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            React Reveal
          </Link>
        </Fade>
        <Fade top delay={1000}>
          <Link
            activeClass="active"
            to="test4"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            React Reveal
          </Link>
        </Fade>
      </ul>
    </div>
  );
};

export default Navigation;
