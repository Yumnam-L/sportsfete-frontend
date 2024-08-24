import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography, Button, Card, TextField } from "@mui/material";
import { saveAs } from "file-saver";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { CSVAPICall } from "./csvAPI";
import SnackbarComponent from "./../../components/SnackBar/index";

const BackgroundImage = require("../../res/marathon2.png");

function downloadDepartmentCSV(department, departmentData) {
  const header = "Name,Roll Number,Department" + "\n";

  const rows = departmentData
    .map((student) => Object.values(student).join(","))
    .join("\n");
  const csv = header + rows;

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  saveAs(blob, `${department}.csv`);
}

function CSVDownload() {
  const theme = useTheme();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [SnackbarMessage, setSnackbarMessage] = useState("a");
  const [SnackbarSeverity, setSnackbarSeverity] = useState("info");
  const [SnackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCSV = async () => {
    setIsLoading(true);
    let reCaptchaToken = "";
    if (!executeRecaptcha) {
      //console.log("cannot be done");
    } else {
      reCaptchaToken = await executeRecaptcha();
      //console.log("done");
      if (!code || !reCaptchaToken) {
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setSnackbarMessage("Please enter all the fields");
        return;
      }
    }
    if (!code || !reCaptchaToken) {
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setSnackbarMessage("Please enter all the fields");
    } else {
      try {
        const { message } = await CSVAPICall(code, reCaptchaToken);
        setSnackbarMessage("Download will commence shortly");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        const len = Object.keys(message).length;

        for (let i = 0; i < len; i++) {
          let name = Object.keys(message)[i];
          downloadDepartmentCSV(name, message[name]);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        //console.error(error);
        let snackBarMessage = "An unknown error occurred.";
        let snackBarSeverity = "error";
        switch (error.statusCode) {
          case 500:
            snackBarMessage = "Internal server error. Please try again later.";
            snackBarSeverity = "warning";
            break;
          case 404:
            snackBarMessage = "The specified resource was not found.";
            snackBarSeverity = "warning";
            break;
          case 402:
            snackBarMessage = "Failed captcha verification";
            break;
          case 405:
            snackBarMessage = "Invalid Admin Access Code";
            snackBarSeverity = "info";
          default:
            break;
        }
        setSnackbarSeverity(snackBarSeverity);
        setSnackbarOpen(true);
        setSnackbarMessage(snackBarMessage);
      }
    }
  };

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
          maxHeight: 420,
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
        <img
          src="image/logo.png"
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
          Sports Council, NITT
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
          Download CSV file
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter Code to download CSV files"
          value={code}
          style={{
            borderRadius: 8,
            backgroundColor: "#FCFDFE solid #F0F1F7",
            borderWidth: 1,
            height: "30px",
            width: "50%",
            marginTop: "30px",
            marginBottom: "30px",
            fontFamily: "Poppins",
            [theme.breakpoints.down("sm")]: {
              height: "7vh",
            },
          }}
          onChange={(event) => {
            const text = event.target.value;
            setCode(text);
            setError("");
          }}
          inputProps={{
            style: { textAlign: "center" },
          }}
          helperText={error}
          onKeyDown={(ev) => {
            //console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              ev.preventDefault();
              handleCSV();
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleCSV}
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
            marginTop: "25px",
            [theme.breakpoints.down("sm")]: {
              width: "85%",
              height: "40px",
              marginTop: "20px",
              marginBottom: "83px",
            },
          }}
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
            Download{" "}
          </Typography>
        </Button>
      </Card>
      <SnackbarComponent
        open={SnackbarOpen}
        onClose={handleSnackbarClose}
        message={SnackbarMessage}
        severity={SnackbarSeverity}
      />
    </div>
  );
}

export default function CSV() {
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      <CSVDownload />
    </GoogleReCaptchaProvider>
  );
}
