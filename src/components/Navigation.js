import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMedia from 'use-media';

import '../styles/animate.css';
import '../styles/navigation.scss';

const Navigation = () => {
  // check if component mounted
  const [isMounted, setIsMounted] = useState(false);
  // setting component mount status
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handling hamburger/mobile view
  const isMobile = useMedia({ maxWidth: 700 });
  const [hamburgerState, setHamburgerState] = useState(false);
  const hamburgerMenuHandler = () => {
    !hamburgerState ? setHamburgerState(true) : setHamburgerState(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                in={isMounted}
                classNames="fadedown"
                timeout={3000}
              >
                <p style={{ transitionDelay: '50ms' }}>CK</p>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        {!isMobile ? (
          <DesktopNav isMounted={isMounted} />
        ) : (
          <HamburgerIcon
            clickHandler={hamburgerMenuHandler}
            hamburgerState={hamburgerState}
            isMounted={isMounted}
          />
        )}
      </div>
    </nav>
  );
};

const DesktopNav = ({ isMounted }) => {
  const navigationLinks = ['About', 'Experience', 'Projects', 'Contact'];
  return (
    <div className="nav-links-desktop">
      <TransitionGroup component={null}>
        {isMounted &&
          navigationLinks.map((link, i) => (
            <CSSTransition
              in={isMounted}
              classNames="fadedown"
              timeout={3000}
              key={i}
            >
              <p style={{ transitionDelay: `${i * 150}ms` }}>{link}</p>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

const HamburgerIcon = ({ clickHandler, hamburgerState, isMounted }) => {
  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition in={isMounted} classNames="fadedown" timeout={3000}>
          <div
            onClick={clickHandler}
            class={!hamburgerState ? `hamburger` : `hamburger is-active`}
            id="hamburger"
            style={{ transitionDelay: '200ms' }}
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default Navigation;
