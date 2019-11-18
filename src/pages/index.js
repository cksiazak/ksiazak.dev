import React, { useState, useEffect } from 'react';
import Helmet from '../components/mainHelmet';
import useMedia from 'use-media';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';

import Footer from '../components/Footer';

import '../styles/global.scss';
import '../styles/index.scss';

const Index = () => {
  // Handling hamburger/mobile view
  const isMobile = useMedia({ maxWidth: 700 });

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const mobileNavControl = () => {
    !hamburgerOpen ? setHamburgerOpen(true) : setHamburgerOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setHamburgerOpen(false);
    }
  }, [isMobile]);

  return (
    <div id="app" className={`app-container`}>
      <Helmet />
      <Navigation
        hamburgerState={hamburgerOpen}
        mobileNavControl={mobileNavControl}
        isMobile={isMobile}
      />
      <div
        className={`component-container ${hamburgerOpen &&
          'mobile-container-effect mobile-drawer-open'}`}
      >
        <div className="content-container">
          <Header />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
