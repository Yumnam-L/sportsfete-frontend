import { Typography, Button, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../App.css";
import {
  descriptionBig,
  descriptionMedium,
  titleBig,
  titleMedium,
  titleSmall,
} from "../../utils/UI_Constants";
function TShirtReg() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#242328",
        paddingTop: "4vh",
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          color: "#f6f6f6",
          fontSize: {
            xs: titleSmall,
            sm: titleMedium,
            md: titleBig,
          },
          fontWeight: 700,
          fontFamily: "Poppins",
          textAlign: "center",
          lineHeight: "122%",
        }}
      >
        T-Shirt Registration
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            lineHeight: "24px",
            letterSpacing: "0.7px",
            textAlign: "center",
            height: "60px",
            width: "80vw",
            color: "#FFFFFF",
            fontSize: {
              xs: descriptionMedium,
              sm: descriptionMedium,
              md: descriptionBig,
            },
            fontFamily: "Poppins",
            fontWeight: 400,
            marginTop: "4vh",
            marginBottom: "40px",
          }}
        >
          Get ready to gear up for Sportsfete, the exciting inter-departmental
          sports fest of NIT Trichy. Register to grab your Sportsfete T-shirts
          and root for your department while competing in your favorite sports
          and events. Don't miss out on this opportunity!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "5vh",
        }}
      >
        <Chip
          label="Cost of 1 T-shirt: Rs250"
          variant="outlined"
          sx={{
            backgroundColor: "#1578fc",
            color: "white",
            marginRight: "5vw",
            fontSize: { xs: "10px", sm: "14px", md: "25px" },
            fontFamily: "Poppins",
            padding: 2,
            marginTop: { xs: "10vh", sm: "0vh", md: "0vh" },
          }}
        />
        <Chip
          label="Cost of 3 T-shirts: Rs700"
          variant="outlined"
          sx={{
            backgroundColor: "#1578fc",
            color: "white",
            fontSize: { xs: "10px", sm: "14px", md: "25px" },
            fontFamily: "Poppins",
            padding: 2,
            marginTop: { xs: "10vh", sm: "0vh", md: "0vh" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
          paddingBottom: "2vh",
        }}
      >
        <Box
          component="img"
          src="image/Tshirt.jpg"
          alt="logo"
          sx={{
            height: { xs: 200, sm: 300, md: 500 },
            width: { xs: 300, sm: 400, md: 600 },
            border: "5px solid white",
          }}
        ></Box>
      </Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Poppins",
          paddingBottom: "2vh",
        }}
      >
        Tshirt Design
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: { xs: "2vh", sm: "5vh", md: "10vh" },
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "10vh",
        }}
      >
        <a
          href="https://heylink.me/TshirtSF23/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "150px",
              margin: "auto",
              backgroundColor: "#1578fc",
              color: "white",
              "&:hover": {
                backgroundColor: "#5B80BB",
              },
              height: "48px",
              boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 800,
                lineHeight: "20px",
                letterSpacing: "0.2px",
                textAlign: "center",
                height: "20px",
                width: "100%",
                maxWidth: "496px",
                marginTop: "15px",
                marginLeft: "24px",
                marginRight: "24px",
                marginBottom: "13px",
              }}
            >
              REGISTER{" "}
            </Typography>
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default TShirtReg;
