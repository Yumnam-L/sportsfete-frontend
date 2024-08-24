import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import Fixtures from "../../components/LeaderBoardFixture";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import trophy from "../LeaderboardDescription/TrophyLeaderboard.png";
import { height, width } from "@mui/system";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Fixture from "../../components/Fixtures";
import fetchPointsData from "./fetchPointsSplit.js";
import "../../App.css";

function LeaderboardDescription() {
  const theme = useTheme();

  const Navigation = useNavigate();

  function handleBackButtonClick() {
    Navigation("/leaderBoardDisplay");
  }
  const [info, setInfo] = useState({
    dept: "",
    points: "",
    position: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pointsSplit, setPointsSplit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("deptDetails")) {
      setInfo({
        dept: JSON.parse(localStorage.getItem("deptDetails")).department,
        points: JSON.parse(localStorage.getItem("deptDetails")).points,
        position: JSON.parse(localStorage.getItem("deptDetails")).position,
      });

      fetchPointsData(
        setPointsSplit,
        setIsLoading,
        JSON.parse(localStorage.getItem("deptDetails")).department
      );
    } else {
      Navigation("/leaderBoardDisplay");
    }
  }, []);

  return (
    <Grid container>
      <Grid item md={12}>
        <div
          style={{
            backgroundColor: "rgba(0, 15, 34, 1)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: theme.spacing(2),
              left: theme.spacing(2),
              display: "flex",
              alignItems: "center",
              padding: theme.spacing(1),
              cursor: "pointer",
              [theme.breakpoints.down("sm")]: {
                top: theme.spacing(1),
                left: theme.spacing(1),
                padding: theme.spacing(0.5),
              },
            }}
            onClick={handleBackButtonClick}
          >
            <ArrowBackIcon sx={{ color: "#FFF" }} />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#ffffff",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "15px",
                },
              }}
            >
              Back To Homepage
            </Typography>
          </div>
          {/* <div> */}
          <Box sx={{ marginTop: 10, paddingLeft: 5, paddingRight: 10 }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  xs: titleSmall,
                  sm: titleSmall,
                  md: titleBig,
                },
                lineHeight: "61px",
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: {
                  xs: "3vh",
                  sm: "4vh",
                  md: "6vh",
                },
              }}
            >
              {info.dept}
            </Typography>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "22px",
                  lineHeight: "27px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  marginTop: "9vh",
                  width: "80vw",
                }}
              >
                SportsFete 2023
              </Typography>
            </Grid>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box>
                  <Box
                    marginTop="37px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    maxWidth={"80vw"}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                          md: "25px",
                        },
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#B1B9C5",
                      }}
                    >
                      Total Points:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                          md: "25px",
                        },
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      {info.points}
                    </Typography>
                  </Box>

                  <Box
                    // width="300px"
                    marginTop="2vh"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    maxWidth={"80vw"}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                          md: "25px",
                        },
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#B1B9C5",
                      }}
                    >
                      Current Position:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                          md: "25px",
                        },
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      {info.position}
                    </Typography>
                  </Box>

                  <Box marginTop="8vh">
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          margin: 0,
                          fontSize: "30px",
                          position: "relative",
                          top: "6px",
                        }}
                      />
                      Points Split
                    </Typography>
                    {pointsSplit.map((item) => (
                      <Box
                        marginTop="2vh"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        maxWidth={"80vw"}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: {
                              xs: "16px",
                              sm: "20px",
                              md: "25px",
                            },
                            lineHeight: "30px",
                            color: "#B1B9C5",
                          }}
                        >
                          {item[0]}:
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: {
                              xs: "16px",
                              sm: "20px",
                              md: "25px",
                            },
                            lineHeight: "30px",
                            textAlign: "center",
                            color: "#FFFFFF",
                          }}
                        >
                          {item[1]}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Card
                sx={{
                  backgroundColor: "rgba(0, 15, 34, 1)",
                  height: { md: "46vh", xs: "20vh", sm: "30vh" },
                  margin: "auto",
                  marginTop: { md: "12vh", xs: "12vh" },
                  width: { md: "27vw", xs: "44vw" },
                  zIndex: 1,
                }}
              >
                <div className="trophyBg">
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "900",
                      fontSize: {
                        xs: "25px",
                        sm: "35px",
                        md: "45px",
                      },
                      lineHeight: "30px",
                      textAlign: "center",
                      color: "#FFFFFF",
                      paddingTop: { md: "8vh", xs: "2vh", sm: "5vh" },
                    }}
                  >
                    {info.position}
                  </Typography>
                </div>
              </Card>
            </Grid>
          </Box>{" "}
          <Box sx={{ width: "90vw", height: "10vh" }}>
            {/*<Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 1)",
              paddingTop: "50px",
              textAlign:'start'
            }}
          >
            <ArrowRightIcon
              style={{
                margin: 0,
                fontSize: "30px",
                position: "relative",
                top: "6px",
              }}
            />
            Upcoming Fixtures
          </Typography>
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflow: "auto",
              scrollBehavior: "smooth",
              marginTop: "40px",
            }}
          >
            {data.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc={item.desc}
              />
            ))}
          </div>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 1)",
              marginTop: "40px",
            }}
          >
            <ArrowRightIcon
              style={{
                margin: 0,
                fontSize: "30px",
                position: "relative",
                top: "6px",
              }}
            />
            Past Fixtures
          </Typography>
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflow: "auto",
              scrollBehavior: "smooth",
              marginTop: "40px",
              marginBottom: "100px",
            }}
          >
            {data.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc={item.desc}
              />
            ))}
          </div> */}
          </Box>
          {/* </div> */}
        </div>
      </Grid>
    </Grid>
  );
}

export default LeaderboardDescription;
