import React, { useEffect, useState, useCallback } from "react";
import "../Gallery/gallery.css";
import { useTheme } from "@material-ui/core/styles";
import {
  galleryTitle,
  titleBig,
  titleMedium,
  titleSmall,
} from "../../utils/UI_Constants";
import { Box, Typography, Card, Button } from "@mui/material";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import LogoutModal from "../../components/Modal/logoutModal";
import LogoutIcon from "@mui/icons-material/Logout";

import "./profile.css";
import Avatar from "@mui/material/Avatar";

function Profile() {
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
      // console.log("SFT: " + resp.sft);
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
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const Navigation = useNavigate();

  const handleButtonClick = useCallback(
    (name) => {
      Navigation("/EventCoord", { state: { item: name } });
    },
    [Navigation]
  );
  // console.log(details.sft);
  const eventItems = details.events.map((event) => (
    <Typography
      variant="h6"
      component="h6"
      sx={{
        color: "#333333",
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "Poppins",
        textAlign: "left",
        paddingTop: "0px",
        paddingLeft: "30px",
        [theme.breakpoints.down("sm")]: {
          fontWeight: 500,
          fontSize: "16px",
        },
      }}
    >
      &bull; {event}
    </Typography>
  ));
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#242328",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "400px",
            height: "500px",
            borderRadius: "12px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: {
              xs: "18vh",
              sm: "18vh",
              md: "18vh",
            },
            marginBottom: "12vh",
            paddingBottom: "5vh",
            backgroundColor: "#ffffff",
            border: "2px solid #808080",
            // overflow: "auto",
            overflowY: "auto",
            [theme.breakpoints.down("sm")]: {
              height: "450px",
              width: "350px",
              borderRadius: "10px",
              // overflow: "auto",
            },
          }}
        >
          <Box
            sx={{
              height: "8vh",
              width: "100%",
              backgroundColor: "#1E509E",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* <Link to="/playerLeaderboard">
              <Avatar
                src="image/coins.png"
                sx={{
                  width: "60px",
                  height: "40px",
                  paddingTop: { xs: "10px", sm: "20px", md: "5px" },
                }}
              />
            </Link>
            <Typography
              sx={{
                paddingTop: { xs: "15px", sm: "25px", md: "10px" },
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {details.sft ? details.sft : ""}
            </Typography> */}
            {details.sft === 0 ? (
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "#f6f6f6",
                  fontSize: {
                    xs: "24px",
                    sm: titleSmall - 20,
                    md: titleSmall - 20,
                  },
                  fontWeight: 900,
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginLeft: { xs: "13vw", sm: "7vw", md: "7.5vw" },
                  paddingTop: {
                    xs: "2vh",
                    sm: "2vh",
                    md: "2vh",
                  },
                }}
              >
                Profile
              </Typography>
            ) : (
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "#f6f6f6",
                  fontSize: {
                    xs: "24px",
                    sm: titleSmall - 20,
                    md: titleSmall - 20,
                  },
                  fontWeight: 900,
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginLeft: { xs: "13vw", sm: "7vw", md: "5.5vw" },
                  paddingTop: {
                    xs: "2vh",
                    sm: "2vh",
                    md: "2vh",
                  },
                }}
              >
                Profile
              </Typography>
            )}
          </Box>

          {token === "" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10vh",
                marginTop: "25vh",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "50%",
                  height: 48,
                  background: "#1254C0",
                  boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </div>
          ) : (
            <>
              <LogoutModal open={modalOpen} setOpen={setModalOpen} />

              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  top: "8px",
                  right: "15px",
                  color: "#ffffff",
                  padding: "5px 10px",
                  borderRadius: "5%",
                  cursor: "pointer",
                  // background: "#17E8EF",
                  fontWeight: 550,
                }}
                className="logoutBtn"
                onClick={() => setModalOpen(true)}
              >
                <LogoutIcon />
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "#333333",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                }}
                className="ProfileInfo"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    alt="logo"
                    src="https://t3.ftcdn.net/jpg/01/79/18/54/240_F_179185400_XxRhsyc0yFyK3A9xDOouAI3Y1512JIDh.jpg"
                    sx={{
                      width: 100,
                      height: 100,
                      border: "1px solid #333333",
                    }}
                  />
                </div>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <span
                    style={{
                      fontSize: "1rem",
                      color: "#808080",
                      paddingRight: "5px",
                    }}
                  >
                    Name{" "}
                  </span>{" "} */}
                  {details.name}{" "}
                </h3>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-10px",
                  }}
                >
                  {/* <span
                    style={{
                      fontSize: "1rem",
                      color: "#808080",
                      paddingRight: "5px",
                    }}
                  >
                    Roll No
                  </span>{" "} */}
                  {details.rollNo}{" "}
                </p>
                <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
                  Details
                </h3>
                {details.department.slice(0,6)=="B.Tech" && 
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#808080",
                        paddingRight: "5px",
                      }}
                    >
                      Course
                    </span>{" "}
                    {details.department.slice(0, 6)}{" "}
                  </p>
                }
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#808080",
                      paddingRight: "5px",
                    }}
                  >
                    Department
                  </span>{" "}
                  {details.department.slice(0,6)=="B.Tech"? details.department.slice(6) : details.department}{" "}
                </p>
              </div>
              {details.events.length !== 0 && (
                <>
                  <h3
                    style={{
                      textAlign: "left",
                      paddingLeft: "30px",
                    }}
                  >
                    Registered Events
                  </h3>

                  {details.events.map((event) => (
                    <div
                      style={{
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#808080",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        &bull; {event.name}{" "}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
          {/* {details.departmentCoordinator && (
            <>
              <Link to="/DepartmentCoord">
                <Box
                  sx={{
                    display: "flex",
                    marginTop: { xs: "2vh", sm: "5vh", md: "4vh" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "150px",
                      margin: "auto",
                      backgroundColor: "#1578fc",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#5B80BB",
                      },
                      height: "48px",
                      boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        letterSpacing: "0.2px",
                        textAlign: "center",
                        height: "20px",
                        width: "100%",
                        maxWidth: "496px",
                        marginTop: "15px",
                        marginLeft: "24px",
                        marginRight: "24px",
                        marginBottom: "13px",
                      }}
                    >
                      Dept Coord{" "}
                    </Typography>
                  </Button>
                </Box>
              </Link>
            </>
          )} */}
          {details.eventCoordinator && (
            <>
              {/* <Link to="/Eventcoord"> */}
              <Box
                sx={{
                  display: "flex",
                  marginTop: { xs: "2vh", sm: "5vh", md: "4vh" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    backgroundColor: "#1578fc",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#5B80BB",
                    },
                    height: "48px",
                    boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleButtonClick(details.eventCoordinator)}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "0.2px",
                      textAlign: "center",
                      height: "20px",
                      width: "100%",
                      maxWidth: "496px",
                      marginTop: "15px",
                      marginLeft: "24px",
                      marginRight: "24px",
                      marginBottom: "13px",
                    }}
                  >
                    Event Coord - {details.eventCoordinator}
                  </Typography>
                </Button>
              </Box>
              {/* </Link> */}
            </>
          )}
        </Card>
      </Box>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
