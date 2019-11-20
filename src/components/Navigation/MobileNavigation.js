import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../styles/animate.css';
import '../../styles/navigation.scss';

const MobileNav = ({
  isMounted,
  navigationLinks,
  hamburgerState,
  mobileNavControl
}) => {
  return (
    <nav className="nav-mobile-view">
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
                  onClick={mobileNavControl}
                  className={
                    !hamburgerState ? `hamburger` : `hamburger is-active`
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
      </div>
      <div
        className={`navigation-links-mobile  ${hamburgerState &&
          'nav-mobile-active'}`}
      >
        {navigationLinks.map((link, i) => (
          <p
            key={i}
            className="nav-links-list-mobile"
            onClick={mobileNavControl}
          >
            {link}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;