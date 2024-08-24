import { FormatQuote } from "@mui/icons-material";
import "../Teams/teams.css";
import {
  Typography,
  Card,
  CardContent,
  IconButton,
  CardHeader,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import "../../App.css";
import { titleBig, titleMedium, titleSmall } from "../../utils/UI_Constants";
import AOS from "aos";
import "aos/dist/aos.css";

function Teams() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#242328",
        marginTop: {
          xs: "0vh",
          sm: "0vh",
          md: "0vh",
        },
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
            xs: "10vh",
            sm: "10vh",
            md: "30vh",
          },
        }}
      >
        Teams
      </Typography>
      {/* <Typography
        variant="h2"
        component="h2"
        sx={{
          lineHeight: "24px",
          letterSpacing: "0.2px",
          textAlign: "center",
          height: "60px",
          color: "#A9A9A9",
          fontSize: {
            xs: descriptionMedium,
            sm: descriptionMedium,
            md: descriptionBig,
          },
          fontFamily: "Poppins",
          fontWeight: 400,
          marginTop: "2vh",
        }}
      >
        At lacus vitae nulla sagittis scelerisque nisl. Pellentesque <br />
        duis cursus vestibulum, facilisi ac, sed faucibus.
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "10vh",
          paddingBottom: "5vh",
          paddingLeft:'5vh',
          paddingRight:'5vh',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {TeamCard(
          "~Ambience team",
          "The Ambience team in Sportsfete is responsible for creating an engaging and vibrant atmosphere by organising decorations that enhance the overall experience of the fest."
        )}
        {TeamCard(
          "~Creative team",
          "We are the voice of Sportsfete! We are responsible fi creating all the content you see across the fest! We write social media captions, blog articles and newsletters on anything sports."
        )}
        {TeamCard(
          "~Guest Lectures team",
          "Do you want to be part of an extraordinary team that leaves an indelible mark on Sportsfete's stage? We are the Guest Lectures Team of Sportsfete, a dynamic group responsible for curating a remarkable lineup of guests."
        )}
        {TeamCard(
          "~Marketing team",
          "We are a dynamic group of individuals who play a pivotal role in the fest's success. We are passionate about sports and dedicated to securing renowned brand sponsorships."
        )}
        {TeamCard(
          "~Media team",
          "The Media and Publicity team in Sportsfete is responsible for managing and promoting the event through various social media channels. Their goal is to enhance the visibility and reach of the fest and engage a wider audience."
        )}
        {TeamCard(
          "~Organising Committee",
          "We are an electrifying team fueled by a sports spirit and an unstoppable drive. With passion and expertise, we bring Sportsfete to life, crafting a legendary event that leaves a lasting impact on participants and spectators alike."
        )}
        {TeamCard(
          "~Public Relations team",
          "The team's main objective is to meet the needs and expectations of those at the fest, creating a welcoming and comfortable environment. We provide round-the-clock assistance during the fest, addressing and resolving all related inquiries promptly and effectively."
        )}
        {TeamCard(
          "~Events and Workshop team",
          "The Events and Workshops Team of Sportsfete is a dynamic team that organises fest events and exciting workshops. We strive to provide students with new and unique experiences that ignite their curiosity and spark their creativity."
        )}
     
      </Box>
    </Box>
  );

  function TeamCard(head, primaryinfo) {
    return (
      <Box
        sx={{
          width: "300px",
          position: "relative",
          marginLeft: "1vw",
          marginRight: {
            xs: "0vw",
            sm: "2vw",
            md: "2vw",
          },
          marginBottom: {
            xs: "5vh",
            sm: "12vh",
            md: "12vh",
          },
        }}
      >
        <div data-aos="fade-up" data-aos-duration="1500">
          <Card
            sx={{
              width: {
                xs: "292px",
                sm: "292px",
                md: "292px",
              },
              height: {
                xs: "500px",
                sm: "auto",
                md: "auto",
              },
              borderRadius: "12px",
            }}
          >
            <Box>
              <Card
                sx={{
                  height: {
                    xs: "430px",
                    sm: "450px",
                    md: "400px",
                  },
                  width: {
                    xs: "auto",
                    sm: "292px",
                    md: "292px",
                  },
                  backgroundColor: "#0E2E60",
                }}
              />
              {/* <CardContent
              sx={{
                height: "150px",
                borderRadius: "12px",
                alignItems: "center",
                padding: "24px",
              }}
            >
              <Typography
                sx={{
                  color: "#3C3C43",
                  fontFamily: "Inter",
                  fontSize: teamsTitle,
                  fontWeight: 600,
                  marginTop: {
                    xs: "-2vh",
                    sm: "0vh",
                    md: "0vh",
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  paddingTop: "4px",
                  lineHeight: "12px",
                  color: "#666666",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                {content}
              </Typography>
            </CardContent> */}
              <CardContent
                sx={{
                  position: "absolute",
                  top: "10px",
                  alignItems: "center",
                  paddingTop: "24px",
                  paddingLeft: "24px",
                  paddingRight: "84px",
                  overflowY: "auto",
                }}
              >
                <IconButton>
                  <FormatQuote
                    sx={{
                      color: "#f6f6f6",
                      marginLeft: "-1.4vw",
                      transform: "rotate(180deg)",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    // overflow: "auto",
                    overflowY: "auto",
                    height: {
                      xs: "315px",
                      sm: "330px",
                      md: "282px",
                    },
                    width: {
                      xs: "258px",
                      sm: "260px",
                      md: "282px",
                    },
                  }}
                >
                  <Typography
                    // className="teamcontent"
                    sx={{
                      paddingTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                      },
                      lineHeight: {
                        xs: "18px",
                        sm: "17px",
                        md: "17px",
                      },
                      color: "#ffffff",
                      fontFamily: "Poppins",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "15px",
                      },
                      fontWeight: 900,
                      // width: {
                      //   xs: "52vw",
                      //   sm: "35vw",
                      //   md: "16vw",
                      // },
                      paddingRight: {
                        xs: "14px",
                        sm: "14px",
                        md: "25px",
                      },
                      fontStyle: "italic",
                    }}
                  >
                    {primaryinfo}
                  </Typography>
                </Box>
              </CardContent>
              {/* <CardContent
              sx={{
                backgroundColor: "#374f73",
                display: "flex",
                justifyContent: "end",
                paddingRight: "40px",
              }}
            >
              <Typography
                sx={{
                  lineHeight: "40px",
                  color: "#f6f6f6",
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "18px",
                    sm: teamsHead,
                    md: 15,
                  },
                  marginTop: {
                    xs: "-5vh",
                    sm: 0,
                    md: "-8vh",
                  },
                  fontWeight: 700,
                  display: "flex",
                }}
              >
                {head}
              </Typography>
            </CardContent> */}
              <CardHeader
                title={
                  <Typography
                    sx={{
                      color: "#0E2E60",
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    {head}
                  </Typography>
                }
                subheader={
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: 14,
                      fontFamily: "Poppins",
                      textAlign: "right",
                    }}
                  >
                    Sportsfete
                  </Typography>
                }
              />
            </Box>
          </Card>
        </div>
      </Box>
    );
  }
}

export default Teams;
