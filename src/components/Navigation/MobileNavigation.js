import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

import '../../styles/animate.css';
import '../../styles/navigation.scss';

const MobileNav = ({
  isMounted,
  navigationLinks,
  hamburgerState,
  mobileNavControl
}) => {
  return (
    <nav className='nav-mobile-view'>
      <div className='nav-container-mobile'>
        <div className='upper-mobile-nav'>
          <div className='nav-logo-mobile'>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition
                  in={isMounted}
                  classNames='fadedown'
                  timeout={3000}
                >
                  <a href='https://ksiazak.dev'>{'<CK>'}</a>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                in={isMounted}
                classNames='fadedown'
                timeout={3000}
              >
                <div
                  onClick={mobileNavControl}
                  className={
                    !hamburgerState ? `hamburger` : `hamburger is-active`
                  }
                  id='hamburger'
                  style={{ transitionDelay: '200ms' }}
                >
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
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
          <Link
            to={link}
            smooth={true}
            key={i}
            className='nav-links-list-mobile'
            onClick={mobileNavControl}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
