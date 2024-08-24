import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Slider } from "infinite-react-carousel/lib";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../App.css";
import { BASE_URL } from "../../utils/API_CONSTANTS";
import {
  descriptionBig,
  descriptionMedium,
  titleBig,
  titleMedium,
  titleSmall,
} from "../../utils/UI_Constants";
import "react-lazy-load-image-component/src/effects/blur.css";
import CountUp from "react-countup";

function About() {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 5;
      if (show) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
        },
        width: "100vw",
        backgroundColor: "#242328",
      }}
    >
      {/* <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)} 
    >*/}
      <div data-aos="zoom-out-up">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            paddingTop: "100px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "350px", sm: "300px", md: "350px" },
              height: { xs: "250px", sm: "200px", md: "250px" },
              margin: " 0 20px",
              border: 2,
              backgroundImage:
                "linear-gradient(115.79deg, #2641C2 27.89%, #01BFFD 129.39%)",
              alignSelf: "center",
              marginLeft: { xs: "25px", sm: "10px", md: "40px" },
              boxShadow: "0 0 5px 2px rgba(220,207,60,0.3)",
              borderRadius: "5%",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "70px", sm: "50px", md: "70px" },
                textAlign: "center",
                paddingTop: { xs: "80px", sm: "60px", md: "80px" },
                color: "#ffffff",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {counterOn && (
                <CountUp start={0} end={8000} duration={1} delay={0} />
              )}
              +
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "30px", sm: "20px", md: "22px" },
                textAlign: "center",
                paddingTop: "18px",
                fontWeight: 500,
                color: "#C7E6FC",
                fontFamily: "Poppins",
              }}
            >
              Participation
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "350px", sm: "300px", md: "350px" },
              height: { xs: "250px", sm: "200px", md: "250px" },
              margin: " 0 20px",
              backgroundImage:
                "linear-gradient(115.79deg, #2641C2 27.89%, #01BFFD 129.39%)",
              marginLeft: { xs: "25px", sm: "10px", md: "40px" },
              border: 2,
              alignSelf: "center",
              marginTop: { xs: "20px", sm: "0px", md: "0px" },
              boxShadow: "0 0 5px 2px rgba(220,207,60,0.3)",
              borderRadius: "5%",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "70px", sm: "50px", md: "70px" },
                textAlign: "center",
                paddingTop: { xs: "80px", sm: "60px", md: "80px" },
                color: "#ffffff",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {counterOn && (
                <CountUp start={0} end={14} duration={1.5} delay={0} />
              )}
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "30px", sm: "20px", md: "22px" },
                textAlign: "center",
                paddingTop: "18px",
                fontWeight: 500,
                color: "#C7E6FC",
                fontFamily: "Poppins",
              }}
            >
              Departments
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "350px", sm: "300px", md: "350px" },
              height: { xs: "250px", sm: "200px", md: "250px" },
              margin: " 0 20px",
              backgroundImage:
                "linear-gradient(115.79deg, #2641C2 27.89%, #01BFFD 129.39%)",
              marginLeft: { xs: "25px", sm: "10px", md: "40px" },
              border: 2,
              alignSelf: "center",
              marginTop: { xs: "20px", sm: "0px", md: "0px" },
              boxShadow: "0 0 5px 2px rgba(220,207,60,0.3)",
              borderRadius: "5%",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "70px", sm: "50px", md: "70px" },
                textAlign: "center",
                paddingTop: { xs: "80px", sm: "60px", md: "80px" },
                color: "#ffffff",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {counterOn && (
                <CountUp start={0} end={20} duration={2} delay={0} />
              )}
              +
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "30px", sm: "20px", md: "22px" },
                textAlign: "center",
                paddingTop: "18px",
                fontWeight: 500,
                color: "#C7E6FC",
                fontFamily: "Poppins",
              }}
            >
              Sports Events
            </Typography>
          </Box>
          {/* <Box
            sx={{
              width: { xs: "350px", sm: "300px", md: "350px" },
              height: { xs: "250px", sm: "200px", md: "250px" },
              backgroundImage:
                "linear-gradient(115.79deg, #2641C2 27.89%, #01BFFD 129.39%)",
              marginLeft: { xs: "0px", sm: "10px", md: "20px" },
              border: 2,
              alignSelf: "center",
              marginTop: { xs: "20px", sm: "0px", md: "0px" },
              marginRight: { xs: "0px", sm: "20px", md: "10px" },
              boxShadow: "0 0 5px 2px rgba(220,207,60,0.3)",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "70px", sm: "50px", md: "70px" },
                textAlign: "center",
                paddingTop: { xs: "80px", sm: "60px", md: "80px" },
                color: "#ffffff",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {counterOn && (
                <CountUp start={0} end={4500} duration={1} delay={0} />
              )}
              +
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "30px", sm: "20px", md: "20px" },
                textAlign: "center",
                paddingTop: "20px",
                fontWeight: 500,
                color: "#000000",
                fontFamily: "Poppins",
              }}
            >
              Followers
            </Typography>
          </Box> */}
        </Box>
      </div>
      {/* </ScrollTrigger> */}
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
            xs: "15vh",
            sm: "10vh",
            md: "15vh",
          },
        }}
      >
        About Us
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
          SportsFete is the intra-college sports fest where the 14 departments
          of NIT Trichy come together and participate in various sports in a
          quest to win the overall title. The competition happens over a span of
          four days, during which a rampant crowd of 8000 odd people actively
          participate and cheer for their department teams bringing the campus
          to life like no other time of the year. A wide array of sports were
          witnessed and played during this time. We wish to make this year's
          SportsFete a fest to remember and a satisfying experience to all our
          associated partners. Unique and exciting branding avenues are going to
          be a vital part of this year's SportsFete.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "auto",
          marginTop: { xs: "60vh", sm: "17vh", md: "17vh" },
          marginLeft: { xs: "20vw", sm: "23vw", md: "25vw" },
          marginRight: { xs: "15vw", sm: "17vw", md: "20vw" },
        }}
      >
        <Slider autoplay arrows={false} pauseOnHover>
          <LazyLoadImage
            src={BASE_URL + "about.jpg"}
            alt="About Image"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_1.jpg"}
            alt="Val Image 1"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_2.jpg"}
            alt="Val Image 2"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_3.jpg"}
            alt="Val Image 3"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_4.jpg"}
            alt="Val Image 4"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_7.jpg"}
            alt="Val Image 7"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_8.jpg"}
            alt="Val Image 8"
            effect="blur"
          />
          <LazyLoadImage
            src={BASE_URL + "val_9.jpg"}
            alt="Val Image 9"
            effect="blur"
          />
        </Slider>
        {/* <Box
        sx={{
          height: "auto",
          width: "auto",
          marginTop: { xs: "60vh", sm: "17vh", md: "17vh" },

          marginLeft: {
            xs: "20vw",
            sm: "23vw",
            md: "25vw",
          },
          marginRight: {
            xs: "15vw",
            sm: "17vw",
            md: "20vw",
          },
        }}
      >
        <Slider autoplay arrows={false} pauseOnHover>
          {AboutImage(BASE_URL + "about.jpg")}
          {AboutImage(BASE_URL + "val_1.jpg")}
          {AboutImage(BASE_URL + "val_2.jpg")}
          {AboutImage(BASE_URL + "val_3.jpg")}
          {AboutImage(BASE_URL + "val_4.jpg")}
          {AboutImage(BASE_URL + "val_7.jpg")}
          {AboutImage(BASE_URL + "val_8.jpg")}
          {AboutImage(BASE_URL + "val_9.jpg")}
        </Slider> */}
        {/* <Typography
              sx={{
                lineHeight: "3.4vh",
                letterSpacing: "0.2px",
                height: {
                  xs: "4vh",
                  sm: "4vh",
                  md: "8vh",
                },
                width: "100%",
                color: "#6B728E",
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: Primary,
                },
                fontFamily: "Poppins",
                fontWeight: 700,
                marginTop: {
                  xs: "5vh",
                  sm: "14vh",
                  md: "6vh",
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              Sportsfete'23 Inductions :{" "}
            </Typography> */}
        {/* <Typography
              sx={{
                lineHeight: {
                  xs: "2.5vh",
                  sm: "3vh",
                  md: "3.4vh",
                },
                letterSpacing: "0.2px",
                height: "8.5vh",
                color: "#FFFFFF",
                fontSize: {
                  xs: "16px",
                  sm: "14px",
                  md: Secondary,
                },
                fontFamily: "Poppins",
                fontWeight: 300,
                marginTop: {
                  xs: "7vh",
                  sm: "8vh",
                  md: "1vh",
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              The team induction for Sportsfete '23 is here and with it, your
              chance to be a part of organizing one of the most exciting fests
              of NITT! We are looking for enthusiastic students to make
              Sportsfete '23 a grand success especially after our long spell
              off-campus. We hope to see you all soon and guarantee that you are
              in for a thrilling ride!{" "}
            </Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            marginLeft: {
              xs: "-5vw",
              sm: "0vw",
              md: "-13vw",
            },
            marginTop: {
              xs: "10vh",
              sm: "10vh",
              md: "15vh",
            },
          }}
        >
          {WinnerCard(
            "23",
            "Dept. of Production Engineering",
            "Dept. of Researchers",
            "Dept. of ECE"
          )}
          {WinnerCard(
            "22",
            "Dept. of Architecture",
            "Research (Ph.D, MA, M.Sc) ",
            "Dept. of Chemical Engineering"
          )}
          {WinnerCard(
            "19",
            "Dept. of Production Engineering",
            "Dept. of Mechanical Engineering",
            "Dept. of Architecture"
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            marginLeft: {
              xs: "-5vw",
              sm: "0vw",
              md: "12vw",
            },
            marginTop: {
              xs: "0vh",
              sm: "0vh",
              md: "5vh",
            },
            width: { md: "25.2vw" },
          }}
        >
          {/* {WinnerCard(
            "18",
            "Dept. of Mechanical Engineering",
            "Dept. of Production Engineering",
            "Dept. of Chemical Engineering"
          )} */}
        </Box>
      </Box>
    </Box>
  );

  function AboutImage(imgsrc) {
    return (
      <Box
        sx={{
          width: "100px",
          height: {
            xs: "200px",
            sm: "300px",
            md: "500px",
          },
          borderRadius: 1,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <LazyLoadImage
          width={"95%"}
          height={"95%"}
          src={imgsrc} // use normal <img> attributes as props
          effect="blur"
        />
      </Box>
    );
  }

  function WinnerCard(year, gold, silver, bronze) {
    return (
      <Box
        sx={{
          marginLeft: {
            xs: "5vw",
            sm: "0",
            md: "2.5vw",
          },
          marginBottom: {
            xs: "12vw",
            sm: "10vw",
            md: 0,
          },
          padding: {
            xs: "5vw",
            sm: "2vw",
            md: "1.3vw",
          },
          width: {
            xs: "50vw",
            sm: "50vw",
          },
          borderRadius: "2vh",
          backgroundColor: "#0E2E60",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "0.2px",
            height: {
              xs: "4vh",
              sm: "4vh",
              md: "4vh",
            },
            color: "#AED6F1",
            fontSize: {
              xs: "5vw",
              sm: "3vw",
              md: "2vw",
            },
            fontFamily: "Poppins",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Winners - 20{year}
        </Typography>
        <Typography
          sx={{
            letterSpacing: "0.2px",
            color: "#FFFFFF",
            fontSize: {
              xs: "15px",
              sm: "16px",
              md: "1.3vw",
            },
            fontFamily: "Poppins",
            fontWeight: 700,
            marginTop: {
              xs: "2vh",
              sm: "2vh",
              md: "0.75vw",
            },
            marginBottom: {
              xs: "4vh",
              sm: "3vh",
              md: "1vw",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
            },
          }}
        >
          Sportsfete'{year}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="image/trophy.png"
            sx={{
              width: {
                xs: "50vw",
                sm: "40vw",
                md: "20vw",
              },
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
            },
            paddingTop: {
              xs: "2vw",
              sm: "1vw",
              md: "1vw",
            },
          }}
        >
          <Typography
            sx={{
              letterSpacing: "0.2px",
              color: "#FFFFFF",
              fontSize: {
                xs: "2vw",
                sm: "1.5vw",
                md: "0.8vw",
              },
              width: {
                sm: "10vw",
                md: "5vw",
              },
              fontFamily: "Poppins",
              fontWeight: 600,
              paddingLeft: {
                xs: "0vw",
                sm: "0vw",
                md: "0vw",
              },
            }}
          >
            {silver}
          </Typography>
          <Typography
            sx={{
              letterSpacing: "0.2px",
              color: "#FFFFFF",
              fontSize: {
                xs: "2vw",
                sm: "1.5vw",
                md: "0.8vw",
              },
              width: {
                sm: "10vw",
                md: "5vw",
              },
              fontFamily: "Poppins",
              fontWeight: 600,
              paddingLeft: {
                xs: "4vw",
                sm: "4vw",
                md: "2vw",
              },
            }}
          >
            {gold}
          </Typography>
          <Typography
            sx={{
              letterSpacing: "0.2px",
              color: "#FFFFFF",
              fontSize: {
                xs: "2vw",
                sm: "1.5vw",
                md: "0.8vw",
              },
              width: {
                sm: "10vw",
                md: "5vw",
              },
              fontFamily: "Poppins",
              fontWeight: 600,
              paddingLeft: {
                xs: "4vw",
                sm: "4vw",
                md: "2vw",
              },
            }}
          >
            {bronze}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default About;
