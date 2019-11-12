import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/animate.css';
import '../styles/navigation.scss';

const Navigation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition in={isMounted} classNames="fadedown" timeout={3000}>
              <p style={{ transitionDelay: '50ms' }}>CK</p>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      {/* <DesktopNav isMounted={isMounted} /> */}
      <HamburgerIcon />
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

const HamburgerIcon = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <div>
      <div
        onClick={clickHandler}
        class={!active ? `hamburger` : `hamburger is-active`}
        id="hamburger"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  );
};

export default Navigation;
