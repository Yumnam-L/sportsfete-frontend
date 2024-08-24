import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutModal from "../../components/Modal/logoutModal";
import MessageModal from "../../components/Modal/messageModal";

import "./reviewDetails.css";
import {
  Typography,
  Box,
  Button,
  useTheme,
  TextField,
  styled,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import verifyDetails, { mtechBranches } from "./verifyProfile";
import SnackbarComponent from "../../components/SnackBar";

const StyledButton = styled(Button)({
  backgroundColor: "#1254C0",
  color: "#ffffff",
  fontWeight: 500,
  marginTop: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  fontSize: "12px",
  borderRadius: 8,
});

const ReviewDetails = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    rollNo: "",
    department: "",
    branchID: "",
  });
  const [token, setToken] = useState();
  const [openSB, setOpenSB] = useState({
    open: false,
    message: "",
    status: 100,
    severity: "info",
    loading: false,
  });

  const [branches, setBranches] = useState([]);

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("participantDetails"))) {
      setToken(
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("participantDetails")).token
          : null
      );
      setStudentDetails(
        typeof window !== "undefined"
          ? {
              name: JSON.parse(localStorage.getItem("participantDetails")).name,
              rollNo: JSON.parse(localStorage.getItem("participantDetails"))
                .rollNo,
              department: JSON.parse(localStorage.getItem("participantDetails"))
                .department,
            }
          : null
      );
    }
  }, []);

  useEffect(() => {
    if (studentDetails.name !== "" && studentDetails.department === null) {
      //only when department is empty when it comes from other mtech
      // console.log(studentDetails)
      mtechBranches(setBranches, setOpenSB, setIsLoading);
    }
  }, [studentDetails]);

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

  const handleCloseSB = () => {
    setOpenSB({ ...openSB, open: false, loading: false });
  };

  const [menuAnchor, setmenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);
  const handleMenuClick = (event) => {
    // console.log(branches)
    if (branches.length > 0) setmenuAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setmenuAnchor(null);
  };

  const navigate = useNavigate();
  const theme = useTheme();
  function handleBackButtonClick() {
    setMessageModal({
      open: true,
      title: "Verification",
      message:
        "Update credentials in Lynx app, and come back again to verify! Press yes to log out.",

      yesFunc: () => {
        localStorage.removeItem("participantDetails");
        navigate("/");
      },
    });
  }

  const handleSubmitButtonClick = () => {
    setMessageModal({
      open: true,
      title: "Verification",
      message: "Do you want to continue?",
      yesFunc: () => {
        handleSubmit();
      },
    });
  };

  const [SnackbarMessage, setSnackbarMessage] = useState("hello");
  const [SnackbarSeverity, setSnackbarSeverity] = useState("info");
  const [SnackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    //event.preventDefault();
    if (!isOnline) {
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setSnackbarMessage("Please connect to the internet.");
      return;
    } else {
      let body = {};

      if (studentDetails.branchID !== "") {
        body = { departmentId: studentDetails.branchID };
      }

      let reCaptchaToken = "";
      if (!executeRecaptcha) {
      } else {
        reCaptchaToken = await executeRecaptcha("yourAction");
      }

      await verifyDetails(body, reCaptchaToken, token, setOpenSB, setIsLoading);
    }
  };

  useEffect(() => {
    if (openSB.severity === "success") {
      let participantDetails = JSON.parse(
        localStorage.getItem("participantDetails")
      );
      localStorage.setItem(
        "participantDetails",
        JSON.stringify({ ...participantDetails, isProfileConfimed: true })
      );
      const timer = setTimeout(() => navigate("/profile"), 500);
      return () => clearTimeout(timer);
    } else if (openSB.severity === "error" && openSB.status === 400) {
      setMessageModal({
        open: true,
        title: "Session Ended",
        message: "Session ended. Please log back in again to continue!",

        yesFunc: () => {
          localStorage.removeItem("participantDetails");
          navigate("/");
        },
      });
    }
  }, [openSB]);

  const [modalOpen, setModalOpen] = useState(false);
  const [messageModal, setMessageModal] = useState({
    open: false,
    title: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div
        className="marathon_bg"
        style={{ overscrollBehavior: "none", overflowY: "scroll" }}
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
        <div className="FrostedEffect">
          {!isOnline ? (
            <SnackbarComponent
              open={SnackbarOpen}
              onClose={handleSnackbarClose}
              message={SnackbarMessage}
              severity={SnackbarSeverity}
            />
          ) : (
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              open={openSB.open}
              autoHideDuration={6000}
              onClose={handleCloseSB}
              key={"bottom"}
            >
              <Alert
                onClose={handleCloseSB}
                severity={openSB.severity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {openSB.message}
              </Alert>
            </Snackbar>
          )}

          <Box
            sx={{
              [theme.breakpoints.down("sm")]: {
                overflow: "auto",
              },
            }}
          >
            <div
              className="test1"
              style={{
                [theme.breakpoints.down("sm")]: {
                  maxWidth: 358,

                  borderRadius: "10px",
                  overflow: "auto",
                },
              }}
            >
              {/* <div
                onClick={handleBackButtonClick}
                style={{
                  cursor: "pointer",
                }}
              >
                <Button
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "40px",
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  Go Home
                </Button>
              </div> */}

              <Box
                component="img"
                sx={{
                  height: 66,
                  width: 66,
                  position: "relative",
                }}
                alt="NITTLogo"
                //src="https://i.postimg.cc/MZstWYNF/nittlogo.png"
                src="image/logo.png"
              />
              <LogoutModal open={modalOpen} setOpen={setModalOpen} />

              <MessageModal modal={messageModal} setModal={setMessageModal} />

              {/* <div
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "40px",
                  width: "20px",
                  color: "#252733",
                  opacity:'0.6',
                  cursor: "pointer",
                }}
              >
                <LogoutIcon
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
              </div> */}

              <Typography
                sx={{
                  pt: 0.6,
                  fontWeight: 700,
                  fontSize: 17,
                  fontFamily: "Poppins",
                  color: "#252733",
                  alignItems: "center",
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
              <Typography
                sx={{
                  pt: 1.8,
                  fontWeight: 700,
                  fontSize: 20.5,
                  fontFamily: "Poppins",
                  color: "#1254C0",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "20px",
                    lineHeight: "22px",
                    textAlign: "center",
                    marginTop: "5%",
                  },
                }}
              >
                Review Your Details
              </Typography>
              <Box
                sx={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: 1,
                }}
              >
                <Typography
                  sx={{
                    pt: 3.3,
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Poppins",
                    color: "#1254C0",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "13px",
                      lineHeight: "15px",
                    },
                  }}
                >
                  NAME
                </Typography>
              </Box>
              <TextField
                disabled
                id="name"
                label={studentDetails.name}
                variant="outlined"
                fullWidth
                required
                size="small"
              />
              <Box
                sx={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: 1,
                }}
              >
                <Typography
                  sx={{
                    pt: 3,
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Poppins",
                    color: "#1254C0",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "13px",
                      lineHeight: "15px",
                    },
                  }}
                >
                  ROLL NO
                </Typography>
              </Box>
              <TextField
                disabled
                id="roll-no"
                label={studentDetails.rollNo}
                variant="outlined"
                fullWidth
                required
                size="small"
              />
              <Box
                sx={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: 1,
                }}
              >
                <Typography
                  sx={{
                    pt: 3.3,
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Poppins",
                    color: "#1254C0",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "13px",
                      lineHeight: "15px",
                    },
                  }}
                >
                  DEPARTMENT
                </Typography>
              </Box>
              <TextField
                disabled={branches.length===0}
                id="name"
                value={studentDetails.department}
                variant="outlined"
                fullWidth
                required
                size="small"
                onClick={handleMenuClick}
              />
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={menuAnchor}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    maxHeight: 216,
                    width: "20ch",
                  },
                }}
              >
                {branches.map((option) => (
                  <MenuItem
                    key={option.department}
                    onClick={() => {
                      setStudentDetails({
                        ...studentDetails,
                        department: option.department,
                        branchID: option._id,
                      });
                      handleMenuClose();
                    }}
                  >
                    {option.department}
                  </MenuItem>
                ))}
              </Menu>

              <div
                style={{
                  margin: "auto",
                  height: "10px",
                  position: "relative",
                  top: "25px",
                }}
              >
                {isLoading && <CircularProgress />}
              </div>
              <div className="review-buttons" style={{ marginTop: "40px" }}>
                <StyledButton
                  variant="contained"
                  onClick={handleSubmitButtonClick}
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
                      marginTop: "15%",
                      marginBottom: "2%",
                    },
                  }}
                  // disable={isLoading}
                >
                  <span style={{ padding: 8, width: 50 }}>Yes</span>
                </StyledButton>
                <StyledButton
                  variant="contained"
                  onClick={handleBackButtonClick}
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
                      marginTop: "15%",
                      marginBottom: "2%",
                    },
                  }}
                  // disable={isLoading}
                >
                  <span style={{ padding: 8, width: 50 }}>No</span>
                </StyledButton>
              </div>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2.8,
                    justifyContent: "flex-end",
                    [theme.breakpoints.down("xs")]: {
                      // display:"inline-block"
                    },
                  }}
                >
                  <Typography
                    style={{
                      display: "inline-block",
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
                      display: "inline-block",
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
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

const ReviewDetailsPage = () => {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true }}
    >
      <ReviewDetails />
    </GoogleReCaptchaProvider>
  );
};

export default ReviewDetailsPage;
