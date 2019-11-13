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
  isMobile,
  hamburgerState,
  mobileNavControl
}) => {
  const [menuMounted, setMenuMounted] = useState(false);

  // deactivate hamburger menu if page is no longer mobile
  useEffect(() => {
    if (!isMobile) {
      setMenuMounted(false);
    }
  }, [isMobile]);

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

        <div
          className={
            !hamburgerState ? "nav-links-mobile" : "nav-links-mobile-active"
          }
        >
          <TransitionGroup component={null}>
            {hamburgerState &&
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
