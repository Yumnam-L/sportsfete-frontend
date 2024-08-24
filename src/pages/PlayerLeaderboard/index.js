import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Grid, Snackbar, useMediaQuery} from "@mui/material";
// import { Snackbar } from "@material-ui/core/Snackbar";
import { useTheme } from "@material-ui/core/styles";
import { ArrowUpward } from "@mui/icons-material";
import Footer from "../Footer";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import fetchLeaderboardData from "./fetchData.js";
import { makeStyles } from "@mui/styles";
import "./player.css";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      opacity: 1,
    },
    opacity: 0.8,
  },
});

function LeaderboardDisplay() {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [openToast, setopenToast] = useState(false);
  useEffect(() => {
    fetchLeaderboardData(
      currentPage,
      setLeaderBoardData,
      setIsLoading,
      setCurrentPage,
      setopenToast
    );
  }, [currentPage]);
  //console.log(leaderBoardData);

  //console.log(`currentpage is ${currentPage}`);

  const handleClose = () => {
    setopenToast(false);
  };

  const classes = useStyles();

  return (
    <Box
      style={{
        background: "rgba(0,15,34,1)",
      }}
    >
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openToast}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Last Page Reached"
      />
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
          fontFamily: "Londrina Outline",
          textAlign: "center",
          paddingTop: {
            xs: "22vh",
            sm: "22vh",
            md: "22vh",
          },
        }}
      >
        Sportsfete Fantasy League <br />{" "}
        <span style={{ fontSize: titleMedium }}>Leaderboard</span>
      </Typography>

      {!isLoading && (
        <>
          <Box
            className={classes.card}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: { xs: "90%", sm: "80%", md: "65%", lg: "50%" },
              margin: "auto",
              paddingBottom: "2rem",
              paddingTop: "2rem",
            }}
          ></Box>
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
                <LeaderBoardPositions
                  position={(currentPage - 1) * 10 + i + 1}
                  name={data[1]["name"]}
                  rollNo={data[1]["rollNo"]}
                  //department={data[1]["department"]}
                  sft={data[1]["sft"]}
                />
              </>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                width: { xs: "90%", sm: "80%", md: "65%", lg: "50%" },
                margin: "auto",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <button
                className="next-button"
                onClick={() => handlePreviousPage(setCurrentPage, currentPage)}
              >
                Previous
              </button>
              <button
                className="next-button"
                onClick={() => handleNextPage(setCurrentPage, currentPage)}
              >
                Next
              </button>
            </Box>
          </Box>
        </>
      )}

      <div id="footer">
        <Footer />
      </div>
    </Box>
  );
}

const handleNextPage = (setCurrentPage, currentPage) => {
  setCurrentPage(currentPage + 1);
};

const handlePreviousPage = (setCurrentPage, currentPage) => {
  if (currentPage === 1) return;
  setCurrentPage(currentPage - 1);
};

export default LeaderboardDisplay;

function LeaderBoardPositions(props) {
  const Navigation = useNavigate();
  const matches = useMediaQuery('(max-width:800px)');

  const handleButtonClick = () => {
    const details = {
      position: props.position,
      name: props.name,
      department: props.department,
      sft: props.sft,
    };
    localStorage.setItem("playerDetails", JSON.stringify(details));
    Navigation("/playerLeaderboard");
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "1rem",
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
              fontSize: matches ? "16px" : "19px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            style={{
              width: "177px",
              height: "24px",
              left: "16px",
              top: "13px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: matches ? "16px" : "19px",
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
              textAlign: "left",
              marginTop: "1rem",
            }}
          >
            {props.rollNo}
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Avatar
            src="image/coins.png"
            sx={{
              width: "60px",
              height: "40px",
              paddingTop: "3px",
            }}
          />
          <Typography
            style={{
              width: "40px",
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
            }}
          >
            {props.sft}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
}
