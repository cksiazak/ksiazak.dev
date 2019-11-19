import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Typist from 'react-typist';

import '../styles/header.scss';
import '../styles/animate.css';

const Header = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTypingComplete(true);
    }, 5400);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="header-main">
      <Typist cursor={{ show: false }} startDelay={1200} avgTypingDelay={55}>
        <span className="initial-hello">
          Hello, <Typist.Delay ms={250} /> my name is
        </span>
        <h1 className="header-name">Christopher Ksiazak</h1>
        <Typist.Delay ms={250} />
        <span className="short-bio">& I like to build things.</span>
      </Typist>
      <TransitionGroup component={null}>
        {typingComplete && (
          <CSSTransition in={typingComplete} classNames="fadeup" timeout={3000}>
            <p className="about-intro">
              I am a (mostly) self taught developer from El Paso, Texas. Apart
              from HTML, CSS, and Javascript, I also speak Enlgish and
              Spanish. I believe in improving oneself by taking every moment
              as a learning opportunity.
            </p>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Header;
