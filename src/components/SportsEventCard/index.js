import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import "../../App.css";
import { sponsorCardsize } from "../../utils/UI_Constants";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import eventAPiCall from "../../pages/EventDescription/eventApiCall";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      boxShadow: "0 0 5px 2px rgba(220,207,60,0.3)",
      opacity: 1,
    },
    opacity: 0.9,
  },
});
const SportsEventCard = ({ cardText, cardImage, handleButtonClick }) => {
  const [eventData, setEventData] = useState([
    {
      name: "",
      matches: [],
      __v: 1,
    },
  ]);

  useEffect(() => {
    async function apiCall() {
      const response = await eventAPiCall();
      setEventData(response);
    }
    apiCall();
  }, []);

  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Box
        className={classes.card}
        sx={{
          borderRadius: "10px",
          marginBottom: "65px",
          marginRight: {
            xs: "0px",
            sm: "0px",
            md: "24px",
          },
          marginLeft: {
            xs: "0px",
            sm: "0px",
            md: "24px",
          },
          height: {
            xs: "27vh",
            sm: "32vh",
            md: "27vh",
          },
          width: {
            xs: "44vw",
            sm: "30vw",
            md: "18vw",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `url(${cardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardContent
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            style={{
              marginTop: "15px",
              marginBottom: "7px",
              color: "#ffffff",
              fontFamily: "Poppins",
              fontWeight: 900,
              fontSize: "20px",
              lineHeight: "30px",
              opacity: 1,
            }}
          >
            {cardText}
          </Typography>
          <Box
            component="div"
            onClick={handleButtonClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "flex-end",
              width: "50%",
              padding: {
                xs: "6px 4px",
                sm: "8px 10px",
                md: "8px 10px",
              },
              background: "#3C3C43",
              borderRadius: "8px",
              marginTop: "80px",
              cursor: "pointer",
              opacity: 1,
            }}
          >
            <Typography
              style={{}}
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: {
                  xs: "8px",
                  sm: "12px",
                  md: "12px",
                },
                lineHeight: "15px",
                color: "#FFFFFF",
                alignItems: "center",
              }}
            >
              View Details
            </Typography>
          </Box>
        </CardContent>
      </Box>
      {/* <Card
        className={classes.card}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#0E2E60",
          margin: 0,
          height: {
            xs: "25vh",
          },
          width: {
            xs: "40vw",
            sm: "30vw",
            md: "20vw",
          },
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={cardImage}
          sx={{ width: 90, height: 90, marginTop: 3 }}
        />
        <CardContent sx={{ padding: 0, margin: 0, marginTop: 2 }}>
          <Typography
            variant="p"
            component="p"
            sx={{
              textAlign: "center",
              color: "#AED6F1",
              fontSize: sponsorCardsize,
              lineHeight: "150%",
              fontFamily: "Poppins",
              fontWeight: 400,

              margin: 0,
              marginTop: 5,
              padding: 0,
              marginBlock: 0,
            }}
          >
            {cardText}
          </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default SportsEventCard;
