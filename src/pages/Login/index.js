import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import {
  Typography,
  Box,
  Button,
  CardContent,
  Card,
  TextField,
  CircularProgress,
  Grid,
  Alert,
} from "@mui/material";
import { LynxLoginAPICall } from "./loginAPI";
import SnackbarComponent from "./../../components/SnackBar/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import "./frostedEffect.css"

const BackgroundImage = require("../../res/marathon2.png");

function LoginScreen() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  // const [statusCode, setStatusCode] = useState(0);
  const [SnackbarMessage, setSnackbarMessage] = useState("hello");
  const [SnackbarSeverity, setSnackbarSeverity] = useState("info");
  const [SnackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  function handleBackButtonClick() {
    navigate("/");
  }
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // const handleLogin = async () => {
  //   if (rollNo.length !== 9 || rollNo.replace(/[^0-9]/g, "").length !== 9) {
  //     setError("Invalid Roll Number");
  //     return;
  //   }
  //   let reCaptchaToken = "";
  //   if (!executeRecaptcha) {
  //     console.log("cannot be done");
  //   } else {
  //     reCaptchaToken = await executeRecaptcha();
  //     console.log("done");
  //   if (!rollNo || !reCaptchaToken) {
  //       setSnackbarSeverity("error");
  //       setSnackbarOpen(true);
  //       setSnackbarMessage("Please fill in all the fields.");
  //       return;
  //   }

  //     await LynxLoginAPICall(rollNo, reCaptchaToken, setMessage, setStatusCode);
  //     if (statusCode === 200) {
  //       localStorage.setItem("rollNo", rollNo);
  //       setMessage(message);
  //       setSnackbarMessage(message);
  //       setSnackbarSeverity("success");
  //       setSnackbarOpen(true);
  //       navigate("/otp");
  //     } else {
  //       switch (statusCode) {
  //         case 500:
  //           setSnackbarSeverity("error");
  //           setSnackbarOpen(true);
  //           setSnackbarMessage(message);
  //           break;
  //         case 404:
  //           setSnackbarSeverity("warning");
  //           setSnackbarOpen(true);
  //           setSnackbarMessage(message);
  //           break;
  //         case 401:
  //           setSnackbarSeverity("error");
  //           setSnackbarOpen(true);
  //           setSnackbarMessage(message);
  //           break;
  //         default:
  //           setSnackbarSeverity("error");
  //           setSnackbarOpen(true);
  //           setSnackbarMessage(message);
  //           break;
  //       }
  //     }
  //   }
  // };

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  const handleLogin = async () => {
    if (!isOnline) {
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setSnackbarMessage("Please connect to the internet.");
      return;
    } else {
      if (rollNo.length !== 9 || rollNo.replace(/[^0-9]/g, "").length !== 9) {
        setError("Invalid Roll Number");
        return;
      }
      let reCaptchaToken = "";
      if (!executeRecaptcha) {
       //console.log("cannot be done");
      } else {
        reCaptchaToken = await executeRecaptcha();
        //console.log("done");
        if (!rollNo || !reCaptchaToken) {
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          setSnackbarMessage("Please fill in all the fields.");
          return;
        }
      }
      if (!rollNo || !reCaptchaToken) {
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setSnackbarMessage("Please fill all fields.");
      } else {
        try {
          setIsLoading(true);
          const { message, statusCode } = await LynxLoginAPICall(
            rollNo,
            reCaptchaToken
          );
          setIsLoading(false);
          localStorage.setItem("rollNo", rollNo);
          setMessage(message);
          setSnackbarMessage(message);
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          navigate("/otp");
        } catch (error) {
          setIsLoading(false);
          //console.error(error);
          let snackBarMessage = "An unknown error occurred.";
          let snackBarSeverity = "error";
          switch (error.statusCode) {
            case 500:
              snackBarMessage =
                "Internal server error. Please try again later.";
              break;
            case 404:
              snackBarMessage =
                "The entered roll number in not found. Please try again.";
              snackBarSeverity = "warning";
              break;
            case 401:
              snackBarMessage =
                "You are not authorized to access this resource.";
              break;
            case 402:
              snackBarMessage = "Failed captcha verification";
              break;
            default:
              break;
          }
          setSnackbarSeverity(snackBarSeverity);
          setSnackbarOpen(true);
          setSnackbarMessage(snackBarMessage);
        }
      }
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url(${BackgroundImage})`,
          // backdropFilter: blur(10px"),
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <ArrowBackIcon />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "19px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              [theme.breakpoints.down("sm")]: {
                fontSize: "15px",
              },
            }}
          >
            Back To Home
          </Typography>
        </div>
        <Card
          sx={{
            maxWidth: 440,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            justifyContent: "center",
            alignItems: "center",
            // overflow: "auto",
            maxHeight: 612,
            [theme.breakpoints.down("sm")]: {
              maxWidth: 300,
              height: "71%",
              borderRadius: "10px",
              // overflow: "auto",
            },
          }}
          className="FrostedEffect"
        >
          <CardContent style={{ overflow: "hidden" }}>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={4}>
                {/* <div

                style={{
                  cursor: "pointer",
                  width: "10%",
                  margin: theme.spacing(1),
                }}
              >
                <ArrowBackIcon onClick={handleCardBackButtonClick} />
                
              </div> */}
              </Grid>
              <Grid item xs={3.9} textAlign="center">
                <Box
                  style={{
                    textAlign: "center",
                    marginBottom: "8px",
                    marginTop: "24px",
                  }}
                >
                  <img
                    src="image/logo.png"
                    alt="Sports council, NITT logo"
                    style={{
                      width: 66,
                      height: 65,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Typography
              align="center"
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.4000000059604645px",
                color: "#252733",
                opacity: "75%",
                height: "24px",
                marginLeft: "32px",
                marginRight: "32px",
                marginBottom: "20px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "0.20000001192092896px",
                  height: "5%",
                  textAlign: "center",
                  opacity: "75%",
                },
              }}
            >
              SPORTSFETE'23
            </Typography>
            <Alert
              variant="outlined"
              severity="info"
              style={{ fontFamily: "Poppins", fontSize: "12px" }}
            >
              Click on the link, to download step-by-step{" "}
              <a
                href="Instructions_Document.pdf"
                download="Instructions Document"
                // target="_blank"
                rel="noopener noreferrer"
                class="link"
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                instructions.
              </a>
            </Alert>
            {/* <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Typography
                align="center"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0.30000001192092896px",
                  marginTop: "32px",
                  textAlign: "center",
                  color: "#1254C0",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "20px",
                    lineHeight: "22px",
                    textAlign: "center",
                    marginTop: "5%",
                  },
                }}
              >
                Login To Register
              </Typography>
            </Box> */}

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                align="left"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "15px",
                  letterSpacing: "0.30000001192092896px",
                  textAlign: "left",
                  marginTop: "48px",
                  color: "#252733",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "11px",
                    lineHeight: "12px",
                    marginTop: "9%",
                  },
                }}
              >
                Roll Number
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Roll Number"
                value={rollNo}
                style={{
                  marginTop: "6px",
                  borderRadius: 8,
                  backgroundColor: "#FCFDFE solid #F0F1F7",
                  borderWidth: 1,
                  height: "42px",
                  [theme.breakpoints.down("sm")]: {
                    height: "7vh",
                  },
                }}
                onChange={(event) => {
                  const text = event.target.value;
                  setRollNo(text);
                  setError("");
                }}
                inputProps={{
                  maxLength: 9,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                error={Boolean(error)}
                helperText={error}
                onKeyDown={(ev) => {
                  //console.log(`Pressed keyCode ${ev.key}`);
                  if (ev.key === "Enter") {
                    // Do code here
                    ev.preventDefault();
                    handleLogin();
                  }
                }}
              />

              <Typography
                align="center"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  letterSpacing: "0.30000001192092896px",
                  textAlign: "center",
                  marginTop: "5px",
                  color: "#1254C0",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "11px",
                    lineHeight: "14px",
                    textAlign: "center",
                    marginTop: "3%  ",
                  },
                }}
              ></Typography>
              {/* <div
                style={{
                  width: "90%",
                  height: "74px",
                  marginTop: "34px",
                  display: "flex",
                  borderRadius: 2,
                  backgroundColor: "#FAFAFA",
                  borderWidth: 5,
                  borderColor: "#D6D6D6",
                  justifyContent: "center",
                  alignItems: "center",
                  [theme.breakpoints.down("sm")]: {
                    marginTop: "10%",
                    height: "10vh",
                  },
                }}
              >
                <Typography variant="subtitle1">I am not a robot</Typography>
              </div> */}
              <div
                style={{
                  margin: "auto",
                  height: "10px",
                  position: "relative",
                  top: "35px",
                }}
              >
                {isLoading && <CircularProgress />}
              </div>

              <Button
                variant="contained"
                onClick={handleLogin}
                disable={isLoading}
                style={{ visibility: isLoading ? "hidden" : "visible" }}
                sx={{
                  width: "90%",
                  margin: "auto",
                  backgroundColor: "rgba(0,0,0,0)",
                  border: "2px solid #1e87f0",
                  color: "#1e87f0",
                  "&:hover": {
                    backgroundColor: "#1e87f0",
                    color: "white",
                  },
                  height: "48px",
                  boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
                  borderRadius: "8px",
                  marginBottom: "29px",
                  marginTop: "40px",
                  [theme.breakpoints.down("sm")]: {
                    width: "85%",
                    height: "40px",
                    marginTop: "20%",
                    marginBottom: "2%",
                  },
                }}
              >
                <Box
                  component="img"
                  src="image/lynx.png"
                  sx={{
                    height: 50,
                    width: 50,
                    marginTop: { xs: 0, sm: 0, md: 1 },
                    marginLeft: { xs: 0, sm: 0, md: 5 },
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0.2px",
                    textAlign: "center",
                    height: "20px",
                    width: "100%",
                    maxWidth: "496px",
                    marginTop: "15px",
                    marginLeft: "-30px",
                    marginRight: "24px",
                    marginBottom: "13px",
                    [theme.breakpoints.down("sm")]: {
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "14px",
                    },
                    overflow: "hidden",
                  }}
                >
                  LOGIN WITH LYNX AUTH
                </Typography>
              </Button>
            </form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "25px",
                },
                [theme.breakpoints.down("xs")]: {
                  marginTop: "15px",
                },
              }}
            >
              <Typography
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  fontStyle: "normal",
                  textAlign: "center",
                  color: "#000000",
                  fontFamily: "Montserrat",
                  lineHeight: "39px",
                }}
              >
                Weaved with 🕸️ by
              </Typography>
              <Typography
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  fontStyle: "normal",
                  textAlign: "center",
                  color: "#3751FF",
                  fontFamily: "Montserrat",
                  lineHeight: "39px",

                  paddingLeft: "7px",
                }}
              >
                Spider
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
      {/* <div
        style={{
          position: "absolute",
          bottom: 0,
          marginBottom: "20px",
          width: "100%",
        }}
      >
        
      </div> */}
      <SnackbarComponent
        open={SnackbarOpen}
        onClose={handleSnackbarClose}
        message={SnackbarMessage}
        severity={SnackbarSeverity}
      />
    </div>
  );
}

export default function Login() {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true }}
    >
      <LoginScreen />
    </GoogleReCaptchaProvider>
  );
}
