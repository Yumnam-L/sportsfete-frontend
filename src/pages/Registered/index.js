import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutModal from "../../components/Modal/logoutModal";
import { Typography, Button, Card } from "@mui/material";
// import "./frostedEffect.css"

const BackgroundImage = require("../../res/marathon2.png");

export default function SuccesfullyRegistered() {
  const theme = useTheme();
  const navigate = useNavigate();

  // const handleBackButtonClick = () => {
  //   navigate("/");
  // };

  const handleDoneButtonClick = () => {
    navigate("/");
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        overflow: "auto",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 608,
          maxHeight: 387,
          // overflow: "auto",
          height: "100%",
          width: "100%",
          margin: "30px",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "1px solid #DFE0EB",
          [theme.breakpoints.down("sm")]: {
            maxWidth: 377,
            maxHeight: 387,
            borderRadius: 8,
          },
        }}
        className="FrostedEffect"
      >
        <LogoutModal open={modalOpen} setOpen={setModalOpen} />
        {/* <div
          style={{
            position: "absolute",
            top: "30px",
            right: "40px",
            width: "20px",
            color: "#252733",
            opacity:'0.6',
            cursor: "pointer",
          }}
        >
          <LogoutIcon onClick={()=>setModalOpen(true)} />
        </div> */}
        <img
          src="image/logo.png"
          //src="https://s3-alpha-sig.figma.com/img/267b/c487/f321c2fc6bf8630c249c5584122c0a6b?Expires=1679270400&Signature=GwpiDNM0EIyFKTNhUoj6x3xPlv7XkvtDRPW44UcTxJs9GwEZfjHSpjJBqMN0AwnbZ6WPgm51KPo8cZCHJHmPDX08XwTfRFoJehvJ2lFypGoTYWH-qXaMbSvJ~z8D5zj-OZE-E0qKL~j7Tn4t4rJEzd5zIqkJyymsUJPgIZ31vDJ1Fzbnj7KcnqdCMpYqJXpckKWLxTZ-8S1O03hc5ffB2aovtgtZlox8iqCprs6jkwg0hxZLp7dQiWbZrMGIUbqJ3dyVfciak-H64bbRMU1Upq52xyEeT9jC3OEZw1j-g9azthhGEChT3jI4FNK1Vwzb59PRYtA2n7zTJiv6w~DGQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Sports council, NITT logo"
          style={{
            width: 66,
            height: 65,
            marginBottom: 8,
            marginTop: 27,
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins",
            fontSize: "19px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.4000000059604645px",
            color: "#252733",
            opacity: "70%",
            height: "24px",
            marginLeft: "32px",
            marginRight: "32px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "15px",
              lineHeight: "18px",
              letterSpacing: "0.20000001192092896px",
              height: "20px",
              textAlign: "center",
            },
          }}
        >
          {" "}
          SPORTSFETE'23
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins",
            fontSize: "27px",
            fontWeight: 700,
            lineHeight: "31px",
            letterSpacing: "0.30000001192092896px",
            textAlign: "center",
            width: "544px",
            height: "28px",
            marginTop: "49px",
            color: "#1254C0",
            [theme.breakpoints.down("sm")]: {
              fontSize: "21px",
              lineHeight: "24px",
              letterSpacing: "0.20000000298023224px",
              width: "80%",
              marginTop: "49px",
            },
          }}
        >
          Already Registered!
        </Typography>
        {/* <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.30000001192092896px",
            textAlign: "center",
            color: "#9FA2B4",
            marginBottom: "49px",
            marginTop: "16px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: "0.20000000298023224px",
              marginBottom: "30px",
              marginTop: "10px",
            },
          }}
        >
          Wait for further notifications
        </Typography> */}
        <Button
          variant="contained"
          sx={{
            width: "90%",
            margin: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            border: "2px solid #1e87f0",
            color: "#1e87f0",
            "&:hover": {
              backgroundColor: "#1e87f0",
              color: "white",
            },
            height: "48px",
            boxShadow: "0px 1px 5px rgba(55, 81, 255, 0.24)",
            borderRadius: "8px",
            marginBottom: "79px",

            [theme.breakpoints.down("sm")]: {
              width: "85%",
              height: "40px",
              marginTop: "20px",
              marginBottom: "83px",
            },
          }}
          onClick={handleDoneButtonClick}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: 800,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              textAlign: "center",
              height: "20px",
              width: "100%",
              maxWidth: "496px",
              marginTop: "15px",
              marginLeft: "24px",
              marginRight: "24px",
              marginBottom: "13px",
              [theme.breakpoints.down("sm")]: {
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            Go To Home{" "}
          </Typography>
        </Button>
        {/* <div
          style={{
            position: "absolute",
            top: theme.spacing(2),
            left: theme.spacing(2),
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(1),
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              top: theme.spacing(1),
              left: theme.spacing(1),
              padding: theme.spacing(0.5),
            },
          }}
          onClick={handleBackButtonClick}
        >
          <ArrowBackIcon />
          <Typography
            sx={{
                fontFamily: "Poppins",
              fontSize: "19px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              [theme.breakpoints.down("sm")]: {
                fontSize: "15px",
              },
            }}
          >
            Back To SportsFete
          </Typography>
        </div> */}
      </Card>
    </div>
  );
}
