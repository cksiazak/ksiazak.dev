import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../styles/animate.css";
import "../styles/navigation.scss";

const Navigation = ({ hamburgerState, mobileNavControl, isMobile }) => {
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

  // mapping nav links
  const navigationLinks = ["About", "Experience", "Projects", "Contact"];

  return !isMobile ? (
    <DesktopNav isMounted={isMounted} navigationLinks={navigationLinks} />
  ) : (
    <MobileNav
      isMounted={isMounted}
      navigationLinks={navigationLinks}
      isMobile={isMobile}
      hamburgerState={hamburgerState}
      mobileNavControl={mobileNavControl}
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
                <p style={{ transitionDelay: "25ms" }}>CK</p>
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

const MobileNav = ({
  isMounted,
  navigationLinks,
  hamburgerState,
  mobileNavControl
}) => {
  return (
    <nav className={`nav-mobile-view ${hamburgerState && "nav-mobile-active"}`}>
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
                  <p style={{ transitionDelay: "50ms" }}>CK</p>
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
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className="navigation-links-mobile">
          <div className="nav-links-mobile-container">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
