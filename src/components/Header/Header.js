import React, { useEffect, useState } from 'react';

import Typist from './HeaderTypist';
import HeaderDesc from './HeaderDesc';
import HeaderAPI from './HeaderAPI';

import '../../styles/header.scss';
import '../../styles/animate.css';

const Header = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [transitionComplete, setTrasitionComplete] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTypingComplete(true);
      setTimeout(() => {
        setTrasitionComplete(true);
      }, 400);
    }, 5400);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="header-main">
      <Typist />
      <HeaderDesc typingComplete={typingComplete} />
      <HeaderAPI transitionComplete={transitionComplete} />
    </header>
  );
};

export default Header;
