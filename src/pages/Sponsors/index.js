import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../App.css";
import SponsorCard from "../../components/SponsorsCard";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import Footer from "../Footer";

function Sponsors() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#242328",
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
        Sponsors
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 12, sm: 10, md: 10 }}
        columnSpacing={{ xs: 3, sm: 3, md: 2 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          paddingTop: "8vh",
          paddingRight: {
            xs: "4vw",
            sm: "2vw",
            md: "8vw",
          },
          paddingLeft: {
            xs: "6vw",
            sm: "4vw",
            md: "8vw",
          },
          paddingBottom: {
            xs: "10vh",
            sm: "15vh",
            md: "20vh",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://www.redbull.com/in-en/"
            image="image/Sponsors/redbull.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="RedBull"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://www.decathlon.in/"
            image="image/Sponsors/DECATHLON.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Decathlon"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Glucon-D_resized.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Glucon-D"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Bisleri.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Bisleri"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/1+.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="One Plus"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            image="image/Sponsors/Cocacola.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Coca Cola"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/CakeBee.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Cake Bee"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/pepsi.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Pepsi"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            image="image/Sponsors/Trichy.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Namma Trichy"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Glucovita.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Glucovita"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/naturals.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Naturals"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Superstar-pizza.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Supestar Pizza"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/NIVIA.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Nivia"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Barbeque Nation.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Barbeque Nation"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/First-crush.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="First Crush"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/poorvika.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Poorvika"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://google.com"
            image="image/Sponsors/Indian overseas Bank.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="Indian Overseas Bank"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://www.redbull.com/in-en/"
            image="image/Sponsors/SBI.jpeg"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="SBI"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SponsorCard
            url="https://www.redbull.com/in-en/"
            image="image/Sponsors/Ashdit_Technologies.png"
            imgWidth={{ xs: "60vw", sm: "30vw", md: "20vw" }}
            imgHeight={{ xs: "auto", sm: "auto", md: "25vh" }}
            text="ASHDIT Technologies"
          />
        </Grid>
      </Grid>
      <div id="footer">
        <Footer />
      </div>
    </Box>
  );
}

export default Sponsors;
