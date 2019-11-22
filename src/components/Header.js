import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Typist from 'react-typist';

import '../styles/header.scss';
import '../styles/animate.css';

const Header = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [transitionComplete, setTrasitionComplete] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTypingComplete(true);
      setTimeout(() => {
        setTrasitionComplete(true);
      }, 400);
    }, 5400);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="header-main">
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
              from HTML, CSS, and Javascript, I also speak English and Spanish.
            </p>
          </CSSTransition>
        )}
      </TransitionGroup>
      <TransitionGroup component={null}>
        {transitionComplete && (
          <CSSTransition
            in={transitionComplete}
            classNames="fadeup"
            timeout={3000}
          >
            <a href="#" className="header-contact">
              Do you want to know more?
            </a>
          </CSSTransition>
        )}
      </TransitionGroup>
    </header>
  );
};

export default Header;
