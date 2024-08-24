import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import { ArrowUpward } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import ParticipantModal from "../EventCoordModal";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      //boxShadow: "0px 0px 4px rgba(220,207,60,0.3)",
      opacity: 1,
    },
    opacity: 0.8,
  },
}));

function EventsForDeptCoord(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // State for storing the selected event
  const [selectedEvent, setSelectedEvent] = useState("");

  // Handler for opening the modal and setting the selected event
  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
    // console.log("opened");
  };

  // Handler for closing the modal
  const handleClose = () => {
    setOpen(false);
    // console.log("closed");
  };
  
  return (
    <Grid container>
      <Box
        className={classes.card}
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "rgba(37,42,64,1)",
          border: "1px solid rgba(0, 0, 0, 0.07)",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          marginBottom: "1rem",
          textAlign: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Typography
          style={{
            width: "177px",
            height: "24px",
            left: "16px",
            top: "13px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            display: "flex",
            alignItems: "center",
            marginLeft: "35vw",
            color: "#FFFFFF",
            alignSelf:'center',
            marginLeft: "10vw",
          }}
        >
          {props.EventName}
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }} onClick={props.onSeeParticipants}>
          <Typography
            sx={{
              width: "95px",
              height: "44px",
              left: "0px",
              top: "3px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#FFFFFF",
              marginRight: "5vw",
              cursor: "pointer",
              [theme.breakpoints.down("sm")]: {
                fontSize: "15px",
                marginRight: "2vw",
              },
            }}
          >
            See Participants
          </Typography>
        </div>
      </Box>
      <ParticipantModal

        open={open}
        onClose={handleClose}
        event={selectedEvent}
        participants={props.participants}
      />
    </Grid>
  );
}

export default EventsForDeptCoord;
