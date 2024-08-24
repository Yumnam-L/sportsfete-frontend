import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Fixture from "../Fixtures";
import Prediction from "../../pages/Prediction";

import { useEffect } from "react";
import PastFixtures from "./pastFixtures";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


const EventsDescriptionTabNavigator = (props) => {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;

  const [value, setValue] = React.useState(0);
  const [past, setPast] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const name = props.eventName;
  useEffect(() => {
    const token = localStorage.getItem("participantDetails")
      ? JSON.parse(localStorage.getItem("participantDetails")).token
      : null;

    async function apiCall() {
      const response = await PastFixtures(name, token, setPast);
      // console.log("anme" + response.name);
    }

    apiCall();
  }, [name]);

  return (
    <Box sx={{ width: "80%", marginTop: "5rem", marginBottom: "5rem" }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="About"
            style={{
              fontFamily: "Poppins",
              margin: "auto",
              fontSize: { xs: "2vh", sm: "4vh", md: "4vh" },
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          />
          <Tab
            label="Results"
            style={{
              fontFamily: "Poppins",
              margin: "auto",
              fontSize: { xs: "2vh", sm: "4vh", md: "4vh" },
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          />
          <Tab
            label="Fantasy League"
            style={{
              fontFamily: "Poppins",
              margin: "auto",
              fontSize: { xs: "2vh", sm: "3vh", md: "4vh" },
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
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
              top: "1vh",
            }}
          />
          Past Matches
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
          {past.length == 0 ? (
            <Typography
              style={{
                color: "white",
                fontSize: "3vh",
                marginTop: "4vh",
                fontFamily: "Poppins",
              }}
            >
              No past matches to display
            </Typography>
          ) : (
            <>
              {past.map((item) => (
                <Fixture
                  dateTime={item.dateTime}
                  team1={item.team1}
                  team2={item.team2}
                  desc={
                    item.winner === "NONE"
                      ? "Result yet to be declared"
                      : item.winner === "DRAW"
                      ? "Match Drawn"
                      : `${item.winner} won the match`
                  }
                  cardcolor={"#120831"}
                />
              ))}
            </>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GoogleReCaptchaProvider
          reCaptchaKey={SITE_KEY}
          scriptProps={{ async: true }}
        >
          <Prediction event={props.eventName} />
        </GoogleReCaptchaProvider>
      </TabPanel>
    </Box>
  );
};

export default EventsDescriptionTabNavigator;

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
