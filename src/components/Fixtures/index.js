import React from "react";
import { Avatar, Box, Typography, Grid } from "@mui/material";

export default function Fixtures({ dateTime, team1, team2, desc, cardcolor }) {
  return (
    <Box
      bgcolor={cardcolor}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6vh",
        width: { xs: "25vh", sm: "50vh", md: "50vh" },
        height: { xs: "15vh", sm: "30vh", md: "30vh" },
        borderRadius: "1rem",
        flexShrink: "0",
      }}
    >
      <Grid container spacing={1}>
        <Typography
          margin="auto"
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: { xs: "2vh", sm: "3vh", md: "3vh" },
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: { xs: "-2vh", sm: "2vh", md: "2vh" },
          }}
        >
          {dateTime}
        </Typography>

        <Grid item xs={12} display="flex" flexDirection="row" marginTop="20px">
          <Box margin="auto">
            <Avatar
              sx={{ width: 60, height: 60 }}
              variant="square"
              src={require(`../../res/DeptImages/${team1.name}.png`)}
            ></Avatar>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "17px",
                lineHeight: "24px",
                color: "#FFFFFF",
                textAlign: "center",
                marginTop: "0.5vh",
              }}
            >
              {team1.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: { xs: "2.5vh", sm: "3vh", md: "3vh" },
                lineHeight: "2vh",
                color: "#FFFFFF",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              {team1.score}
            </Typography>
          </Box>
          <Typography
            margin="auto"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            VS
          </Typography>
          <Box margin="auto">
            <Avatar
              sx={{ width: 60, height: 60 }}
              variant="square"
              src={require(`../../res/DeptImages/${team2.name}.png`)}
            ></Avatar>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "17px",
                lineHeight: "24px",
                color: "#FFFFFF",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              {team2.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: { xs: "2.5vh", sm: "3vh", md: "3vh" },
                lineHeight: "2vh",
                color: "#FFFFFF",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              {team2.score}
            </Typography>
          </Box>
        </Grid>
        <Typography
          margin="auto"
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: { xs: "2vh", sm: "3vh", md: "3vh" },
            lineHeight: "1vh",
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: { xs: "3vh", sm: "8vh", md: "8vh" },
          }}
        >
          {desc}
        </Typography>
      </Grid>
    </Box>
  );
}
