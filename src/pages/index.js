import React from "react";
import Helmet from "../components/mainHelmet";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

import MobileNavState from "../context/navMenuState";
import "../styles/global.scss";

const index = () => {
  return (
    <MobileNavState>
      <div className="app">
        <Helmet />
        <Navigation />
        <div className="container">
          <Header />
        </div>
      </div>
    </MobileNavState>
  );
};

export default index;
