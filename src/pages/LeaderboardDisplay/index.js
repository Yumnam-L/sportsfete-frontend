import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import { ArrowUpward } from "@mui/icons-material";

// import LeaderBoardPositions from "../../components/LeaderBoardPositions";
import PositionHeader from "../../components/LeaderBoardPositionHeader";
import Footer from "../Footer";

import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";

import fetchLeaderboardData from "./fetchLeaderboardData.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      //boxShadow: "0px 0px 4px rgba(220,207,60,0.3)",
      opacity: 1,
    },
    opacity: 0.8,
  },
});

function LeaderboardDisplay() {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchLeaderboardData(setLeaderBoardData, setIsLoading);
  }, []);
  return (
    <Box
      style={{
        background: "rgba(0,15,34,1)",
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
        Leaderboard
      </Typography>

      {!isLoading && leaderBoardData.length>=3 && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: { xs: "90%", sm: "80%", md: "65%", lg: "50%" },
              margin: "auto",
              paddingBottom: "2rem",
              paddingTop: "2rem",
            }}
          >
            <Box style={{ width: "33.33%" }}>
              <PositionHeader
                num={2}
                dept={leaderBoardData[1][0]}
                points={leaderBoardData[1][1]}
              />
            </Box>
            <Box style={{ width: "33.33%" }}>
              <PositionHeader
                num={1}
                dept={leaderBoardData[0][0]}
                points={leaderBoardData[0][1]}
              />
            </Box>
            <Box style={{ width: "33.33%" }}>
              <PositionHeader
                num={3}
                dept={leaderBoardData[2][0]}
                points={leaderBoardData[2][1]}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: { xs: "90%", sm: "80%", md: "65%", lg: "50%" },
              margin: "auto",
              paddingBottom: "5rem",
              marginTop: "0rem",
              flexDirection: "column",
            }}
          >
            {leaderBoardData.map((data, i) => (
              <>
                {i > 2 && (
                  <LeaderBoardPositions
                    position={i + 1}
                    deptName={data[0]}
                    number={data[1]}
                  />
                )}
              </>
            ))}
          </Box>
        </>
      )}

      <div id="footer">
        <Footer />
      </div>
    </Box>
  );
}

export default LeaderboardDisplay;

function LeaderBoardPositions(props) {
  //const theme = useTheme();
  // const [open, setOpen] = useState(false);
  const Navigation = useNavigate();

  const handleButtonClick = () => {
    const details = {
      position: props.position,
      department: props.deptName,
      points: props.number,
    };
    localStorage.setItem("deptDetails", JSON.stringify(details));
    Navigation("/leaderBoardDescription");
  };
  const classes = useStyles();
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
          cursor: "pointer",
        }}
        onClick={handleButtonClick}
      >
        <Avatar
          style={{
            fontFamily: "'ABeeZee', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            fontFamily: "Poppins",
            lineHeight: "24px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            color: "#000000",
          }}
        >
          {props.position}
        </Avatar>
        <Typography
          style={{
            width: "177px",
            height: "24px",
            left: "16px",
            paddingLeft: "1rem",
            top: "13px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            display: "flex",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          {props.deptName}
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              width: "95px",
              height: "44px",
              left: "0px",
              top: "6px",
              marginTop: "2vh",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {props.number} points
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "ABeeZee",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "0.8rem",
                lineHeight: "14px",
                display: "flex",
                alignItems: "center",
                color: "#FFFFFF",
                margin: "auto",
                cursor: "pointer",
              }}
              // onClick={handleButtonClick}
              // onClick={() => setOpen(!open)}
            >
              Details
              <ArrowUpward
                sx={{ transform: "rotate(45deg)", fontSize: "0.8rem" }}
              />
            </Typography>
          </div>
        </div>
      </Box>
    </Grid>
  );
}
