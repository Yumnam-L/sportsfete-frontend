import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Fixture from "../../components/Fixtures";
import { Box, Grid, Button, Modal, Fade, Avatar } from "@mui/material";
import "../../App.css";
import { makeStyles } from "@mui/styles";
import PredictionApi from "./PredictionApi";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SnackbarComponent from "../../components/SnackBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    paddingTop: "5vh",
  },
  markLabel: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
  },
}));

const Prediction = (props) => {
  const [maxBet, setMaxBet] = useState(100);
  const [minBet, setMinBet] = useState(0);
  const [betCoins, setbetCoins] = useState(minBet);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("neutral");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddCoinClick = () => {
    if (betCoins + 10 > maxBet) {
      setSnackbarOpen(true);
      setSnackbarMessage("Maximum betting limit has been reached");
      setSnackbarSeverity("error");
    } else {
      setbetCoins(betCoins + 10);
    }
  };
  const handleRemoveCoinClick = () => {
    if (betCoins - 10 < minBet) {
      setSnackbarOpen(true);
      setSnackbarMessage("Minimum betting limit has been reached");
      setSnackbarSeverity("error");
    } else {
      setbetCoins(betCoins - 10);
    }
  };

  const [openArr, setOpenArr] = useState([]);
  const [won, setWon] = useState([]);
  const [lost, setLost] = useState([]);
  const [open, setOpen] = useState();
  const [predicted, setPredicted] = useState([]);
  const [matchId, setMatchId] = useState(null);
  const [betDoneMap, setBetDoneMap] = useState({});
  const [deptNo, setDeptNo] = useState(null);
  const [modalDetails, setModalDetails] = useState([]);

  const name = props.event;
  useEffect(() => {
    const token = localStorage.getItem("participantDetails")
      ? JSON.parse(localStorage.getItem("participantDetails")).token
      : null;

    async function apiCall() {
      const response = await PredictionApi(
        name,
        token,
        setLost,
        setOpenArr,
        setWon,
        setPredicted,
        setBetDoneMap
      );
    }

    apiCall();
  }, [name]);

  const token = localStorage.getItem("participantDetails")
    ? JSON.parse(localStorage.getItem("participantDetails")).token
    : null;

  const { executeRecaptcha } = useGoogleReCaptcha();

  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  const handlePredictClick = async (
    eventName,
    matchId,
    deptNo,
    betCoins,
    token
  ) => {
    if (deptNo && betCoins !== 0 && matchId) {
      let reCaptchaToken = "";
      if (!executeRecaptcha) {
        // console.log("cannot be done");
      } else {
        reCaptchaToken = await executeRecaptcha();
      }
      try {
        const response = await fetch(BASE_URL + "api/sft/bet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
            recaptcha: reCaptchaToken,
          },
          body: JSON.stringify({
            eventName: eventName,
            matchId: matchId,
            deptNo: deptNo,
            bet: betCoins,
          }),
        });
        const data = await response.json();
        setSnackbarOpen(true);
        setSnackbarMessage(data.message);
        setSnackbarSeverity("success");
      } catch (error) {
        // console.log(error);
        setSnackbarOpen(true);
        setSnackbarMessage(error);
        setSnackbarSeverity("error");
      }
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage("Please choose a dept and place your bet coins");
      setSnackbarSeverity("error");
    }
    setDeptNo(null);
  };

  const handleOpen = (id, item) => {
    if (betDoneMap[id]) {
      // show snackbar "bet is already done"
      setSnackbarOpen(true);
      setSnackbarMessage("You have already placed your bet");
      setSnackbarSeverity("warning");
      return;
    }
    setModalDetails([item.team1.name, item.team2.name]);
    setMaxBet(item.maxBet);
    setMinBet(item.minBet);
    setOpen(true);
    setMatchId(id);
  };
  const handleClose = () => {
    setOpen(false);
    setDeptNo(null);
    setbetCoins(0);
    setMatchId(null);
  };

  const classes = useStyles();
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "3vh",
          fontWeight: 600,
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        <ArrowRightIcon
          style={{
            margin: 0,
            fontSize: "3vh",
            position: "relative",
            top: "0.5vh",
          }}
        />
        Predicted Matches
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "2.5vh",
          height: "100%",
          overflow: "auto",
          scrollBehavior: "smooth",
          marginTop: "4vh",
        }}
      >
        {predicted.length === 0 && won.length === 0 && lost.length === 0 ? (
          <Typography
            style={{
              color: "white",
              fontSize: "3vh",
              fontFamily: "Poppins",
              paddinTop: "2vh",
            }}
          >
            No predictions to show
          </Typography>
        ) : (
          <>
            {predicted.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc="Prediction successfull"
                cardcolor={"#120831"}
              />
            ))}
            {lost.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc="Lost Prediction"
                cardcolor={"#310808"}
              />
            ))}
            {won.map((item) => (
              <Fixture
                dateTime={item.dateTime}
                team1={item.team1}
                team2={item.team2}
                desc="Won Prediction"
                cardcolor={"#083111"}
              />
            ))}
          </>
        )}
      </div>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "3vh",
          fontWeight: 600,
          color: "rgba(255, 255, 255, 1)",
          paddingTop: "4vh",
        }}
      >
        <ArrowRightIcon
          style={{
            margin: 0,
            fontSize: "3vh",
            position: "relative",
            top: "0.5vh",
          }}
        />
        Open Predictions
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 12, sm: 10, md: 2 }}
        columnSpacing={{ xs: 3, sm: 3, md: 2 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          paddingTop: "4vh",
          paddingRight: {
            xs: "4vw",
            sm: "2vw",
            md: "0vw",
          },
          paddingLeft: {
            xs: "6vw",
            sm: "4vw",
            md: "0vw",
          },
          paddingBottom: {
            xs: "10vh",
            sm: "15vh",
            md: "20vh",
          },
        }}
      >
        {openArr.length === 0 ? (
          <Typography
            style={{
              color: "white",
              fontSize: "3vh",
              marginTop: "15vh",
              fontFamily: "Poppins",
            }}
          >
            No open matches to predict
          </Typography>
        ) : (
          openArr.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                onClick={() => handleOpen(item.id, item)}
                style={{ cursor: "pointer" }}
              >
                <Fixture
                  dateTime={item.dateTime}
                  team1={item.team1}
                  team2={item.team2}
                  desc={item.venue}
                  cardcolor={"#120831"}
                  // cardcolor={"#FFFFFF"}
                />
              </Box>
            </Grid>
          ))
        )}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Fade in={open}>
          <Box
            sx={{
              height: "650px",
              width: "850px",
              backgroundColor: "#120831",
              borderRadius: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography
              sx={{
                marginTop: "5vh",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "20px",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              April 5, 10:00 AM, NSO GROUND
            </Typography> */}
            <Typography
              sx={{
                marginTop: "5vh",
                color: "#FFFFFF",
                fontSize: "3vh",
                fontFamily: "Poppins",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Who Will Win?
              <br />
              <span
                style={{
                  fontSize: "2vh",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                (Select One Team)
              </span>
            </Typography>
            <Typography
              sx={{
                marginTop: "2vh",
                textAlign: "center",
                fontSize: "2vh",
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Coins to bet:{" "}
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "3vh",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {betCoins}
              </span>
            </Typography>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="row"
              marginTop="5vh"
            >
              <Box
                margin="auto"
                onClick={() =>
                  setDeptNo((prevClicked) => (prevClicked === 1 ? null : 1))
                }
                sx={{
                  border:
                    deptNo === 1
                      ? "3px solid #FFFFFF"
                      : "3px solid transparent",
                  boxShadow: deptNo === 1 ? "0px 0px 20px #FFFFFF" : "none",
                  paddingX: 2.5,
                  paddingY: 1.3,
                }}
              >
                <Avatar
                  sx={{
                    width: 75,
                    height: 75,
                    cursor: "pointer",
                  }}
                  variant="square"
                  src={require(`../../res/DeptImages/${
                    modalDetails && modalDetails[0]
                      ? modalDetails[0] === "MCA" || modalDetails[0] === "MBA"
                        ? "MASTERS"
                        : modalDetails[0]
                      : "CSE"
                  }.png`)}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "3vh",
                    lineHeight: "2vh",
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "5vh",
                  }}
                >
                  {modalDetails && modalDetails[0] ? modalDetails[0] : null}
                </Typography>
              </Box>
              <Typography
                margin="auto"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2vh",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                VS
              </Typography>
              <Box
                margin="auto"
                onClick={() =>
                  setDeptNo((prevClicked) => (prevClicked === 2 ? null : 2))
                }
                sx={{
                  border:
                    deptNo === 2
                      ? "3px solid #FFFFFF"
                      : "3px solid transparent",
                  boxShadow: deptNo === 2 ? "0px 0px 20px #FFFFFF" : "none",
                  paddingX: 2.5,
                  paddingY: 1.3,
                }}
              >
                <Avatar
                  sx={{ width: 75, height: 75, cursor: "pointer" }}
                  variant="square"
                  src={require(`../../res/DeptImages/${
                    modalDetails && modalDetails[1]
                      ? modalDetails[1] === "MCA" || modalDetails[1] === "MBA"
                        ? "MASTERS"
                        : modalDetails[1]
                      : "CSE"
                  }.png`)}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "3vh",
                    lineHeight: "2vh",
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginTop: "5vh",
                  }}
                >
                  {modalDetails && modalDetails[1] ? modalDetails[1] : null}
                </Typography>
              </Box>
            </Grid>
            <div className={classes.container}>
              <Box>
                <Box
                  component="img"
                  onClick={handleRemoveCoinClick}
                  src="image/removeCoins.png"
                  sx={{
                    width: "100px",
                    height: "100px",
                    cursor: "pointer",
                    marginRight: "10vh",
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1.5vh",
                    lineHeight: "2vh",
                    color: "#FFFFFF",
                    textAlign: "center",
                    marginRight: "60px",
                  }}
                >
                  Subtract Coins
                </Typography>
              </Box>
              <Box>
                <Box
                  component="img"
                  onClick={handleAddCoinClick}
                  src="image/addCoins.png"
                  sx={{
                    width: "100px",
                    height: "100px",
                    cursor: "pointer",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1.5vh",
                    lineHeight: "2vh",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Add Coins
                </Typography>
              </Box>
              {/* <Add
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontSize: "30px",
                  position: "relative",
                  top: "6px",
                }}
                sx={{ color: "#FFFFFF", fontFamily: "Poppins" }}
                onChange={(event, newValue) => {
                  setbetCoins(newValue);
                }}
              /> */}
            </div>
            <Box
              sx={{
                display: "flex",
                marginTop: { xs: "2vh", sm: "5vh", md: "10vh" },
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "10vh",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handlePredictClick(name, matchId, deptNo, betCoins, token);
                }}
                sx={{
                  width: "120px",
                  margin: "auto",
                  backgroundColor: "#1578fc",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#5B80BB",
                  },
                  height: "38px",
                  boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontWeight: 800,
                    lineHeight: "2vh",
                    letterSpacing: "0.2px",
                    textAlign: "center",
                    height: "3vh",
                    width: "100%",
                    maxWidth: "496px",
                    marginTop: "2vh",
                    marginLeft: "3vh",
                    marginRight: "3vh",
                    marginBottom: "2vh",
                  }}
                >
                  PREDICT{" "}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* <Link to="/playerLeaderboard">
        <Box
          sx={{
            display: "flex",
            marginTop: { xs: "2vh", sm: "5vh", md: "0vh" },
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10vh",
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
                fontSize: "15px",
                fontWeight: 800,
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
              LEADERBOARD{" "}
            </Typography>
          </Button>
        </Box>
      </Link> */}
      <div>
        <SnackbarComponent
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
      </div>
    </div>
  );
};

export default Prediction;
