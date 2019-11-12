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

  // mapping nav links
  const navigationLinks = ['About', 'Experience', 'Projects', 'Contact'];

  return !isMobile ? (
    <DesktopNav isMounted={isMounted} navigationLinks={navigationLinks} />
  ) : (
    <MobileNav
      isMounted={isMounted}
      navigationLinks={navigationLinks}
      isMobile={isMobile}
    />
  );
};

const DesktopNav = ({ isMounted, navigationLinks }) => {
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
      </div>
    </nav>
  );
};

const MobileNav = ({ isMounted, navigationLinks, isMobile }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const clickHandler = () => {
    !hamburgerOpen ? setHamburgerOpen(true) : setHamburgerOpen(false);
  };

  // deactivate hamburger menu if page is no longer mobile
  useEffect(() => {
    if (!isMobile) {
      setHamburgerOpen(false);
      setMenuMounted(false);
    }
  }, [isMobile]);

  return (
    <nav className={`nav-mobile-view ${hamburgerOpen && 'nav-mobile-active'}`}>
      <div className="nav-container-mobile">
        <div className="upper-mobile-nav">
          <div className="nav-logo-mobile">
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
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                in={isMounted}
                classNames="fadedown"
                timeout={3000}
              >
                <div
                  onClick={clickHandler}
                  className={
                    !hamburgerOpen ? `hamburger` : `hamburger is-active`
                  }
                  id="hamburger"
                  style={{ transitionDelay: '200ms' }}
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div
          className={
            !hamburgerOpen ? 'nav-links-mobile' : 'nav-links-mobile-active'
          }
        >
          <TransitionGroup component={null}>
            {hamburgerOpen &&
              navigationLinks.map((link, i) => (
                <CSSTransition
                  in={menuMounted}
                  classNames="fadedown"
                  timeout={400}
                  key={i}
                >
                  <p style={{ transitionDelay: `${i * 25}ms` }}>{link}</p>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
