import React, { useEffect, useState } from "react";
import "../Gallery/gallery.css";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container } from "@mui/system";
import Footer from "../Footer";
import {
  galleryTitle,
  titleBig,
  titleMedium,
  titleSmall,
} from "../../utils/UI_Constants";
import { GALLERY_BASE_URL } from "../../utils/API_CONSTANTS";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentLoader from "react-content-loader";

function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#242328",
        width: "100%",
        height: "100%",
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
        className="gallerytitle"
      >
        Gallery
      </Typography>
      {/*<Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
          marginTop: 5,
        }}
      >
        Day - 1
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            // marginTop: "8vh",
            //"&::-webkit-scrollbar": { display: "none" },
            margin: 0,
          }}
        >
          <ImageBox
            cimage={
              "https://d39h29g1miuw3x.cloudfront.net/gallery-comp/one_1.jpg"
            }
          />
          <ImageBox cimage={BASE_URL + "one_2.jpg"} />
          <ImageBox cimage={BASE_URL + "one_3.jpg"} />
          <ImageBox cimage={BASE_URL + "one_4.jpg"} />
          <ImageBox cimage={BASE_URL + "one_5.jpg"} />
          <ImageBox cimage={BASE_URL + "one_6.jpg"} />
          <ImageBox cimage={BASE_URL + "one_7.jpg"} />
          <ImageBox cimage={BASE_URL + "one_8.jpg"} />
          <ImageBox cimage={BASE_URL + "one_9.jpg"} />
          <ImageBox cimage={BASE_URL + "one_10.jpg"} />
        </Container>
      </div>
      <Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
          marginTop: 10,
        }}
      >
        Day - 2
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            //marginTop: "8vh",
            //"&::-webkit-scrollbar": { display: "none" },

            margin: 0,
          }}
        >
          <ImageBox cimage={BASE_URL + "two_1.JPG"} />
          <ImageBox cimage={BASE_URL + "two_2.JPG"} />
          <ImageBox cimage={BASE_URL + "two_3.JPG"} />
          <ImageBox cimage={BASE_URL + "two_4.JPG"} />
          <ImageBox cimage={BASE_URL + "two_5.jpg"} />
          <ImageBox cimage={BASE_URL + "two_6.jpg"} />
          <ImageBox cimage={BASE_URL + "two_7.jpg"} />
          <ImageBox cimage={BASE_URL + "two_8.jpg"} />
          <ImageBox cimage={BASE_URL + "two_9.jpg"} />
          <ImageBox cimage={BASE_URL + "two_10.jpg"} />
        </Container>
      </div>

      <Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
          marginTop: 0,
        }}
      >
        Day - 3
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            //marginTop: "8vh",
            // "&::-webkit-scrollbar": { display: "visible" },
            // "&:hover": {
            //   "&::-webkit-scrollbar": { display: "inherit" },
            // },
            scrollbarWidth:'2px',
            scrollbarColor:'white',

            margin: 0,
          }}
        >
          <ImageBox cimage={BASE_URL + "three_1.jpg"} />
          <ImageBox cimage={BASE_URL + "three_2.jpg"} />
          <ImageBox cimage={BASE_URL + "three_3.jpg"} />
          <ImageBox cimage={BASE_URL + "three_4.jpg"} />
          <ImageBox cimage={BASE_URL + "three_5.jpg"} />
          <ImageBox cimage={BASE_URL + "three_6.jpg"} />
          <ImageBox cimage={BASE_URL + "three_7.jpg"} />
          <ImageBox cimage={BASE_URL + "three_8.jpg"} />
          <ImageBox cimage={BASE_URL + "three_9.jpg"} />
          <ImageBox cimage={BASE_URL + "three_10.jpg"} />
        </Container>
      </div>
      <Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
        }}
      >
        Day - 4
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            //marginTop: "8vh",
            //"&::-webkit-scrollbar": { display: "none" },
            //paddingBottom: 10,
            margin: 0,
          }}
        >
          <ImageBox cimage={BASE_URL + "four_1.jpg"} />
          <ImageBox cimage={BASE_URL + "four_2.jpg"} />
          <ImageBox cimage={BASE_URL + "four_3.jpg"} />
          <ImageBox cimage={BASE_URL + "four_4.jpg"} />
          <ImageBox cimage={BASE_URL + "four_5.jpg"} />
          <ImageBox cimage={BASE_URL + "four_6.jpg"} />
          <ImageBox cimage={BASE_URL + "four_7.jpg"} />
          <ImageBox cimage={BASE_URL + "four_8.jpg"} />
          <ImageBox cimage={BASE_URL + "four_9.jpg"} />
          <ImageBox cimage={BASE_URL + "four_10.jpg"} />
        </Container>
      </div>
      <Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
        }}
      >
        Marathon
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            //marginTop: "8vh",
            //"&::-webkit-scrollbar": { display: "none" },
            margin: 0,
          }}
        >
          <ImageBox cimage={BASE_URL + "mara_1.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_2.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_3.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_4.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_5.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_6.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_7.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_8.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_9.jpg"} />
          <ImageBox cimage={BASE_URL + "mara_10.jpg"} />
        </Container>
      </div>
      <Typography
        sx={{
          fontSize: galleryTitle,
          fontWeight: 700,
          color: "#6B728E",
          marginLeft: "13vw",
          fontFamily: "Poppins",
        }}
      >
        Valediction
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >

        <Container
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            marginTop: "8vh",
            //"&::-webkit-scrollbar": { display: "none" },
            // paddingBottom: 10,
            margin: 0,
          }}
        >
          <ImageBox cimage={BASE_URL + "val_1.jpg"} />
          <ImageBox cimage={BASE_URL + "val_2.jpg"} />
          <ImageBox cimage={BASE_URL + "val_3.jpg"} />
          <ImageBox cimage={BASE_URL + "val_4.jpg"} />
          <ImageBox cimage={BASE_URL + "val_5.jpg"} />
          <ImageBox cimage={BASE_URL + "val_6.jpg"} />
          <ImageBox cimage={BASE_URL + "val_7.jpg"} />
          <ImageBox cimage={BASE_URL + "val_8.jpg"} />
          <ImageBox cimage={BASE_URL + "val_9.jpg"} />
          <ImageBox cimage={BASE_URL + "val_10.jpg"} />
        </Container>
      </div> */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8vh",
          paddingBottom: "8vh",
        }}
      >
        <Container
          sx={{
            height: "100%",
            // overflow: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            marginTop:'0px',
            flexWrap:'wrap',
            justifyContent:'space-around'
            //"&::-webkit-scrollbar": { display: "none" },
            // paddingBottom: 10,
          }}
        >
          <ImageBox cimage={GALLERY_BASE_URL + "sf-1.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-2.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-3.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-4.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-5.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-6.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-7.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-8.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-9.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-10.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-11.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-12.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-13.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-14.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-15.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-16.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-17.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-18.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-19.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-20.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-21.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-22.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-23.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-24.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-25.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-26.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-27.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-28.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-29.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-30.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-31.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-32.jpeg"} />
          <ImageBox cimage={GALLERY_BASE_URL + "sf-33.jpeg"} />
        </Container>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </Box>
  );
}
function ImageBox({ cimage }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {showLoader && (
        <ContentLoader
          speed={2}
          width={200}
          height={200}
          viewBox="0 0 200 200"
          style={{marginTop:"20px"}}
          backgroundColor="#242323"
          foregroundColor="#8a8a8a"
        >
          <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
        </ContentLoader>
      )}
      {!showLoader && (
        <Box
          sx={{
            marginLeft: 1.5,
            borderRadius: 1,
            marginTop:'20px',
          }}
        >
          <LazyLoadImage
            height={"200px"}
            // width={"200px"}
            objectFit="contain"
            
            src={cimage}
            effect="blur"
            style={{ marginLeft: 0, borderRadius: 1 }}
            placeholder={placeholder}
          />
        </Box>
      )}
    </div>
  );
}

const placeholder = <span>This span will get typed.</span>;
export default Gallery;
