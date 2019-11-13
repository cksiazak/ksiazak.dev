import React, { useState, useEffect } from "react";
import Helmet from "../components/mainHelmet";
import useMedia from "use-media";

import Navigation from "../components/Navigation";
import Header from "../components/Header";

import "../styles/global.scss";
import "../styles/index.scss";

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
    <div id="app" className={`app-container ${hamburgerOpen && "mobile-drawer-open"}`}>
      <Helmet />
      <Navigation
        hamburgerState={hamburgerOpen}
        mobileNavControl={mobileNavControl}
        isMobile={isMobile}
      />
      <div className="container">
        <Header />
      </div>
    </div>
  );
};

export default Index;
