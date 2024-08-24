import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme, useMediaQuery, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
function scrollTo(sectionname) {
  const element = document.getElementById(sectionname);
  element.scrollIntoView({ behavior: "smooth" });
}
export default function TDrawer({ isOpen, setOpen }) {
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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      open={isOpen}
      onClose={() => {
        setOpen(false);
      }}
      anchor={"right"}
      PaperProps={{
        sx: {
          backgroundColor: "#50566E",
          color: "red",
          height: "62%",
          maxHeight: "500px",
          [theme.breakpoints.down("sm")]: {
            height: "90%",
          },
        },
      }}
    >
      <Box sx={{}}>
        <Toolbar />
        <Toolbar />
        <List sx={{ padding: 4 }}>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/blogs"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              Blogs
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/gallery"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              Gallery
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/induction"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              }}
            >
              Inductions
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/sponsors"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              }}
            >
              Sponsors
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/leaderBoardDisplay"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              Leaderboard
            </NavLink>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/profile"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "20px",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              Profile
            </NavLink>
          </ListItem>
          {/* <ListItem sx={{ justifyContent: "center" }}>
            <NavLink
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
                setOpen(false);
              }}
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: Primary,
                fontFamily: "Poppins",
                lineHeight: "32px",
                paddingTop: 2,
                paddingBottom: 3,
              }}
            >
              Contact
            </NavLink>
          </ListItem> */}
          {/* <ListItem>
            <NavLink
              to="/playerLeaderboard"
              style={({ isActive }) => ({
                color: isActive ? "#2B338B" : "#FFFFFF",
                textDecoration: "none",
                fontFamily: "Poppins",
                lineHeight: "24px",
                paddingTop: 1,
              })}
            >
              {details.sft === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: { xs: "30px", sm: "30px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      lineHeight: "24px",
                      paddingTop: 1,
                    }}
                  >
                    SFL :
                  </Typography>
                  <Avatar
                    src="image/coins.png"
                    sx={{
                      width: "40px",
                      height: "25px",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: { xs: "10px", sm: "10px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    SFL :
                  </Typography>
                  <Avatar
                    src="image/coins.png"
                    sx={{
                      width: "40px",
                      height: "25px",
                    }}
                  />
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
                </Box>
              )}
            </NavLink>
          </ListItem> */}
        </List>
      </Box>
    </Drawer>
  );
}
