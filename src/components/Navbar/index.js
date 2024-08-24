import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TDrawer from "../TDrawer";
import Avatar from "@mui/material/Avatar";
import ProfileIcon from "./icon.png";

function Navbar() {
  const [details, setDetails] = useState({
    name: "",
    rollNo: "",
    department: "",
    ismarathon: false,
    sft: 0,
    events: [],
    departmentCoordinator: false,
    eventCoordinator: false,
  });
  const [token, setToken] = useState("");

  const handleProfile = async (token) => {
    try {
      const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
      const response = await fetch(BASE_URL + "api/getProfile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          name: data.user.name,
          department: data.user.department,
          rollNo: data.user.rollNo,
          sft: data.user.sft,
          isMarathonRegistered: data.user.isMarathonRegistered,
          events: data.user.events,
          departmentCoordinator: data.user.privileges.departmentCoordinator,
          eventCoordinator: data.user.privileges.eventCoordinator,
        };
      } else {
        return {
          success: false,
          message: data.message,
        };
      }
    } catch (error) {
      if (error.status === 500 || error.status === 404) {
        return {
          success: false,
          message: "Server Error!, please try again later.",
        };
      }
      if (error.status === 400) {
        return {
          success: false,
          message: "No token",
        };
      }
      return {
        success: false,
        message: "Something went wrong, please try again later.",
      };
    }
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("participantDetails"))) {
      setToken(
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("participantDetails")).token
          : null
      );
    }
  }, []);
  useEffect(() => {
    (async () => {
      const resp = await handleProfile(token);
      if (resp.success) {
        setDetails({
          name: resp.name,
          rollNo: resp.rollNo,
          department: resp.department,
          ismarathon: resp.isMarathonRegistered,
          sft: resp.sft,
          events: resp.events,
          departmentCoordinator: resp.departmentCoordinator,
          eventCoordinator: resp.eventCoordinator,
        });
      } else {
        // console.log(resp.message);
      }
    })();
  }, [token]);
  const location = useLocation();
  const [back, setBack] = useState("0");
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 5;
      if (show) {
        setBack("1");
      } else {
        setBack("0");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  return (
    <Box>
      {isMatch ? <TDrawer isOpen={open} setOpen={setOpen} /> : <></>}
      <AppBar
        position="fixed"
        sx={{
          background:
            back == 1 ? "rgba(20, 20, 20, 0.6)" : "rgba(40, 40, 40, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: 100,
          paddingTop: 1,
          transition: "background 0.3s ease", // Smooth transition when scrolling
        }}
      >
        <Toolbar>
          <Link style={{ flexGrow: 1 }} to="/">
            <Box
              component="img"
              sx={
                !isMatch
                  ? {
                      marginLeft: "4vw",
                      marginTop: "0.5vw",
                      height: 83,
                      width: 83,
                    }
                  : {
                      marginLeft: "2vw",
                      marginTop: "1vw",
                      height: 75,
                      width: 75,
                    }
              }
              alt="logo"
              src={back == 1 ? "image/logo.png" : "image/logo_grey.png"}
            />
          </Link>
          {!isMatch ? (
            <>
              <Stack
                direction={{ sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ marginRight: "2vw" }}
              >
                <LinkItem
                  route="/"
                  back={back}
                  name="Home"
                  location={location.pathname}
                />
                <LinkItem
                  route="/blogs"
                  back={back}
                  name="Blogs"
                  location={location.pathname}
                />
                <LinkItem
                  route="/gallery"
                  back={back}
                  name="Gallery"
                  location={location.pathname}
                />
                <LinkItem
                  route="/sportsEvents"
                  back={back}
                  name="Events"
                  location={location.pathname}
                />
                <LinkItem
                  route="/teams"
                  back={back}
                  name="Teams"
                  location={location.pathname}
                />
                <LinkItem
                  route="/sponsors"
                  back={back}
                  name="Sponsors"
                  location={location.pathname}
                />
                <LinkItem
                  route="/leaderBoardDisplay"
                  back={back}
                  name="Leaderboard"
                  location={location.pathname}
                />
                {/* <LinkItem
                  route="/profile"
                  back={back}
                  name="Profile"
                  location={location.pathname}
                /> */}
                <Link to="/profile">
                  <Avatar
                    src={ProfileIcon} // Use the imported profile icon image
                    alt="Profile Icon"
                    sx={{ width: 40, height: 40 }}
                  />
                </Link>
                {/* <Link
                  to="/playerLeaderboard"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textDecoration: "none",
                        fontFamily: "Poppins",
                        fontWeight: 700,
                      }}
                    >
                      SFL :
                    </Typography>
                    <Avatar
                      src="image/coins.png"
                      sx={{
                        width: "40px",
                        height: "25px",
                        paddingTop: { xs: "10px", sm: "20px", md: "0px" },
                      }}
                    />
                    {details.sft === 0 ? (
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          textDecoration: "none",
                          fontFamily: "Poppins",
                          fontWeight: 700,
                        }}
                      ></Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          textDecoration: "none",
                          fontFamily: "Poppins",
                          fontWeight: 700,
                        }}
                      >
                        {details.sft}
                      </Typography>
                    )}
                  </Box>
                </Link> */}
                {/* <LinkItem route="/contact" back={back} name="Contact" location={location.pathname}/> */}
              </Stack>
            </>
          ) : (
            <>
              <IconButton
                aria-label="menu"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <MenuIcon sx={{ color: back == 1 ? "black" : "white" }} />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

const LinkItem = ({ route, back, name, location }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <NavLink
        to={route}
        onClick={() => window.scrollTo(0, 0)}
        style={({ isActive }) => ({
          color: isActive ? "#17E8EF" : "white", // Use color based only on isActive
          textDecoration: "none",
          fontWeight: "bold",
          paddingBottom: "2px",
          fontSize: "18px",
        })}
      >
        {name}
      </NavLink>

      <span
        style={
          location === route
            ? back == 1
              ? {
                  borderBottom: `3px solid #000000`,
                  width: "75%",
                  transition: "0.5s",
                }
              : {
                  borderBottom: `3px solid #17E8EF`,
                  width: "75%",
                  transition: "0.5s",
                }
            : { borderBottom: "none", width: "0%" }
        }
      ></span>
    </div>
  );
};
