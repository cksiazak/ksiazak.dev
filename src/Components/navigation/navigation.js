import React from 'react';
import Fade from 'react-reveal/Fade';
import * as Scroll from 'react-scroll';

import './navigation.scss';

const Navigation = () => {
  return (
    <div>
      <ul className="test">
        <Fade top delay={400}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={600}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={800}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={1000}>
          <h1>React Reveal</h1>
        </Fade>
      </ul>
    </div>
  );
};

export default Navigation;
