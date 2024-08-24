import {
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
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
function InductionsYT() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1E2039",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "#D7D8FF",
          fontSize: {
            xs: titleSmall,
            sm: titleMedium,
            md: titleBig,
          },
          fontWeight: 700,
          fontFamily: "Inter",
          textAlign: "center",
          paddingTop: {
            xs: "5vh",
            sm: "10vh",
            md: "12vh",
          },
          lineHeight: "122%",
        }}
      >
        Inductions
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          height: "60px",
          color: "#FFFFFF",
          fontSize: {
            xs: descriptionMedium,
            sm: descriptionMedium,
            md: descriptionBig,
          },
          marginTop: "2vh",
          lineHeight: "24px",
          fontFamily: "Inter",
        }}
      >
        Here is the Inductions Briefing video!
      </Typography>
      <Grid
        container
        // spacing={0}
        // direction="column"
        alignItems="center"
        justify="center"
        sx={{
          paddingTop: "10vh",
          paddingLeft: {
            xs: "12vw",
            sm: "20vw",
            md: "20vw",
          },
          paddingRight: "20vw",
          paddingBottom: "15vh",
        }}
      >
        <Grid item xs={12} sm={12}>
          <Card
            sx={{
              height: {
                xs: "30.5vh",
                sm: "40vh",
                md: "76vh",
              },
              width: {
                xs: "77vw",
                sm: "auto",
                md: "auto",
              },
            }}
          >
            <CardMedia
              width="auto"
              sx={{
                height: {
                  xs: "30vh",
                  sm: "40vh",
                  md: "76vh",
                },
              }}
              component="iframe"
              title="test"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              allow="autoPlay"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InductionsYT;
