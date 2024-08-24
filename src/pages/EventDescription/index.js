import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventDescriptionTabNavigator from "../../components/EventsDescriptionTabNavigator";
import Fixture from "../../components/Fixtures";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";

import "./eventsDescription.css";
import eventAPiCall , {notificationsApiCall} from "./eventApiCall"; 
import PredictionApi from "./PredictionApi";
import { EmojiEvents } from "@mui/icons-material";
import Marquee from "react-fast-marquee";

function EventDescription() {
  const [openArr, setOpenArr] = useState([]);
  const [eventDetails, setEventDetails] = useState([
    {
      name: "",
      matches: [],
      __v: 1,
    },
  ]);
  const [obj, setObj] = useState({
    dateTime: "",
    team1: { name: "" },
    team2: { name: " " },
    desc: "",
  });
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const name = location.state.item;

  useEffect(() => {
    async function apiCall(name) {
      if (name !== "") {
        const response = await eventAPiCall(name, setObj, setUpcomingMatches);
        await notificationsApiCall(name, setNotifications);
        setEventDetails(response);
      }
    }
    // console.log("OBJECT: ");
    // console.log(obj);
    apiCall(name);
    const token = localStorage.getItem("participantDetails")
      ? JSON.parse(localStorage.getItem("participantDetails")).token
      : null;

    async function apiCall2() {
      const response = await PredictionApi(name, token, setOpenArr);
    }

    apiCall2();
  }, [name]);

  const theme = useTheme();

  const Navigation = useNavigate();

  function handleBackButtonClick() {
    Navigation("/");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000619",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          top: "2.5vh",
          // left: theme.spacing(2),
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 1rem",

          // [theme.breakpoints.down("sm")]: {
          //   top: theme.spacing(1),
          //   left: theme.spacing(1),
          //   padding: theme.spacing(0.5),
          // },
          zIndex: "2",
        }}
      >
        <div
          onClick={handleBackButtonClick}
          style={{
            display: "flex",
            width: { xs: "14\vw", sm: "12vw", md: "12vw" },
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <ArrowBackIcon style={{ color: "white" }} />
          <Typography
            sx={{
              minWidth: "5rem",
              fontFamily: "Poppins",
              fontSize: "2vh",
              fontWeight: 500,
              letterSpacing: "0em",
              paddingLeft: "1vw",
              textAlign: "left",
              color: "#ffffff",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2vh",
              },
            }}
          >
            Back To Home
          </Typography>
        </div>

        {/* <div
          style={{
            // width: "100vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Link to="/playerLeaderboard">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <EmojiEvents
                sx={{
                  color: "#F39C12",
                  width: { xs: "4vh", sm: "3vh", md: "3vw" },
                  height: { xs: "4vh", sm: "3vh", md: "3vw" },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "1.5vh", sm: "3vh", md: "3vh" },
                  fontWeight: 700,
                  paddingTop: { xs: "0.5vh", sm: "0vh", md: "1vh" },
                  letterSpacing: "0em",
                  // marginTop: "-5vh",
                  color: "#FFFFFF",
                }}
              >
                Leaderboard
              </Typography>
            </div>
          </Link>
        </div> */}
      </div>
      <Box
        sx={{
          backgroundImage: `url(${require(`../../res/EventDescription/${(
            name[0].toUpperCase() +
            name.toLowerCase().substr(1, name.length - 1)
          ).replaceAll(" ", "")}.jpeg`)})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "5vh",
          position: "relative",
        }}
      >
        <div className="eventsBgGradient"></div>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "8vw",
            flexDirection: "column",
            marginTop: "10vw",
            zIndex: "2",
          }}
        >
          {obj.dateTime !== "" &&
           
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "1rem",
              height: "1.5rem",
              width: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.7rem",
                fontWeight: "bold",
                lineHeight: "2vh",
                letterSpacing: "0.05em",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              Live
            </Typography>
          </Box>
          }
          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "#f6f6f6",
                fontSize: {
                  xs: titleSmall,
                  sm: titleMedium,
                  md: titleBig,
                },
                fontWeight: 900,
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "3vh",
                fontWeight: "bold",
                lineHeight: "4vh",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              SportsFete 2023
            </Typography>
          </Box>
        </Box>
        {/* //since we will have a dateTime */}
        {obj.dateTime === "" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              width: "40%",
              minWidth: "10rem",
              paddingTop: "10vh",
              borderRadius: "1rem",
              flexShrink: "0",
              zIndex: "2",
            }}
          >
            <Grid container spacing={3}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "4vh",
                  lineHeight: "5vh",
                  color: "white",
                  paddingLeft: "8vw",
                  marginTop: "5vh",
                }}
              >
                No live matches
              </Typography>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
              minWidth: { xs: "40vh", sm: "60vh", md: "60vh" },
              paddingTop: "80px",
              borderRadius: "10px",
              flexShrink: "0",
              zIndex: "2",
            }}
          >
            <Grid container spacing={1}>
              <Typography
                margin="auto"
                marginTop="1vh"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { xs: "2vh", sm: "4vh", md: "4vh" },
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                {obj.dateTime}
              </Typography>

              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="spaceEvenly"
                marginTop="3vh"
              >
                <Box margin="auto">
                  <Avatar
                    sx={{
                      width: { xs: 50, sm: 80, md: 80 },
                      height: { xs: 50, sm: 80, md: 80 },
                    }}
                    variant="square"
                    src={require(`../../res/DeptImages/${
                      obj.team1.name
                        ? obj.team1.name === "MCA" || obj.team1.name === "MBA"
                          ? "MASTERS"
                          : obj.team1.name
                        : "CSE"
                    }.png`)}
                  ></Avatar>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "3vh", sm: "4vh", md: "4vh" },
                      lineHeight: "2vh",
                      color: "#FFFFFF",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    {obj.team1.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: { xs: "2.5vh", sm: "3vh", md: "3vh" },
                      lineHeight: "2vh",
                      color: "#FFFFFF",
                      textAlign: "center",
                      marginTop: "2rem",
                    }}
                  >
                   {obj.team1.score}
                  </Typography>
                </Box>
                <Typography
                  margin="auto"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: { xs: "2vh", sm: "3vh", md: "3vh" },
                    lineHeight: "2vh",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  VS
                </Typography>
                <Box margin="auto">
                  <Avatar
                    sx={{
                      width: { xs: 50, sm: 80, md: 80 },
                      height: { xs: 50, sm: 80, md: 80 },
                    }}
                    variant="square"
                    src={require(`../../res/DeptImages/${
                      obj.team2.name
                        ? obj.team2.name === "MCA" || obj.team2.name === "MBA"
                          ? "MASTERS"
                          : obj.team2.name
                        : "CSE"
                    }.png`)}
                  ></Avatar>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "3vh", sm: "4vh", md: "4vh" },
                      lineHeight: "2vh",
                      color: "#FFFFFF",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                   {obj.team2.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: { xs: "2.5vh", sm: "3vh", md: "3vh" },
                      lineHeight: "2vh",
                      color: "#FFFFFF",
                      textAlign: "center",
                      marginTop: "2rem",
                    }}
                  >
                   {obj.team2.score}
                  </Typography>
                </Box>
              </Grid>
              <Typography
                margin="auto"
                marginTop="10vh"
                marginBottom="10vh"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { xs: "2.5vh", sm: "4vh", md: "4vh" },
                  lineHeight: "2vh",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Venue: {obj.desc}
              </Typography>
            </Grid>
           
          </Box>
        )}
        <Marquee>
              <Typography
                margin="auto"
                marginTop="10vh"
                marginBottom="10vh"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { xs: "2.5vh", sm: "3vh", md: "3vh" },
                  lineHeight: "2vh",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
               {notifications && notifications.map(notification =>(
                  <span style={{marginRight:'50px'}}>{notification.text}</span>
               ))}
              </Typography>
              </Marquee>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:'100px' }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "3vh",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 1)",
                textAlign:'center',
              }}
            >
        
              Resources :-
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "2vh", sm: "3vh", md: "3vh", textAlign:'center' },
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "2.5vh",
              }}
            >
              <a
                href={`Rulebook/Sportsfete'23_Rulebook_${name}.pdf`}
                download={`Sportsfete'23 ${name} Rulebook`}
                style={{
                  cursor: "pointer",
                  color: "#5DADE2",
                  textDecoration: "underline",
                  borderColor: "white",
                  paddingLeft: "1.5vh",
                }}
              >
                {name} RULEBOOK
              </a>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "2vh", sm: "3vh", md: "3vh" ,  textAlign:'center'},
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "2.5vh",
              }}
            >
              <a
                href={`Fixture/${name}.pdf`}
                download={`Sportsfete'23 ${name} Fixture`}
                style={{
                  cursor: "pointer",
                  color: "#5DADE2",
                  textDecoration: "underline",
                  borderColor: "white",
                  paddingLeft: "1.5vh",
                }}
              >
                {name} FIXTURE
              </a>
            </Typography>
          </Box>
        </Box>

      <div
        style={{
          display: "flex",
          gap: "10vh",
          height: "100%",
          overflow: "auto",
          scrollBehavior: "smooth",
          marginTop: "10vh",
          width: "80%",
        }}
      >
     
        {upcomingMatches.length > 0 || openArr.length > 0 ? (
          <>
            {upcomingMatches.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc={item.desc}
                cardcolor={"#120831"}
              />
            ))}
            {openArr.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc={item.venue}
                cardcolor={"#120831"}
              />
            ))}
          </>
        ) : (
          <Typography
            sx={{
              minWidth: "10rem",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "4vh",
              lineHeight: "5vh",
              color: "white",
              height: "10vh",
              paddingLeft: "8vw",
              marginTop: "10vh",
            }}
          >
            No Upcoming Matches
          </Typography>
        )}
      </div>
      <EventDescriptionTabNavigator eventName={name} />
    </div>
  );
}

export default EventDescription;
