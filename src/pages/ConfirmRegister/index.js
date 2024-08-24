import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Card } from "@mui/material";
import Marathonregister from "./Marathonregister.js";
import { CircularProgress } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "../../components/Modal/logoutModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MessageModal from "../../components/Modal/messageModal";
// import "./frostedEffect.css"

import {
    useGoogleReCaptcha,
    GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import SnackbarComponent from "./../../components/SnackBar/index";

const BackgroundImage = require("../../res/marathon2.png");

const handleRegCheckCall = async() => {
    try {
        const url = process.env.REACT_APP_BACKEND_BASE_URL;
        const response = await fetch(
            url + "api/getSetting/marathon-registeration", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        if (!response.ok) {
            throw {
                statusCode: response.status,
                message: data.message,
            };
        }
        return {
            ...data,
        };
    } catch (error) {
        throw {
            statusCode: error.statusCode || 500,
            message: error.message || "An unknown error occurred.",
        };
    }
};

function ConfirmRegister() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isLoading, setIsLoading] = useState(false);
    //const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    // const [statusCode, setStatusCode] = useState(0);
    const [SnackbarMessage, setSnackbarMessage] = useState("");
    const [SnackbarSeverity, setSnackbarSeverity] = useState("success");
    const [SnackbarOpen, setSnackbarOpen] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    function handleBackButtonClick() {
        navigate("/");
    }
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("participantDetails"))) {
            setToken(
                typeof window !== "undefined" ?
                JSON.parse(localStorage.getItem("participantDetails")).token :
                null
            );
        }
    }, []);

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };
        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);
        return () => {
            window.removeEventListener("online", handleStatusChange);
            window.removeEventListener("offline", handleStatusChange);
        };
    }, [isOnline]);

    const [regOpen, setRegOpen] = useState(false);

    useEffect(() => {
        (async() => {
            const resp = await handleRegCheckCall();
            // console.log("Resp" + resp.value);
            setRegOpen(resp.value);
        })();
    }, []);
    const HandleConfirmButtonClick = () => {
        setMessageModal({
            open: true,
            title: "Confirmation",
            message: "By clicking 'YES', you acknowledge that you are in good health and have no existing medical conditions that may affect your participation in the marathon.",
            yesFunc: () => {
                HandleConfirmButtonConfirmClick();
            },
        });
    }
    const HandleConfirmButtonConfirmClick = async() => {
        // await Marathonregister().then((res) => {
        //   console.log(res);
        //   if (res.status === 200) {
        //     console.log("Registered Successfully");
        //   }

        // });

        // navigate("/registered");
        if (!isOnline) {
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            setSnackbarMessage("Please connect to the internet.");
            return;
        } else {
            let reCaptchaToken = "";
            if (!executeRecaptcha) {
                //console.log("cannot be done");
            } else {
                reCaptchaToken = await executeRecaptcha();
                //console.log("done");
                if (!reCaptchaToken) {
                    setSnackbarSeverity("error");
                    setSnackbarOpen(true);
                    setSnackbarMessage("Please fill in all the fields.");
                    return;
                }
            }
            if (!reCaptchaToken) {
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                setSnackbarMessage("Please fill all fields.");
            } else {
                try {
                    setIsLoading(true);
                    const { message } = await Marathonregister(reCaptchaToken, token);
                    setIsLoading(false);
                    // console.log(localStorage.participantDetails)
                    // console.log(localStorage.participantDetails.isConfirmed)
                    // if(message==="Already Registered"){

                    // localStorage.setItem(localStorage.participantDetails.isConfirmed,true);
                    // }
                    //   for (var i = 0; i < localStorage.length; i++){
                    //     console.log(localStorage.getItem(localStorage.key(i)))
                    // }

                    let participantDetails = JSON.parse(
                        localStorage.getItem("participantDetails")
                    );
                    localStorage.setItem(
                        "participantDetails",
                        JSON.stringify({
                            ...participantDetails,
                            isMarathonRegistered: true,
                        })
                    );

                    setMessage(message);
                    setSnackbarMessage(message);
                    setSnackbarSeverity("success");
                    setSnackbarOpen(true);
                    setTimeout(() => {
                        navigate("/");
                    }, 500);
                    //   for (var j = 0; j < localStorage.length; j++){
                    //     console.log(localStorage)
                    // }
                } catch (error) {
                    setIsLoading(false);
                    if (error.statusCode === 400) {
                        setMessageModal({
                            open: true,
                            title: "Session Ended",
                            message: "Session ended. Please log back in again to continue!",
                            yesFunc: () => {
                                localStorage.removeItem("participantDetails");
                                navigate("/");
                            },
                        });
                    } else {
                        //console.error(error);
                        let snackBarMessage = "An unknown error occurred.";
                        let snackBarSeverity = "error";
                        switch (error.statusCode) {
                            case 500:
                                snackBarMessage =
                                    "Internal server error. Please try again later.";
                                break;
                            case 404:
                                snackBarMessage = error.message;
                                snackBarSeverity = "warning";
                                break;
                            case 401:
                                snackBarMessage =
                                    "You are not authorized to access this resource.";
                                navigate("/");
                                break;
                            case 402:
                                snackBarMessage = "Failed captcha verification";
                                break;
                            case 405:
                                snackBarMessage = error.message;
                                break;
                            default:
                                break;
                        }
                        setSnackbarSeverity(snackBarSeverity);
                        setSnackbarOpen(true);
                        setSnackbarMessage(snackBarMessage);
                    }
                }
            }
        }
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [messageModal, setMessageModal] = useState({
        open: false,
        title: "",
        message: "",
    });

    return ( <
        div style = {
            {
                display: "flex",
                overflow: "auto",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        } >
        <
        div style = {
            {
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
            }
        }
        onClick = { handleBackButtonClick } >
        <
        ArrowBackIcon / >
        <
        Typography sx = {
            {
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "15px",
                },
            }
        } >
        Back To Home <
        /Typography> < /
        div > <
        Card sx = {
            {
                maxWidth: 608,
                maxHeight: 387,
                // overflow: "auto",
                height: "100%",
                width: "100%",
                margin: "30px",
                borderRadius: 4,
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #DFE0EB",
                [theme.breakpoints.down("sm")]: {
                    maxWidth: 377,
                    maxHeight: 387,
                    borderRadius: 4,
                },
            }
        }
        className = "FrostedEffect" >
        <
        Modal open = { modalOpen }
        setOpen = { setModalOpen }
        /> <
        MessageModal modal = { messageModal }
        setModal = { setMessageModal }
        /> {
        /* <div
                  onClick={handleBackButtonClick}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Button
                    style={{
                      position: "absolute",
                      top: "30px",
                      left: "40px",
                      marginTop: "10px",
                      backgroundColor: "red",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    Go Home
                  </Button>
                </div> */
    }

    {
        /* <div
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
                  <LogoutIcon
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  />
                </div> */
    } <
    img src = "image/logo.png"
        //src="https://s3-alpha-sig.figma.com/img/267b/c487/f321c2fc6bf8630c249c5584122c0a6b?Expires=1679270400&Signature=GwpiDNM0EIyFKTNhUoj6x3xPlv7XkvtDRPW44UcTxJs9GwEZfjHSpjJBqMN0AwnbZ6WPgm51KPo8cZCHJHmPDX08XwTfRFoJehvJ2lFypGoTYWH-qXaMbSvJ~z8D5zj-OZE-E0qKL~j7Tn4t4rJEzd5zIqkJyymsUJPgIZ31vDJ1Fzbnj7KcnqdCMpYqJXpckKWLxTZ-8S1O03hc5ffB2aovtgtZlox8iqCprs6jkwg0hxZLp7dQiWbZrMGIUbqJ3dyVfciak-H64bbRMU1Upq52xyEeT9jC3OEZw1j-g9azthhGEChT3jI4FNK1Vwzb59PRYtA2n7zTJiv6w~DGQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    alt = "Sports council, NITT logo"
    style = {
        {
            width: 66,
            height: 65,
            marginBottom: 8,
            marginTop: 27,
        }
    }
    /> <
    Typography variant = "subtitle1"
    sx = {
        {
            fontFamily: "Poppins",
            fontSize: "19px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.4000000059604645px",
            color: "#252733",
            // opacity: "70%",
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
        }
    } > { " " }
    SPORTSFETE '23 < /
    Typography > {
            /* <Typography
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
                        color:"#1254C0",
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "21px",
                          lineHeight: "24px",
                          letterSpacing: "0.20000000298023224px",
                          width: "80%",
                          marginTop: "49px",
                        },
                      }}
                    >
                      Marathon Registration
                    </Typography> */
        } {
            regOpen ? ( <
                Typography variant = "subtitle1"
                sx = {
                    {
                        fontFamily: "Poppins",
                        fontSize: "22px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        letterSpacing: "0.30000001192092896px",
                        textAlign: "center",
                        color: "#252733",
                        marginBottom: "40px",
                        marginTop: "80px",
                        padding: "0",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "20px",
                            lineHeight: "25px",
                            letterSpacing: "0.20000000298023224px",
                            marginBottom: "15px",
                            marginTop: "35px",
                            padding: "10px 0",
                        },
                    }
                } >
                Confirm your registration
                for Marathon <
                /Typography>
            ) : ( <
                Typography variant = "subtitle1"
                sx = {
                    {
                        fontFamily: "Poppins",
                        fontSize: "22px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        letterSpacing: "0.30000001192092896px",
                        textAlign: "center",
                        color: "#252733",
                        marginBottom: "40px",
                        marginTop: "80px",
                        padding: "0",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "20px",
                            lineHeight: "25px",
                            letterSpacing: "0.20000000298023224px",
                            marginBottom: "15px",
                            marginTop: "35px",
                            padding: "10px 0",
                        },
                    }
                } >
                Registration is Closed!
                <
                /Typography>
            )
        } {
            regOpen && ( <
                Button variant = "contained"
                // disable={isLoading}
                style = {
                    { visibility: isLoading ? "hidden" : "visible" }
                }
                sx = {
                    {
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
                        marginBottom: "19px",
                        [theme.breakpoints.down("sm")]: {
                            width: "85%",
                            height: "40px",
                            marginTop: "0",
                            marginBottom: "83px",
                        },
                    }
                }
                onClick = { HandleConfirmButtonClick } >
                <
                Typography sx = {
                    {
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
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: "15px",
                        },
                    }
                } >
                Register For Marathon { " " } <
                /Typography> < /
                Button >
            )
        } <
        div style = {
            {
                margin: "auto",
                height: "20px",
                position: "relative",
                bottom: "55px",
            }
        } > {
            isLoading ? ( <
                CircularProgress / >
            ) : ( <
                div style = {
                    { height: "20px" }
                } > < /div>
            )
        } <
        /div>

    <
    SnackbarComponent open = { SnackbarOpen }
    onClose = { handleSnackbarClose }
    message = { SnackbarMessage }
    severity = { SnackbarSeverity }
    /> < /
    Card > <
        /div>
);
}

export default function Login() {
    const SITE_KEY = process.env.REACT_APP_SITE_KEY;
    return ( <
        GoogleReCaptchaProvider reCaptchaKey = { SITE_KEY }
        scriptProps = {
            { async: true }
        } >
        <
        ConfirmRegister / >
        <
        /GoogleReCaptchaProvider>
    );
}