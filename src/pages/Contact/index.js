import React, { useState } from "react";
import { Grid, Typography, Card, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../Footer";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardContent } from "@material-ui/core";
const item = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { type: "tween", duration: 0.8 },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.8 },
  },
};
function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#242328",
      }}
      className="body"
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
            sm: "12vh",
            md: "22vh",
          },
        }}
        className="title"
      >
        Contact Us
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 10, md: 3 }}
        columnSpacing={{ xs: 1, sm: 3, md: 1 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        alignSelf="center"
        sx={{
          paddingTop: "8vh",
          paddingBottom: {
            xs: "10vh",
            sm: "15vh",
            md: "30vh",
          },
          paddingLeft: { xs: "10vw", sm: "5vw", md: "4vw" },
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          {ContactCard(
            "https://secure.gravatar.com/avatar/3fa4bac5785d95570c2de3192c23539a?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg",
            "Gokul Raj",
            "Head"
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cards">
          {ContactCard(
            "https://secure.gravatar.com/avatar/3fa4bac5785d95570c2de3192c23539a?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg",
            "Gokul Raj",
            "Head"
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cards">
          {ContactCard(
            "https://secure.gravatar.com/avatar/3fa4bac5785d95570c2de3192c23539a?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg",
            "Gokul Raj",
            "Head"
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cards">
          {ContactCard(
            "https://secure.gravatar.com/avatar/3fa4bac5785d95570c2de3192c23539a?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg",
            "Gokul Raj",
            "Head"
          )}
        </Grid>
      </Grid>
      <div id="footer">
        <Footer />
      </div>
    </Box>
  );

  function ContactCard(image, name, role, linkedin_url, github_url) {
    const [isHover, setIsHover] = useState(false);
    return (
      <motion.div
        variants={item}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <Card
          style={
            isHover
              ? {
                  backgroundImage: `linear-gradient(0deg, #2F3980 0%, rgba(47, 57, 128, 0.1) 100%),url(${image})`,
                  scale: "105%",
                  transition: "0.3s",
                }
              : {}
          }
          sx={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            height: {
              xs: "50vh",
              sm: "40vh",
              md: "50vh",
            },
            width: {
              xs: "80vw",
              sm: "40vw",
              md: "20vw",
            },
          }}
        >
          <div
            style={
              isHover
                ? { opacity: "100%", transition: "all 0.3s ease-in-out" }
                : { opacity: "0" }
            }
          >
            <Box
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ width: { xs: "48vw", sm: "23vw", md: "10vw" } }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "white",
                    fontSize: 25,
                    lineHeight: "150%",
                    fontFamily: "Poppins",
                    fontWeight: 900,
                    margin: 0,
                    marginTop: 5,
                    padding: 0,
                    marginBlock: 0,
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 15,
                    lineHeight: "100%",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    margin: 0,
                    marginTop: 5,
                    padding: 0,
                    marginBlock: 0,
                  }}
                >
                  {role}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "28vw", sm: "20vw", md: "10vw" },
                }}
              >
                <div>
                  {linkedin_url ? (
                    <a href={linkedin_url}>
                      <IconButton>
                        <LinkedInIcon
                          fontSize="large"
                          sx={{
                            color: "white",
                            width: 35,
                            height: 35,
                            marginTop: -0.5,
                          }}
                          className="member-card-links"
                        />
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton>
                      <LinkedInIcon
                        fontSize="large"
                        sx={{
                          color: "white",
                          width: 35,
                          height: 35,
                          marginTop: -0.5,
                        }}
                        className="member-card-links"
                      />
                    </IconButton>
                  )}
                  {github_url ? (
                    <a href={github_url}>
                      <IconButton>
                        <GitHubIcon
                          sx={{
                            color: "white",
                            width: 35,
                            height: 35,
                            marginTop: -0.5,
                          }}
                          fontSize="large"
                        />
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton>
                      <GitHubIcon
                        className="member-card-links"
                        sx={{
                          color: "white",
                          width: 35,
                          height: 35,
                          marginTop: -0.5,
                        }}
                        fontSize="large"
                      />
                    </IconButton>
                  )}
                </div>
              </Box>
            </Box>
          </div>
        </Card>
      </motion.div>
    );
  }
}

export default Contact;
