import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/animate.css';
import '../styles/navigation.scss';

const Navigation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navigationLinks = ['About', 'Experience', 'Projects', 'Contact'];

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
      <div className="nav-links">
        <TransitionGroup component={null}>
          {isMounted &&
            navigationLinks.map((link, i) => (
              <CSSTransition
                in={isMounted}
                classNames="fadedown"
                timeout={3000}
              >
                <p style={{ transitionDelay: `${i * 150}ms` }}>{link}</p>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </nav>
  );
};

export default Navigation;
