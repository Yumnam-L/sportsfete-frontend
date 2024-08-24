import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Inductions from "./pages/Inductions";
import Sponsors from "./pages/Sponsors";
// import PlayerLeaderboard from "./pages/PlayerLeaderboard";
// import Login from "./pages/Login";
// import OTPScreen from "./pages/Otp";
// import ReviewDetails from "./pages/ReviewDetails/index";
// import SuccesfullyRegistered from "./pages/Registered/index";
import withNavbar from "./components/NavbarVisible/index";
//import ConfirmRegister from "./pages/ConfirmRegister/index";
import CSV from "./pages/CSV";
import Profile from "./pages/Profile";
import PrivateRoute from "./pages/privateRoute.js";
// import Contact from "./pages/Contact";
import EventDescription from "./pages/EventDescription/index";
import LeaderboardDisplay from "./pages/LeaderboardDisplay/index";
import LeaderboardDescription from "./pages/LeaderboardDescription/index";

import DeptCoordPage from "./pages/DepartmentCoord";
import EventCoordPage from "./pages/EventCoord"
import Teams from "./pages/Teams/index.js";
import SportsEvent from "./pages/SportsEvent/index.js";

function App() {
  const hideNavbarRoutes = [
    "/login",
    "/otp",
    "/reviewDetails",
    "/confirmRegister",
    "/successfullyRegistered",
    "/CSV",
    "/eventDescription",
    "/leaderBoardDisplay",
    "/leaderBoardDescription",
    "/DepartmentCoord",
  ];
  const NavbarWithCondition = withNavbar(Navbar, hideNavbarRoutes);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <NavbarWithCondition />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/induction" element={<Inductions />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sportsEvents" element={<SportsEvent />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<PrivateRoute />} />
          <Route path="/otp" element={<PrivateRoute />} />
          <Route path="/reviewDetails" element={<PrivateRoute />} />
          <Route path="/confirmRegister" element={<PrivateRoute />} />
          <Route path="/successfullyRegistered" element={<PrivateRoute />} />
          <Route path="/CSV" element={<CSV />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventDescription" element={<EventDescription />} />
          <Route path="/leaderBoardDisplay" element={<LeaderboardDisplay />} />
          <Route path="/DepartmentCoord" element={<DeptCoordPage />} />
          <Route path="/EventCoord" element={<EventCoordPage />} />
          <Route
            path="/leaderBoardDescription"
            element={<LeaderboardDescription />}
          />
          {/* <Route path="/playerLeaderboard" element={<PlayerLeaderboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
