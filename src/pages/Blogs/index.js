import React, { useState, useEffect } from "react";
import "./blogs.css";
import { Grid, Typography, Card, CardHeader, IconButton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box } from "@mui/system";
import Footer from "../Footer";
import {
  blogCardbodysize,
  blogCardsize,
  Primary,
  titleBig,
  titleMedium,
  titleSmall,
} from "../../utils/UI_Constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ContentLoader from "react-content-loader";
function Blogs() {
  const v1 = 12;
  const v2 = 6;
  const v3 = 4;

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
        Blog Posts
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 10, md: 3 }}
        columnSpacing={{ xs: 3, sm: 3, md: 10 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          paddingTop: "8vh",
          paddingRight: {
            xs: "0",
            sm: "2vw",
            md: "10vw",
          },
          paddingLeft: {
            xs: "0",
            sm: "2vw",
            md: "10vw",
          },
          paddingBottom: {
            xs: "0",
            sm: "15vh",
            md: "20vh",
          },
        
        }}
        className="grid"
      >
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Raising the Bar",
            "An ascent towards pride and passion",
            ["Sports", "Fitness", "Powerlifting"],
            "https://miro.medium.com/max/1400/1*I0tiuR1_FdXcEbAQs_mMbw.webp",
            "https://medium.com/the-sportsfete-blog/raisingthebar-fbd89e5a71bb"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Consequence",
            "A Passed Pawn's Perspective",
            ["Sports", "Chess", "War"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*8GcEAeY3Gadtv-KhtyZXVA.jpeg",
            "https://medium.com/the-sportsfete-blog/consequence-a-pawns-perspective-d30d2695c7f1"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Female Warriors Not In Battle?",
            "The conundrum of girls’ participation in sporting events at NIT-T.",
            ["Sports"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Nh4PvJkMWTSgOhWOaSFsxg.jpeg",
            "https://medium.com/the-sportsfete-blog/female-warriors-not-in-battle-dffc1b17162e"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "The Final Corner",
            "One Step Forward",
            ["Sports", "Running", "Marathon"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*HOUXh0Yc_QOELzB0GWlarw.jpeg",
            "https://medium.com/the-sportsfete-blog/thefinalcorner-c88ae7ea83a4"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Chak De!: The NIT-T Chapter",
            "Flicked from oblivion into permanence.",
            ["Sports", "Hockey", "Women"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*9Dtv7e8PwIz-k06QlJYH-Q.jpeg",
            "https://medium.com/the-sportsfete-blog/chak-de-the-nit-t-chapter-2e7f4187cc1d"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Manasvi & Bhaarath, Memory Lane, NITT",
            "A Leap into the Train of Passion!",
            ["Sports", "Volleyball", "Teamwork"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*rLkxttNSbgq5B55xO1yoiw.jpeg",
            "https://medium.com/the-sportsfete-blog/poxmanabhaa-66ae6003171b"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "On Your Marks!",
            "You win some, you lose some",
            ["Sports", "Nostalgia", "Childhood"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*McOj6uiQ_te1Gz-TxuoRYA.jpeg",
            "https://medium.com/the-sportsfete-blog/onyourmarks-3ca670805ece"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Ahmed, Memory Lane, NITT",
            "Run Forrest, run!",
            ["Sports", "Athletics", "Tournaments"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*IjISehBEawXMo9HEs88OlA.jpeg",
            "https://medium.com/the-sportsfete-blog/poboxahmed-509c64f3869a"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Reminiscence",
            "Revisiting the timeless climaxes of Sportsfete'18",
            ["Sports", "Football", "Throwback"],
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZaE8F_6PtZmXOpnuvpSTQw.jpeg",
            "https://medium.com/the-sportsfete-blog/reminiscence-87ca1058fde9"
          )}
        </Grid>
        <Grid item xs={v1} sm={v2} md={v3} className="cards">
          {BlogCard(
            "Kaushik, Memory Lane, NITT",
            "About the team, always",
            ["Sports", "Cricket", "Memories"],
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zl4DLfGps5Noq0PzFQdSMw.jpeg",
            "https://medium.com/the-sportsfete-blog/poboxkaushik-2e51744b55d8"
          )}
        </Grid>
      </Grid>
      <div id="footer">
        <Footer />
      </div>
    </Box>
  );

  function BlogCard(title, content, category, image, link) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }, []);
    return (
      <Box
        sx={{
          // position: "relative",
          padding: 0,
          width: 300,
          height: 350,
          marginBottom: 5,
          marginLeft:"auto",
          marginRight:"auto",
        }}
      >
        {showLoader && (
          <ContentLoader
            viewBox="0 0 500 280"
            height={280}
            width={500}
            backgroundColor="#242323"
            foregroundColor="#8a8a8a"
          >
            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />

            <rect x="4" y="190" rx="0" ry="0" width="290" height="200" />
          </ContentLoader>
        )}
        {!showLoader && (
          <div>
            <Card>
              <LazyLoadImage
                width={"100%"}
                src={image} // use normal <img> attributes as props
                effect="blur"
                sx={{
                  position: "absolute",
                  zIndex: 0,
                  height: '200px',
                  
                
                }}
                style={{
                  height:'200px'
                }}
              />
            </Card>
            <Card
              sx={{
                position: "absolute",
                width: {
                  xs: 262,
                  sm: 260,
                  md: 262,
                },
                height: 120,
                backgroundColor: "#0E2E60",
                marginTop: -2,
                paddingBottom: 5,
                paddingLeft: 2.5,
                paddingTop: 2.5,
                paddingRight: 2.5,

                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Typography
                variant="h7"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  paddingTop: 1,
                  paddingBottom: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  marginRight: 1.5,
                  borderRadius: 5,
                  color: "white",
                  fontSize: 0.72 * blogCardsize,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  backgroundColor: "#5B80BB",
                  // borderWidth: 1,
                  // borderColor: "white",
                  // borderStyle: "solid",
                }}
              >
                {category[0]}
              </Typography>
              {category[1] && (
                <>
                  <Typography
                    variant="h7"
                    color="text.secondary"
                    sx={{
                      textAlign: "center",
                      paddingTop: 1,
                      paddingBottom: 1,
                      paddingLeft: 2,
                      paddingRight: 2,
                      borderRadius: 5,
                      marginRight: 1.5,

                      color: "white",
                      fontSize: 0.72 * blogCardsize,
                      fontFamily: "Inter",
                      fontWeight: 400,
                      backgroundColor: "#5B80BB",
                      // borderWidth: 1,
                      // borderColor: "white",
                      // borderStyle: "solid",
                    }}
                  >
                    {category[1]}
                  </Typography>
                </>
              )}
              {category[2] && (
                <>
                  <Typography
                    variant="h7"
                    color="text.secondary"
                    sx={{
                      textAlign: "center",
                      paddingTop: 1,
                      paddingBottom: 1,
                      paddingLeft: 2,
                      paddingRight: 2,
                      borderRadius: 5,
                      color: "white",
                      fontSize: 0.72 * blogCardsize,
                      fontFamily: "Inter",
                      fontWeight: 400,
                      backgroundColor: "#5B80BB",
                      // borderWidth: 1,
                      // borderColor: "white",
                      // borderStyle: "solid",
                    }}
                  >
                    {category[2]}
                  </Typography>
                </>
              )}

              <CardHeader
                sx={{
                  padding: 0,
                  paddingTop: 2,
                  paddingBottom: 1,
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  fontSize: Primary,
                  fontFamily: "Inter",
                  fontWeight: 600,
                }}
                action={
                  <IconButton
                    aria-label="hyperlink"
                    onClick={(event) => window.open(link)}
                  >
                    <NorthEastIcon
                      sx={{ color: "#FFFFFF", width: "16px", height: "16px" }}
                    />
                  </IconButton>
                }
                title={title}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: "16px",
                  color: "#CED2FF",
                  fontSize: 1.1 * blogCardbodysize,
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
              >
                {content}
              </Typography>
            </Card>
          </div>
        )}
      </Box>
    );
  }
}

//   function BlogCard(title, content, category, image, link) {
//     return (
//       <Box
//         sx={{
//           position: "relative",
//           padding: 0,
//           width: 300,
//           height: 350,
//           marginBottom: 10,
//           marginLeft: {
//             xs: 0,
//             sm: 0,
//             md: 0,
//           },
//           marginRight: {
//             xs: 0,
//             sm: 0,
//             md: 0,
//           },
//         }}
//       >
//         <Card>
//           <LazyLoadImage
//             width={"100%"}
//             src={image} // use normal <img> attributes as props
//             effect="blur"
//             sx={{
//               position: "absolute",
//               zIndex: 0,
//               height: 1000,
//             }}
//           />
//         </Card>
//         <Card
//           sx={{
//             position: "absolute",
//             width: {
//               xs: 262,
//               sm: 260,
//               md: 262,
//             },
//             height: 120,
//             backgroundColor: "#0E2E60",
//             marginTop: -2,
//             paddingBottom: 5,
//             paddingLeft: 2.5,
//             paddingTop: 2.5,
//             paddingRight: 2.5,

//             borderTopLeftRadius: 15,
//             borderTopRightRadius: 15,
//             borderBottomLeftRadius: 10,
//             borderBottomRightRadius: 10,
//           }}
//         >
//           <Typography
//             variant="h7"
//             color="text.secondary"
//             sx={{
//               textAlign: "center",
//               paddingTop: 1,
//               paddingBottom: 1,
//               paddingLeft: 2,
//               paddingRight: 2,
//               marginRight: 1.5,
//               borderRadius: 5,
//               color: "white",
//               fontSize: 0.72 * blogCardsize,
//               fontFamily: "Inter",
//               fontWeight: 400,
//               backgroundColor: "#5B80BB",
//               borderWidth: 1,
//               borderColor: "white",
//               borderStyle: "solid",
//             }}
//           >
//             {category[0]}
//           </Typography>
//           {category[1] && (
//             <>
//               <Typography
//                 variant="h7"
//                 color="text.secondary"
//                 sx={{
//                   textAlign: "center",
//                   paddingTop: 1,
//                   paddingBottom: 1,
//                   paddingLeft: 2,
//                   paddingRight: 2,
//                   borderRadius: 5,
//                   marginRight: 1.5,

//                   color: "white",
//                   fontSize: 0.72 * blogCardsize,
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   backgroundColor: "#5B80BB",
//                   borderWidth: 1,
//                   borderColor: "white",
//                   borderStyle: "solid",
//                 }}
//               >
//                 {category[1]}
//               </Typography>
//             </>
//           )}
//           {category[2] && (
//             <>
//               <Typography
//                 variant="h7"
//                 color="text.secondary"
//                 sx={{
//                   textAlign: "center",
//                   paddingTop: 1,
//                   paddingBottom: 1,
//                   paddingLeft: 2,
//                   paddingRight: 2,
//                   borderRadius: 5,
//                   color: "white",
//                   fontSize: 0.72 * blogCardsize,
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   backgroundColor: "#5B80BB",
//                   borderWidth: 1,
//                   borderColor: "white",
//                   borderStyle: "solid",
//                 }}
//               >
//                 {category[2]}
//               </Typography>
//             </>
//           )}

//           <CardHeader
//             sx={{
//               padding: 0,
//               paddingTop: 2,
//               paddingBottom: 1,
//               lineHeight: "28px",
//               color: "#FFFFFF",
//               fontSize: Primary,
//               fontFamily: "Inter",
//               fontWeight: 600,
//             }}
//             action={
//               <IconButton
//                 aria-label="hyperlink"
//                 onClick={(event) => window.open(link)}
//               >
//                 <NorthEastIcon
//                   sx={{ color: "#FFFFFF", width: "16px", height: "16px" }}
//                 />
//               </IconButton>
//             }
//             title={title}
//           />
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{
//               lineHeight: "16px",
//               color: "#CED2FF",
//               fontSize: 1.1 * blogCardbodysize,
//               fontFamily: "Inter",
//               fontWeight: 400,
//             }}
//           >
//             {content}
//           </Typography>
//         </Card>
//       </Box>
//     );
//   }
// }

export default Blogs;
