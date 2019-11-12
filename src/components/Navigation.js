import React, { useEffect, useState, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useMedia from "use-media";

import mobileNavContext from "../context/navMenuContext";

import "../styles/animate.css";
import "../styles/navigation.scss";

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
  const navigationLinks = ["About", "Experience", "Projects", "Contact"];

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

const MobileNav = ({ isMounted, navigationLinks, isMobile }) => {
  const mobileContext = useContext(mobileNavContext);
  const { mobileMenu, openMobileNav, closeMobileNav } = mobileContext;

  const [menuMounted, setMenuMounted] = useState(false);
  const clickHandler = () => {
    !mobileMenu ? openMobileNav() : closeMobileNav();
  };

  // deactivate hamburger menu if page is no longer mobile
  useEffect(() => {
    if (!isMobile) {
      closeMobileNav();
      setMenuMounted(false);
    }
  }, [isMobile, closeMobileNav]);

  return (
    <nav className={`nav-mobile-view ${mobileMenu && "nav-mobile-active"}`}>
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
                  onClick={clickHandler}
                  className={!mobileMenu ? `hamburger` : `hamburger is-active`}
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
            !mobileMenu ? "nav-links-mobile" : "nav-links-mobile-active"
          }
        >
          <TransitionGroup component={null}>
            {mobileMenu &&
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
