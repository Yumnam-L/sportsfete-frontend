import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

import Footer from "../Footer";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import { useTheme } from "@material-ui/core/styles";

import GetMatchAPI, {
  AddMatchAPI,
  DeleteMatchAPI,
  UpdateMatchAPI,
  UpdateStatusAPI,
  WinnerAPI,
  GetNotificationApi,
  CreateNotificationApi,
  UpdateNotificationApi,
  DeleteNotificationApi,
} from "./api";

import EventCard, { NotificationCard } from "./EventCard";

import CreateNotificationModal from "../../components/EventCoord/CreateNotification"
import UpdateNotificationModal from "../../components/EventCoord/UpdateNotification"
import DeleteNotificationModal from "../../components/EventCoord/DeleteNotification"
import CreateMatchModal from "../../components/EventCoord/CreateMatch"
import UpdateMatchModal from "../../components/EventCoord/UpdateMatch"
import WinnerModal from "../../components/EventCoord/Winner"
import DeleteMatchModal from "../../components/EventCoord/DeleteMatch"
import UpdateStatusModal from "../../components/EventCoord/UpdateStatus"


// import SnackbarComponent from "../../components/SnackBar";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

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

const EventCoord = () => {
  const [openSB, setOpenSB] = useState({
    open: false,
    message: "",
    severity: "info",
    loading: true,
  });

  useEffect(() => {
    if (openSB.severity === "info") {
      const token = localStorage.getItem("participantDetails")
        ? JSON.parse(localStorage.getItem("participantDetails")).token
        : null;
      GetMatchAPI(setOpenSB, token, setMatches);
    }
  }, [openSB]);

  useEffect(() => {
    if (openSB.severity === "info") {
      const token = localStorage.getItem("participantDetails")
        ? JSON.parse(localStorage.getItem("participantDetails")).token
        : null;
      GetNotificationApi(setOpenSB, token, setNotificaitons);
    }
  }, [openSB]);

  const [matches, setMatches] = useState([]);
  const [notifications, setNotificaitons] = useState([]);

  const [openFormModal, setOpenFormModal] = useState("");
  const theme = useTheme();

  const handleCloseSB = () => {
    setOpenSB({ ...openSB, open: false, loading: false });
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedNotification, setSelectedNotification] = useState({});

  const location = useLocation();

  const name = location.state.item;

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
          {name}
        </Typography>
        <Box
          sx={{
            border: "rgba(37,42,64,1) solid 5px",
            margin: "50px auto",
            width: "80%",
          }}
        >
          <Grid
            container
            sx={{ padding: "80px 10px", width: "100%", margin: "auto" }}
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
                setOpenFormModal("Create Notification");
              }}
            >
              <span>Create Notification</span>
            </StyledButton>
          </Grid>

          <Grid
            container
            sx={{ paddingBottom: "80px", width: "80%", margin: "auto" }}
          >
            {notifications &&
              notifications.map((notification, index) => {
                return (
                  <NotificationCard
                    key={index}
                    notification={notification}
                    setOpenFormModal={setOpenFormModal}
                    setSelectedNotification={setSelectedNotification}
                  />
                );
              })}
          </Grid>
        </Box>
        <Box
          sx={{
            border: "rgba(37,42,64,1) solid 5px",
            margin: "50px auto",
            width: "80%",
          }}
        >
          <Grid
            container
            sx={{ padding: "80px 10px", width: "100%", margin: "auto" }}
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
                setOpenFormModal("Create Event");
              }}
            >
              <span>Create Event</span>
            </StyledButton>
          </Grid>

          <Grid
            container
            sx={{ paddingBottom: "80px", width: "80%", margin: "auto" }}
          >
            {matches &&
              matches.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    event={event}
                    setOpenFormModal={setOpenFormModal}
                    setSelectedEvent={setSelectedEvent}
                  />
                );
              })}
          </Grid>
        </Box>
        {openFormModal === "Create Notification" && (
          <CreateNotificationModal
            open={openFormModal}
            setOpen={setOpenFormModal}
            api={CreateNotificationApi}
            setOpenSB={setOpenSB}
            token={
              localStorage.getItem("participantDetails")
                ? JSON.parse(localStorage.getItem("participantDetails")).token
                : null
            }
            executeRecaptcha={executeRecaptcha}
          />
        )}
        {openFormModal === "Create Event" && (
          <CreateMatchModal
            open={openFormModal}
            setOpen={setOpenFormModal}
            api={AddMatchAPI}
            setOpenSB={setOpenSB}
            token={
              localStorage.getItem("participantDetails")
                ? JSON.parse(localStorage.getItem("participantDetails")).token
                : null
            }
            executeRecaptcha={executeRecaptcha}
          />
        )}
        {selectedEvent && (
          <>
            {openFormModal === "Update Event" && (
              <UpdateMatchModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={UpdateMatchAPI}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                event={selectedEvent}
              />
            )}
            {openFormModal === "Delete Event" && (
              <DeleteMatchModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={DeleteMatchAPI}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                event={selectedEvent}
              />
            )}
            {openFormModal === "Update Status" && (
              <UpdateStatusModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={UpdateStatusAPI}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                event={selectedEvent}
              />
            )}
            {openFormModal === "Winner" && (
              <WinnerModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={WinnerAPI}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                event={selectedEvent}
              />
            )}
          </>
        )}
        {selectedNotification && (
          <>
            {openFormModal === "Update Notification" && (
              <UpdateNotificationModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={UpdateNotificationApi}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                notification={selectedNotification}
              />
            )}
            {openFormModal === "Delete Notification" && (
              <DeleteNotificationModal
                open={openFormModal}
                setOpen={setOpenFormModal}
                api={DeleteNotificationApi}
                setOpenSB={setOpenSB}
                token={
                  localStorage.getItem("participantDetails")
                    ? JSON.parse(localStorage.getItem("participantDetails"))
                        .token
                    : null
                }
                executeRecaptcha={executeRecaptcha}
                notification={selectedNotification}
              />
            )}
          </>
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
      </Box>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

const EventCoordPage = () => {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true }}
    >
      <EventCoord />
    </GoogleReCaptchaProvider>
  );
};

export default EventCoordPage;
