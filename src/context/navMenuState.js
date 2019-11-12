import React, { useReducer } from "react";
import MobileNavContext from "./navMenuContext";
import MobileNavReducer from "./navMenuReducer";

import { MOBILE_NAV_OPEN, MOBILE_NAV_CLOSED } from "./navMenuReducer";

const MobileNavState = props => {
  const initialState = {
    mobileMenu: false
  };

  const [state, dispatch] = useReducer(MobileNavReducer, initialState);

  // open Nav
  const openMobileNav = () => dispatch({ type: MOBILE_NAV_OPEN });

  const closeMobileNav = () => dispatch({ type: MOBILE_NAV_CLOSED });

  return (
    <MobileNavContext.Provider
      value={{
        mobileMenu: state.mobileMenu,
        closeMobileNav,
        openMobileNav
      }}
    >
      {props.children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavState;
