import React from "react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import {
  Typography,
  Button,
  CardContent,
  Card,
  TextField,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import handleOtp from "./verifyOtp";
import SnackbarComponent from "./../../components/SnackBar/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import "./frostedEffect.css"

const BackgroundImage = require("../../res/marathon2.png");
const nittLogo = "https://i.postimg.cc/MZstWYNF/nittlogo.png";

function OTPScreen() {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  function handleBackButtonClick() {
    navigate("/");
  }

  // function handleCardBackButtonClick() {
  //   if (!isNavigate) {
  //     navigate("/login");
  //   } else {
  //     console.log("what");
  //   }
  // }
  const theme = useTheme();
  const [rollNo, setrollNumber] = useState("");
  const [otpAsAString, setOtpAsAString] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  //const [isNavigate, setIsNavigate] = useState(false);
  const [disabledFields, setDisabledFields] = useState([
    false,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const refs = useRef([]);
  useEffect(() => {
    refs.current[0].focus();
    var rollNo = localStorage.getItem("rollNo");
    //console.log("roll number is", rollNo);

    if (rollNo !== null) {
      setrollNumber(rollNo);

      //console.log("The roll number is " + rollNo);
    }
  }, []);
  const handleChangeforOtp = (event, index) => {
    const value = event.target.value;
    setOtpAsAString(otpAsAString + event.target.value);
    const newOtp = [...otp];
    newOtp[index] = value;
    newOtp.join("");
    setOtp(newOtp);
    const newDisabledFields = [...disabledFields];
    if (value) {
      newDisabledFields[index + 1] = false;
    }
    setDisabledFields(newDisabledFields);
    // Move focus to next field automatically
    if (value && index < refs.current.length - 1) {
      setTimeout(() => {
        refs.current[index + 1].focus();
      }, 100);
    }
  };

  const stylesimage = {
    root: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    },
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleCardBackButtonClick = () => {
    navigate("/");
  };

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

  const handleClickforSnackbar = async () => {
    if (!isOnline) {
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setSnackbarMessage("Please connect to the internet.");
      return;
    } else {
      const otpIs = otp.join("");

      let reCaptchaToken = "";
      if (!executeRecaptcha) {
        //console.log("Cannot execute recaptcha");
      } else {
        reCaptchaToken = await executeRecaptcha("yourAction");
        //console.log("recaptcha done");
      }
      setIsLoading(true);
      const result = await handleOtp(rollNo, otpIs, reCaptchaToken);
      setIsLoading(false);
      if (result.success) {
        //-----storing in the local storage as participantDetails----
        const details = {
          name: result.name,
          rollNo: result.rollNo,
          department: result.department,
          token: result.token,
          isProfileConfimed: result.isProfileConfimed,
          isMarathonRegistered: result.isMarathonRegistered,
        };
        localStorage.setItem("participantDetails", JSON.stringify(details));
        // console.log("Local storage-->", myStoredObject);
        //if confirmed, go to final page
        if (details.isMarathonRegistered === true) {
          navigate("/profile");
        } else if (details.isProfileConfimed === true) {
          navigate("/profile");
        } else {
          navigate("/reviewDetails");
        }
      } else {
        // console.log(result.message); // Display the error message
        setSnackbarMessage(result.message);
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
      setSnackbarMessage(result.message);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
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
              maxWidth: 320,
              height: "74%",
              borderRadius: "10px",
              // overflow: "auto",
            },
          }}
          className="FrostedEffect"
        >
          {/* <div
        // onClick={handleBackButtonClick}
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
      >
        <ArrowBackIcon style={{ marginRight: "10px" }} />
        <Typography
          sx={{
            fontFamily: "Rubik",
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
          Back To SportsFete
        </Typography>
      </div> */}
          <CardContent>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={3}>
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
              <Grid item xs={6} textAlign="center">
                <Box
                  style={{
                    textAlign: "center",
                    marginBottom: "8px",
                    marginTop: "24px",
                  }}
                >
                  <img
                    src="image/logo.png"
                    //src="https://s3-alpha-sig.figma.com/img/267b/c487/f321c2fc6bf8630c249c5584122c0a6b?Expires=1679270400&Signature=GwpiDNM0EIyFKTNhUoj6x3xPlv7XkvtDRPW44UcTxJs9GwEZfjHSpjJBqMN0AwnbZ6WPgm51KPo8cZCHJHmPDX08XwTfRFoJehvJ2lFypGoTYWH-qXaMbSvJ~z8D5zj-OZE-E0qKL~j7Tn4t4rJEzd5zIqkJyymsUJPgIZ31vDJ1Fzbnj7KcnqdCMpYqJXpckKWLxTZ-8S1O03hc5ffB2aovtgtZlox8iqCprs6jkwg0hxZLp7dQiWbZrMGIUbqJ3dyVfciak-H64bbRMU1Upq52xyEeT9jC3OEZw1j-g9azthhGEChT3jI4FNK1Vwzb59PRYtA2n7zTJiv6w~DGQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Sports council, NITT logo"
                    style={{
                      width: 66,
                      height: 65,
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} textAlign="center">
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "19px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "0.4px",
                    color: "#252733",
                    opacity: 0.7,
                    marginTop: "0px",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "13px",
                      lineHeight: "16px",
                      letterSpacing: "0.20000001192092896px",

                      textAlign: "center",
                      opacity: "75%",
                    },
                  }}
                >
                  SPORTSFETE'23
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "22.5px",
                    lineHeight: "28px",
                    textAlign: "center",
                    letterSpacing: "0.3px",
                    color: "#1254C0",
                    marginTop: "25px",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "20px",
                      lineHeight: "22px",
                      textAlign: "center",
                    },
                  }}
                >
                  Enter OTP
                </Typography>

                <Grid item xs={14}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                    marginTop="50px"
                  >
                    <Typography
                      style={{
                        marginRight: 7,
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.3px",
                        color: "#252733",
                      }}
                    >
                      Enter OTP sent to
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Lynx App
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <form noValidate autoComplete="off">
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      sx={{
                        marginTop: "-30px",
                        paddingLeft: "10px",
                        [theme.breakpoints.down("sm")]: {
                          margin: 0.9,
                          marginTop: "-20px",
                        },
                      }}
                    >
                      {[...Array(6)].map((_, index) => (
                        <Grid item key={index}>
                          <TextField
                            disabled={disabledFields[index]}
                            variant="outlined"
                            inputProps={{
                              maxLength: 1,
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            style={{
                              margin: "0.5rem 0.2rem ",
                              width: "41px",
                              height: "53px",
                              textAlign: "center",
                              marginTop: 50,
                            }}
                            value={otp[index]}
                            onChange={(event) =>
                              handleChangeforOtp(event, index)
                            }
                            inputRef={(el) => (refs.current[index] = el)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </form>
                </Grid>
              </Grid>

              <Grid item xs={12} textAlign="center" marginTop="30px">
                <div
                  style={{
                    margin: "auto",
                    height: "10px",
                    position: "relative",
                    bottom: "35px",
                  }}
                >
                  {isLoading && <CircularProgress />}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  disable={isLoading}
                  style={{ visibility: isLoading ? "hidden" : "visible" }}
                  sx={{
                    width: "50%",
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
                    marginTop: "15px",
                    [theme.breakpoints.down("sm")]: {
                      width: "85%",
                      height: "40px",
                      marginTop: "-5%",
                      marginBottom: "2%",
                    },
                  }}
                  onClick={() => {
                    handleClickforSnackbar();
                  }}
                >
                  SUBMIT
                </Button>
              </Grid>
              <Grid item xs={14}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "20px",
                    [theme.breakpoints.down("sm")]: {
                      marginTop: "-10px",
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
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <SnackbarComponent
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
      </div>
    </div>
  );
}
export default function OTPpage() {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true }}
    >
      <OTPScreen />
    </GoogleReCaptchaProvider>
  );
}
