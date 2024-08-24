import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Grid, Button } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@mui/styles";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      //boxShadow: "0px 0px 4px rgba(220,207,60,0.3)",
      opacity: 1,
    },
    opacity: 0.8,
  },
}));

function NotificationCard({
  notification,
  setOpenFormModal,
  setSelectedNotification,
}) {
  const classes = useStyles();
  const handleClick = (name) => {
    setSelectedNotification(notification);
    setOpenFormModal(name);
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
          textAlign: "center",
          overflowX: "hidden",
          position: "relative",
          padding: "50px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FFFFFF",
          }}
        >
          {notification.text}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "15px",
            margin:'20px',
            flexDirection: {
              sm: "column",
              md: "row",
            },
          }}
        >
          <EditIcon
            sx={{ color: "#1578fc", cursor: "pointer" }}
            onClick={() => {
              handleClick("Update Notification");
            }}
          />
          <DeleteIcon
            sx={{ color: "#1578fc", cursor: "pointer" }}
            onClick={() => {
              handleClick("Delete Notification");
            }}
          />
         
        </Box>
      </Box>
    </Grid>
  );
}

function EventsForDeptCoord({ event, setOpenFormModal, setSelectedEvent }) {
  const classes = useStyles();
  const handleClick = (name) => {
    setSelectedEvent(event);
    setOpenFormModal(name);
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
          textAlign: "center",
          overflowX: "hidden",
          position: "relative",
          padding: "50px",
        }}
      >
        <div>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            {event.name}
          </Typography>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            {event.dept_1_name} vs {event.dept_2_name}
            <br />
            {event.dept_1_score} | {event.dept_2_score}
            <br />
            status : {event.status}
            <br />
            time : {moment(event.time).format("DD-MM-YYYY HH:mm")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: {
                sm: "column",
                md: "row",
              },
            }}
          >
            <BtnMaterial
              text="update"
              onClick={() => {
                handleClick("Update Event");
              }}
            />
            <BtnMaterial
              text="delete"
              onClick={() => {
                handleClick("Delete Event");
              }}
            />
            <BtnMaterial
              text="update status"
              onClick={() => {
                handleClick("Update Status");
              }}
            />
            <BtnMaterial
              text="announce winner"
              onClick={() => {
                handleClick("Winner");
              }}
            />
          </Box>
        </div>
      </Box>
    </Grid>
  );
}

export default EventsForDeptCoord;
export { NotificationCard };

const BtnMaterial = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        //   width: "150px",
        margin: "auto",
        backgroundColor: "#1578fc",
        color: "white",
        "&:hover": {
          backgroundColor: "#5B80BB",
        },
        height: "48px",
        boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
        borderRadius: "8px",
        marginTop: "20px",
      }}
      onClick={onClick}
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
          margin: "12px 24px",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};
