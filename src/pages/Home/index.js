import React, { useEffect, useState } from "react";
import "../../App.css";
import {
    Typography,
    Box,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import About from "../About";
// import Teams from "../Teams";
import Footer from "../Footer";
import SportsEvent from "../SportsEvent";
import { Tertiary } from "../../utils/UI_Constants";
import { LiveEventCard } from "../../components/LiveEventCard";
import TShirtReg from "../TShirtReg";

// Function to scroll smoothly to a section
function scrollTo(sectionname) {
    const element = document.getElementById(sectionname);
    element.scrollIntoView({ behavior: "smooth" });
}

// Function to handle registration status check
const handleRegCheckCall = async () => {
    try {
        const url = process.env.REACT_APP_BACKEND_BASE_URL;
        const response = await fetch(`${url}api/getSetting/marathon-registeration`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        if (!response.ok) {
            throw {
                statusCode: response.status,
                message: data.message,
            };
        }

        return { ...data };
    } catch (error) {
        throw {
            statusCode: error.statusCode || 500,
            message: error.message || "An unknown error occurred.",
        };
    }
};

// Main Home component
function Home() {
    const [regOpen, setRegOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const resp = await handleRegCheckCall();
            setRegOpen(resp.value);
        })();
    }, []);

    return (
        <div>
            <div id="homesec">{Title(regOpen)}</div>

            {HomeButton("image/home.png", "Home", "homesec", "20px", "25vh")}
            {HomeButton("image/about.png", "About", "aboutsec", "20px", "37vh")}
            {HomeButton("image/teams.png", "Teams", "teamsec", "20px", "49vh")}
            {HomeButton("image/sports.png", "SportsEvent", "sportsEventsec", "20px", "61vh")}
            {HomeButton("image/mail.png", "Plus", "footer", "22px", "73vh")}

            <div id="aboutsec">
                <About />
            </div>
            {/* <div id="teamsec">
                <Teams />
            </div> 
             <div id="sportsEventsec">
                <SportsEvent />
            </div>  */}
            {/* <div>
                <TShirtReg />
            </div> */}
            <div id="footer">
                <Footer />
            </div>
        </div>
    );

    // Function to render the navigation buttons
    function HomeButton(icon, name, id, height, top) {
        const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

        return (
            <>
                {!isMatch ? (
                    <Button sx={{ position: "absolute" }} onClick={() => scrollTo(id)}>
                        <Box
                            sx={{
                                cursor: "pointer",
                                position: "fixed",
                                right: "-20px",
                                top: top,
                                zIndex: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#0E3675",
                                    height: "10vh",
                                    width: "80px",
                                    borderTopLeftRadius: "50px",
                                    borderBottomLeftRadius: "50px",
                                    left: "10px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        height: height,
                                        paddingLeft: "23px",
                                    }}
                                    alt="logo"
                                    src={icon}
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: "#000000",
                                        fontSize: Tertiary,
                                        fontFamily: "Inter",
                                        fontWeight: 600,
                                        paddingLeft: "18px",
                                        paddingTop: "1.5px",
                                    }}
                                ></Typography>
                            </Box>
                        </Box>
                    </Button>
                ) : (
                    <></>
                )}
            </>
        );
    }

    // Function to render the title and event registration notice
    function Title(regopen) {
        return (
            <div className="home_bg">
                <Box>
                    {regopen ? (
                        <LiveEventCard
                            registrationTitle="MARATHON REGISTRATION IS LIVE!"
                            eventTime=""
                            regDeadline="Registration Closes at : 10-09-2023 | 11:59 PM"
                        />
                    ) : (
                        <></>
                    )}
                    <Typography
                        sx={{
                            fontSize: { xs: 65, sm: 120, md: 170 },
                            fontWeight: 900,
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            paddingTop: { xs: "35vh", sm: "30vh", md: "25vh" },
                            color: "#FFFFFF",
                            fontFamily: "Poppins",
                        }}
                    >
                        Sports
                        <Typography
                            component="span"
                            sx={{
                                fontSize: { xs: 65, sm: 120, md: 170 },
                                fontWeight: { xs: 300, sm: 275, md: 275 },
                                color: "#f6f6f6",
                                fontStyle: "italic",
                                wordWrap: "break-word",
                            }}
                        >
                            Fete
                        </Typography>
                    </Typography>
                </Box>
            </div>
        );
    }
}

export default Home;
