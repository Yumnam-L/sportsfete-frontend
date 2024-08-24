import React from "react";
import { useLocation } from "react-router-dom";

const withNavbar = (WrappedComponent, hideNavbarRoutes) => {
  const WrappedWithNavbar = (props) => {
    const location = useLocation();
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    return shouldHideNavbar ? null : <WrappedComponent {...props} />;
  };
  return WrappedWithNavbar;
};

export default withNavbar;
