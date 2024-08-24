import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";


export default function CreateMatch({
  open,
  setOpen,
  api,
  setOpenSB,
  token,
  executeRecaptcha,
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

    const body = {
      text: textRef.current.value,
    };

    api(setOpenSB, token, body, reCaptchaToken);
    handleCloseFunc();
  };


  const textRef = useRef();


  return (
    <div>
      <Dialog
        open={Boolean(open !== "")}
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
            Enter the following details :
          </DialogContentText>
        </DialogContent>
        <ModalItem name="Text" refElem={textRef} type="string" />
        
        <DialogActions>
          <Button
            onClick={handleSubmit}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            Submit!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const ModalItem = ({ name, refElem, type }) => {
  return (
    <div
      style={{
        padding: "10px 50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <label>{name} : </label>
      <input type={type} style={{ width: "70%" }} ref={refElem}></input>
    </div>
  );
};

