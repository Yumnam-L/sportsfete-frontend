import React from "react";

import OneSVG from "./Frame 6.svg";
import TwoSVG from "./Frame 7.svg";
import ThreeSVG from "./Frame 8.svg";
import Crown1 from "./Group 1.svg";
import Crown2 from "./Group 2.svg";
import Crown3 from "./Group 3.svg";
import { useNavigate } from "react-router-dom";
import { ArrowUpward } from "@mui/icons-material";

import { Typography, Box } from "@mui/material";

const PositionHeader = ({ num, dept, points }) => {
  const Navigation = useNavigate();

  const handleButtonClick = () => {
    const details = {
      position:num,
      department:dept,
      points: points
    };
    localStorage.setItem("deptDetails", JSON.stringify(details));
    Navigation("/leaderBoardDescription");
  };

  const getSVG = (num) => {
    if (num === 1) return OneSVG;
    if (num === 2) return TwoSVG;
    if (num === 3) return ThreeSVG;
  };

  const getBoxColor = (num) => {
    if (num === 1) return "rgba(255,170,0,1)";
    if (num === 2) return "rgba(192,192,192,1)";
    if (num === 3) return "rgba(255,160,92,1)";
  };

  const getBackgroundColor = (num) => {
    if (num === 1) return "rgba(37,42,64,1)";
    else return "rgba(30,34,55,1)";
  };

  const getPointsColor = (num) => {
    if (num === 1) return "rgba(255,170,0,1)";
    if (num === 2) return "rgba(0,155,214,1)";
    if (num === 3) return "rgba(0,217,95,1)";
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // height: "100%",
      }}
    >
      {num === 1 && (
        <img
          src={Crown1}
          alt={`crown`}
          style={{ width: "25%", paddingBottom: "10px" }}
        />
      )}
      {num === 2 && (
        <img
          src={Crown2}
          alt={`crown`}
          style={{ width: "25%", paddingBottom: "10px" }}
        />
      )}
      {num === 3 && (
        <img
          src={Crown3}
          alt={`crown`}
          style={{ width: "25%", paddingBottom: "10px" }}
        />
      )}
      <img
        src={getSVG(num)}
        alt={`position {$num} card`}
        style={{ width: "70%", zIndex: "2" }}
      />
      <Box
        style={{
          background: getBoxColor(num),
          borderRadius: "5px",
          transform: "rotate(45deg)",
          width: "20%",
          aspectRatio: "1",
          marginTop: "-12.5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-35%",
          zIndex: "2",
        }}
      >
        <span style={{ transform: "rotate(315deg)" }}>{num}</span>
      </Box>
      <Box
        style={{
          width: "100%",
          background: getBackgroundColor(num),
          borderRadius: "30px 30px 0px 0px",
          zIndex: "1",
          cursor:'pointer'
        }}
        onClick={handleButtonClick}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            color: "white",
            padding: "10px 20px",
            marginTop: "45%",
            marginBottom: "0",
            textAlign: "center",
            fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.3rem" },
            fontWeight: "600",
          }}
        >
          {dept}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            color: getPointsColor(num),
            padding: "5px 20px ",
            marginTop: "0",
            textAlign: "center",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" },
            fontWeight: "700",
          }}
        >
          {points} points
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter",
            color: "rgba(155,155,155,1)",
            padding: "0 20px",
            marginTop: {
              xs: num === 1 ? "80px" : "0",
              sm: num === 1 ? "120px" : "0",
            },
            textAlign: "center",
            fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1.0rem" },
            marginBottom: "20px",
            fontWeight: "500",
            cursor:'pointer',
          }}
          // onClick={handleButtonClick}
        >
          Details
          <ArrowUpward
            sx={{
              transform: "rotate(45deg)",
              paddingLeft: "2px",
              fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1.0rem" },
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default PositionHeader;
