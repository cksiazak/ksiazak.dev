import React, { useEffect, useState } from 'react';

import Typist from './HeaderTypist';
import HeaderDesc from './HeaderDesc';

import '../../styles/header.scss';
import '../../styles/animate.css';

const Header = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTypingComplete(true);
    }, 4900);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="header-main">
      <Typist />
      <HeaderDesc typingComplete={typingComplete} />
    </header>
  );
};

export default Header;
