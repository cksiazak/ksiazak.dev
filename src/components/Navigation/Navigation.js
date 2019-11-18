import React, { useEffect, useState } from "react";

import DesktopNav from "./DesktopNavigation";
import MobileNav from "./MobileNavigation";

import "../../styles/animate.css";
import "../../styles/navigation.scss";

const Navigation = ({ hamburgerState, mobileNavControl, isMobile }) => {
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

  // mapping nav links
  const navigationLinks = ["About", "Experience", "Projects", "Contact"];

  return !isMobile ? (
    <DesktopNav isMounted={isMounted} navigationLinks={navigationLinks} />
  ) : (
    <MobileNav
      isMounted={isMounted}
      navigationLinks={navigationLinks}
      isMobile={isMobile}
      hamburgerState={hamburgerState}
      mobileNavControl={mobileNavControl}
    />
  );
};

export default Navigation;
