export const MOBILE_NAV_OPEN = "MOBILE_NAV_OPEN";
export const MOBILE_NAV_CLOSED = "MOBILE_NAV_CLOSED";

export default (state, action) => {
  switch (action.type) {
    case MOBILE_NAV_OPEN:
      return {
        ...state,
        mobileMenu: true
      };
    case MOBILE_NAV_CLOSED:
      return {
        ...state,
        mobileMenu: false
      };
    default:
      return state;
  }
};
