import React from "react";
import { Typography, Box, Button, IconButton, styled } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)({
  backgroundColor: "#3D4FE1",
  color: "#ffffff",
  fontWeight: 500,
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "13px 13px 13px 13px",
  fontSize: "12px",
  borderRadius: 10,
});

export const LiveEventCard = ({ registrationTitle, eventTime, regDeadline}) => {
  const navigate = useNavigate();

  function handleClick() {
    if(localStorage.getItem("participantDetails")){
      let details = JSON.parse(
        localStorage.getItem("participantDetails")
      );
      if (details.isMarathonRegistered === true) {
        navigate("/successfullyRegistered");
      } else if (details.isProfileConfimed === true) {
        navigate("/confirmRegister");
      } else {
        navigate("/reviewDetails");
      }
    }
    else{
      navigate("/login");
    }
  }
  return (
    <Box
      className="live_event"
      sx={{
        width: { xs: "80%", sm: "60%", md: "80%" },
        height: { xs: "auto", sm: "auto", md: "auto" },
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 20px 20px 0px",
        margin: "0 auto",
        borderLeftWidth: "9px",
        borderLeftColor: "#3D4FE1",
        borderLeftStyle: "solid",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "10px",
          marginLeft: "15px",
        }}
      >
        {/* <IconButton sx={{ color: "#3D4FE1" }}>
          <InfoIcon fontSize="large" />
        </IconButton> */}
        <div>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: { xs: "10px", sm: "14px", md: "22px" },
              color: "#ffffff",
              fontWeight: 510,
              fontFamily: "Poppins",
              marginLeft: "13px",
            }}
          >
            {registrationTitle}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "18px" },
              paddingTop: "5px",
              color: "#E8E8F3",
              fontWeight: 300,
              fontFamily: "Poppins",
              marginLeft: "13px",
            }}
          >
            {eventTime}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "18px" },
              paddingTop: "5px",
              color: "#E8E8F3",
              fontWeight: 300,
              fontFamily: "Poppins",
              marginLeft: "13px",
            }}
          >
            {regDeadline}
          </Typography>
        </div>
      </div>
      <StyledButton variant="contained" onClick={handleClick}>
        <span style={{ marginRight: "5px" }}>Register</span>
        <ArrowForwardIcon fontSize="small" />
      </StyledButton>
    </Box>
  );
};
