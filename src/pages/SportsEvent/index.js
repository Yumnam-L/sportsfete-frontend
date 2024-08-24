import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import "../../App.css";
import SportsEventCard from "../../components/SportsEventCard";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import { useNavigate } from "react-router-dom";

function SportsEvent() {
  const Navigation = useNavigate();

  const handleButtonClick = useCallback(
    (name) => {
      Navigation("/eventDescription", { state: { item: name } });
    },
    [Navigation]
  );
  // ${name}

  const Data = {
    Athletics: "ATHLETICS",
    Badminton: "BADMINTON",
    Basketball: "BASKETBALL",
    Carrom: "CARROM",
    Chess: "CHESS",
    Cricket: "CRICKET",
    Football: "FOOTBALL",
    Handball: "HANDBALL",
    Hockey: "HOCKEY",
    Kabaddi: "KABADDI",
    "Kho Kho": "KHO KHO",
    Marathon: "MARATHON",
    "Power Lifting": "POWER LIFTING",
    Swimming: "SWIMMING",
    "Table Tennis": "TABLE TENNIS",
    Tennis: "TENNIS",
    Throwball: "THROWBALL",
    Volleyball: "VOLLEYBALL",
    Weightlifting: "WEIGHT LIFTING",
    Yoga: "YOGA",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#242328",
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
          paddingTop: {
            xs: "5vh",
            sm: "10vh",
            md: "15vh",
          },
          lineHeight: "122%",
        }}
      >
        Sports Events
      </Typography>
      {/* <Typography
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
        At lacus vitae nulla sagittis scelerisque nisl. Pellentesque <br />
        duis cursus vestibulum, facilisi ac, sed faucibus.
      </Typography>
      {/* <Container
        sx={{
          height: "1154px",
          width: "1000px",
          marginTop: "8vh",
        }}
      > */}

      <Grid
        container
        rowSpacing={{ xs: 3, sm: 10, md: 3 }}
        columnSpacing={{ xs: 3, sm: 3, md: 5 }}
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
            sm: "10vw",
            md: "8vw",
          },
          paddingBottom: {
            xs: "10vh",
            sm: "15vh",
            md: "20vh",
          },
        }}
      >
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Athletics"
            handleButtonClick={() => handleButtonClick(Data.Athletics)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkbWludG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Badminton"
            handleButtonClick={() => handleButtonClick(Data.Badminton)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Basketball"
            handleButtonClick={() => handleButtonClick(Data.Basketball)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1620741212082-4e5c8194883e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Carrom"
            handleButtonClick={() => handleButtonClick(Data.Carrom)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Chess"
            handleButtonClick={() => handleButtonClick(Data.Chess)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1593766827228-8737b4534aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Cricket"
            handleButtonClick={() => handleButtonClick(Data.Cricket)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Football"
            handleButtonClick={() => handleButtonClick(Data.Football)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1513028738826-f000cded30a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Handball"
            handleButtonClick={() => handleButtonClick(Data.Handball)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1554539484-e4fab56d4a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmllbGQlMjBob2NrZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Hockey"
            handleButtonClick={() => handleButtonClick(Data.Hockey)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://static.india.com/wp-content/uploads/2017/01/kabaddi-india.jpg?impolicy=Medium_Resize&w=1200&h=800"
            cardText="Kabaddi"
            handleButtonClick={() => handleButtonClick(Data.Kabaddi)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://thebridge.in/wp-content/uploads/2021/01/kho-kho.jpg"
            cardText="Kho Kho"
            handleButtonClick={() => handleButtonClick(Data["Kho Kho"])}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmF0aG9uJTIwcnVubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Marathon"
            handleButtonClick={() => handleButtonClick(Data.Marathon)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1589579234096-25cb6b83e021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvd2VyJTIwbGlmdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Power Lifting"
            handleButtonClick={() => handleButtonClick(Data["Power Lifting"])}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Swimming"
            handleButtonClick={() => handleButtonClick(Data.Swimming)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Table Tennis"
            handleButtonClick={() => handleButtonClick(Data["Table Tennis"])}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1541744573515-478c959628a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Tennis"
            handleButtonClick={() => handleButtonClick(Data.Tennis)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://www.sportzcraazy.com/wp-content/uploads/2018/09/Throwball.jpg"
            cardText="Throwball"
            handleButtonClick={() => handleButtonClick(Data.Throwball)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            cardText="Volleyball"
            handleButtonClick={() => handleButtonClick(Data.Volleyball)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VpZ2h0JTIwbGlmdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=600"
            cardText="Weightlifting"
            handleButtonClick={() => handleButtonClick(Data.Weightlifting)}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <SportsEventCard
            cardImage="https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            cardText="Yoga"
            handleButtonClick={() => handleButtonClick(Data.Yoga)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SportsEvent;
