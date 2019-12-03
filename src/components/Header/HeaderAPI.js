import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const HeaderAPI = ({ transitionComplete }) => {
  return (
    <TransitionGroup component={null}>
      {transitionComplete && (
        <CSSTransition
          in={transitionComplete}
          classNames="fadeup"
          timeout={3000}
        >
          <div className="header-api">
            <p>
              In lieu of scrolling, you may also send a GET request to{' '}
              <a href="https://api.ksiazak.dev">https://api.ksiazak.dev</a>
            </p>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default HeaderAPI;
