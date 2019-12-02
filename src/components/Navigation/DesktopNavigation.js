import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

import '../../styles/animate.css';
import '../../styles/navigation.scss';

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
                <p>CK</p>
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
                  <Link to={link} smooth={true} className="navigation-link">
                    {link}
                  </Link>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
