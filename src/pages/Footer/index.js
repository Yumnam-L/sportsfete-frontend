import {
  Typography,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../App.css";
import {
  footerBottom,
  footerCollegeBig,
  footerCollegeMedium,
  footerCollegeSmall,
  footerEmail,
  footerTitleBig,
  footerTitleMedium,
  footerTitleSmall,
} from "../../utils/UI_Constants";
import { Email, Phone } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#161616",
        textAlign: "center",
        position: "relative",
        paddingBottom: "4vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "3px",
          width: "70vw",
          backgroundColor: "#6B728E",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "3px",
          borderRadius: "3px",
        }}
      />
      <Box
        component="img"
        sx={{
          paddingTop: "30px",
          height: 100,
          width: 100,
        }}
        alt="logo"
        src="image/logo_grey.png"
      />
      <Typography
        sx={{
          fontSize: {
            xs: footerTitleSmall - 7,
            sm: footerTitleMedium,
            md: footerTitleBig - 15,
          },
          fontWeight: 900,
          textAlign: "center",
          color: "#FFFFFF",
          fontFamily: "Poppins",
          lineHeight: "83px",
        }}
      >
        Sports
        <span
          style={{
            fontWeight: 600,
            color: "#f6f6f6",
            fontStyle: "italic",
            lineHeight: "83px",
          }}
        >
          Fete
        </span>
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: footerCollegeSmall - 5,
              sm: footerCollegeMedium,
              md: footerCollegeBig - 5,
            },
            fontWeight: 700,
            textAlign: "center",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            lineHeight: "39px",
          }}
        >
          NIT Trichy
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: footerEmail,
          fontWeight: 300,
          fontStyle: "normal",
          textAlign: "center",
          color: "#F7F30B",
          fontFamily: "Montserrat",
          lineHeight: "39px",
          paddingTop: "40px",
          paddingBottom: "20px",
        }}
      >
        <span style={{}}>
          <IconButton>
            <Phone sx={{ color: "#FFFFFF", width: "30px", height: "30px" }} />
          </IconButton>
        </span>
        Contact Us
      </Typography>
      <Typography
        sx={{
          fontSize: footerEmail,
          fontWeight: 300,
          justifyContent: "center",
          fontStyle: "normal",
          textAlign: "center",
          color: "#F0F0F4",
          fontFamily: "Montserrat",
          lineHeight: "39px",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        Seenuvasa Ramanujam -	+91 93443 55649 <br />
        Keerthivasan - +91 90807 75299 <br />
        J Srikanth -	+91 84894 99099 <br />
        Vasanth	-	+91 88382 79566
      </Typography>
     
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop:'20px' }}
      >
        <a
          href="https://www.facebook.com/SpiderNitt/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
            }}
            alt="logo"
            src="image/facebook.png"
          />
        </a>
        <Box sx={{ width: "45px" }} />
        <a
          href="https://www.instagram.com/sportsfete.nitt/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
            }}
            alt="logo"
            src="image/instagram.png"
          />
        </a>
        <Box sx={{ width: "45px" }} />
        <a
          href="https://www.linkedin.com/company/sportsfete-nit-trichy/?originalSubdomain=in"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
            }}
            alt="logo"
            src="image/linkedin.png"
          />
        </a>
        <Box sx={{ width: "45px" }} />
        <a
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => window.open("mailto: sportfete.nitt@gmail.com")}
        >
          <Box
            sx={{
              height: 30,
              width: 30,
              marginTop: -1,
            }}
          >
            <IconButton aria-label="hyperlink">
              <Email sx={{ color: "#FFFFFF", width: 35, height: 35 }} />
            </IconButton>
          </Box>
          
        </a>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography
          style={{
            fontSize: footerBottom - 4,
            fontWeight: 300,
            fontStyle: "normal",
            textAlign: "center",
            color: "#ffffff",
            fontFamily: "Montserrat",
            lineHeight: "39px",
            paddingTop: "20px",
            paddingBottom: footerBottom,
          }}
        >
          Weaved with 🕸️ by
        </Typography>
        <Typography
          style={{
            fontSize: footerBottom - 4,
            fontWeight: 300,
            fontStyle: "normal",
            textAlign: "center",
            color: "#ffffff",
            fontFamily: "Montserrat",
            lineHeight: "39px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "7px",
          }}
        >
          Spider
        </Typography>
      </Box>
    </Box>
  );
}
export default Footer;
