import React from 'react';
import useMedia from 'use-media';

import DesktopNav from './Navigation/DesktopNav';
import MobileNav from './Navigation/MobileNav';
const Navigation = () => {
  const isMobile = useMedia({ maxWidth: 950 });

  if (!isMobile) {
    return <DesktopNav />;
  } else {
    return <MobileNav />;
  }
};

export default Navigation;
