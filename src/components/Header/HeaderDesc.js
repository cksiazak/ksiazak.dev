import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const HederDesc = ({ typingComplete }) => {
  return (
    <TransitionGroup component={null}>
      {typingComplete && (
        <CSSTransition in={typingComplete} classNames="fadeup" timeout={3000}>
          <p className="about-intro">
            I am a (mostly) self taught web developer from El Paso, Texas. Apart
            from HTML, CSS, and Javascript, I also speak English and Spanish.
          </p>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default HederDesc;
