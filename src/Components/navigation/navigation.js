import React from 'react';
import Fade from 'react-reveal/Fade';

import './navigation.scss';

const FadeExample = () => {
  return (
    <div>
      <ul className="test">
        <Fade top delay={200}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={400}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={600}>
          <h1>React Reveal</h1>
        </Fade>
        <Fade top delay={800}>
          <h1>React Reveal</h1>
        </Fade>
      </ul>
    </div>
  );
};

export default FadeExample;
