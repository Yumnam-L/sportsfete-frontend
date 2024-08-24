import React, { useState } from "react";
import { Card, CardContent, Avatar, Box, Typography } from "@mui/material";
import "../../App.css";
import { Navigate } from "react-router-dom";

const SponsorCard = ({ id, image, imgWidth, imgHeight, text,url }) => {
  const handleMouseEnter = () => {
    setCardDimensions({
      height: {
        xs: "25vh",
      },
      width: {
        xs: "40vw",
        sm: "30vw",
        md: "20vw",
      },
      backgroundColor: "transparent",
      border: "3px solid rgba(220,207,60,0.3)",
      scale: 1.05,
      
    });
  };

  const handleMouseLeave = () => {
    setCardDimensions({
      height: {
        xs: "25vh",
      },
      width: {
        xs: "40vw",
        sm: "30vw",
        md: "20vw",
      },
      backgroundColor: "transparent",
      border: "none",
      scale: 1,
    });
  };

  const [cardDimensions, setCardDimensions] = useState({
    height: {
      xs: "25h",
    },
    width: {
      xs: "40vw",
      sm: "30vw",
      md: "20vw",
    },
    backgroundColor: "transparent",

    borderColor: "transparent",
    id: id,
    scale: 1,
    border: "none",
  });
  const handleClick = () => {
    window.open(url,'_blank'); // replace with your desired URL
  }

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onClick = {handleClick}
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
        borderWidth: cardDimensions.borderWidth,
        borderColor: cardDimensions.borderColor,
        // margin: 0,
        // height: { xs: "40vh" },
        // width: {
        //   xs: "40vw",
        //   sm: "30vw",
        //   md: "20vw",
        // },
        border: cardDimensions.border,
        transition: "all 0.3s ease-in-out",
        transform: `scale(${cardDimensions.scale})`,
        ":hover":{cursor :"pointer"}
      }}
    >
      <Box
        component="img"
        width={imgWidth}
        height={imgHeight}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "block",
          margin: "0 auto",
        }}
        alt="logo"
        src={image}
      />
      <CardContent sx={{ padding: 0, margin: 0, marginTop: 1 }}>
        <Typography
          variant="p"
          component="p"
          sx={{
            textAlign: "center",
            color: "#AED6F1",
            // fontSize: sponsorCardsize,
            lineHeight: "150%",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize:'22px',
            margin: 0,
            marginTop: 5,
            padding: 0,
            marginBlock: 0,
            marginBottom: '35pxs',
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SponsorCard;
