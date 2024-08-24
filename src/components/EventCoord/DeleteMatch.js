import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteMatch({
  open,
  setOpen,
  api,
  setOpenSB,
  token,
  executeRecaptcha,
  notification
}) {
  const handleCloseFunc = () => {
    setOpen("");
  };
  const handleSubmit = async () => {
    let reCaptchaToken = "";
    if (!executeRecaptcha) {
    } else {
      reCaptchaToken = await executeRecaptcha("yourAction");
    }

    const notificationID = notification._id
    // console.log(notificationID)
    api(setOpenSB, token, reCaptchaToken, notificationID);
    handleCloseFunc();
  };



  return (
    <div>
      <Dialog
        open={Boolean(open !== '')}
        onClose={handleCloseFunc}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ fontFamily: "Poppins" }}>{open}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "Poppins" }}
          >
            Do you want to delete the match? This cannot be reversed
          </DialogContentText>
        </DialogContent>


        <DialogActions>
          <Button
            onClick={handleSubmit}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            Yes
          </Button>
          <Button
            onClick={handleCloseFunc}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

