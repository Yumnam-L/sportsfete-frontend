import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import OTPScreen from "./Otp";
import ReviewDetails from "./ReviewDetails/index";
import ConfirmRegister from "./ConfirmRegister/index";
import SuccesfullyRegistered from "./Registered/index";

const PrivateRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //loading is only for the review details and confirm register pages, since they fetch the details from local storage - would break if loaded before useEffect finishes.
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("participantDetails")) {
      let details = JSON.parse(localStorage.getItem("participantDetails"));
      if (details.isMarathonRegistered === true) {
        if (location.pathname !== "/successfullyRegistered")
          navigate("/successfullyRegistered");
      } else if (details.isProfileConfimed === true) {
        if (location.pathname !== "/confirmRegister")
          navigate("/confirmRegister");
        // else setIsLoading(false);
      } else {
        if (location.pathname !== "/reviewDetails")
          navigate("/reviewDetails");
        // else setIsLoading(false);
      }
    } else {
      if (location.pathname !== "/otp" && location.pathname !== "/login")
        navigate("/login");
    }
  }, []);
//   console.log("Path: " + location.pathname);
  return (
    <div>
      <>
        {location.pathname === "/login" && <Login />}
        {location.pathname === "/otp" && <OTPScreen />}
        {location.pathname === "/reviewDetails" && <ReviewDetails />}
        {location.pathname === "/confirmRegister" && <ConfirmRegister />}
        {location.pathname === "/successfullyRegistered" && (
          <SuccesfullyRegistered />
        )}
      </>
    </div>
  );
};

export default PrivateRoute;
