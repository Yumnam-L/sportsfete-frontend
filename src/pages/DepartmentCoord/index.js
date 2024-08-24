import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  styled,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import ParticipantModal from "../../components/EventCoordModal";
import EventsForDeptCoord from "../../components/DeptCoordEvent";
import Footer from "../Footer";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import { useTheme } from "@material-ui/core/styles";
import eventDeptCoord from "./DeptCoordGet";

import DeptCoordRegisterModal, {InvalidModal} from "../../components/DeptCoordRegisterModal";
import DeptRegisterApi from "./deptRegisterApi";
import SnackbarComponent from "../../components/SnackBar";


import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { invalid } from "moment";

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
function DeptCoord(props) {
  const [eventsData, setEventsData] = useState();
  const [invalidRoll, setInvalidRoll] = useState([]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  useEffect(() => {
    const token = localStorage.getItem("participantDetails")
      ? JSON.parse(localStorage.getItem("participantDetails")).token
      : null;
    //console.log("This is token:" + token);
    async function apiCall() {
      const response = await eventDeptCoord(
        setEventsData,
        token,
        setSnackbarMessage,
        setSnackbarOpen
      );
    }
    apiCall();
  }, []);
  //console.log("This is eventsData:" + eventsData);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("failure");

  const [open, setOpen] = useState(false);
  const [invalidRollModal, setInvalidRollModal] = useState(false);
  
  useEffect(()=>{
    if(invalidRoll.length > 0){
      setInvalidRollModal(true)
    }
  },[invalidRoll])

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openFormModal, setOpenFormModal] = useState("");
  const theme = useTheme();

  const [openSB, setOpenSB] = useState(false);

  const handleCloseSB = () => {
    setOpenSB({ ...openSB, open: false, loading: false });
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

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
            paddingTop: {
              xs: "22vh",
              sm: "22vh",
              md: "22vh",
            },
          }}
        >
          Department Details
        </Typography>
        <Grid
          container
          sx={{ padding: "80px 10px", width: "80%", margin: "auto" }}
        >
          <StyledButton
            variant="contained"
            sx={{
              width: "20%",
              margin: "auto",
              backgroundColor: "rgba(0,0,0,0)",
              border: "2px solid #1e87f0",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#1e87f0",
              },
              height: "48px",
              boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
              borderRadius: "8px",
              marginBottom: "29px",
              marginTop: "15px",
              [theme.breakpoints.down("sm")]: {
                width: "55%",
                height: "40px",
                marginTop: "5%",
                marginBottom: "2%",
              },
            }}
            onClick={() => {
              setOpenFormModal("Register");
            }}
          >
            <span>Register</span>
          </StyledButton>
          <StyledButton
            variant="contained"
            sx={{
              width: "20%",
              margin: "auto",
              backgroundColor: "rgba(0,0,0,0)",
              border: "2px solid #1e87f0",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#1e87f0",
              },
              height: "48px",
              boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
              borderRadius: "8px",
              marginBottom: "29px",
              marginTop: "15px",
              [theme.breakpoints.down("sm")]: {
                width: "55%",
                height: "40px",
                marginTop: "5%",
                marginBottom: "2%",
              },
            }}
            onClick={() => {
              setOpenFormModal("Deregister");
            }}
          >
            <span>Deregister</span>
          </StyledButton>
        </Grid>
        {openFormModal !== "" && (
          <DeptCoordRegisterModal
            open={openFormModal}
            setOpen={setOpenFormModal}
            api={DeptRegisterApi}
            setOpenSB={setOpenSB}
            token={
              localStorage.getItem("participantDetails")
                ? JSON.parse(localStorage.getItem("participantDetails")).token
                : null
            }
            executeRecaptcha={executeRecaptcha}
            setInvalidRolls={setInvalidRoll}
          />
        )}
        {invalidRollModal && (
          <InvalidModal open={invalidRollModal} setOpen={setInvalidRollModal} invalidRolls={invalidRoll}/>
        )}
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

        <Grid
          container
          sx={{ paddingBottom: "80px", width: "80%", margin: "auto" }}
        >
          {eventsData &&
            eventsData.map((event, index) => {
              return (
                <EventsForDeptCoord
                  key={index}
                  EventName={event[0]}
                  participants={event[1]}
                  onSeeParticipants={() => handleOpen(event)}
                />
              );
            })}
          {selectedEvent && (
            <ParticipantModal
              open={open}
              onClose={handleClose}
              eventName={selectedEvent[0]}
              participants={selectedEvent[1]}
            />
          )}
          <SnackbarComponent
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            severity={snackbarSeverity}
          />
        </Grid>
      </Box>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

const DeptCoordPage = () => {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true }}
    >
      <DeptCoord />
    </GoogleReCaptchaProvider>
  );
};

export default DeptCoordPage;
