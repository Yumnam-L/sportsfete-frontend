import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";

import Select from "react-select"

export default function UpdateStatus({
  open,
  setOpen,
  api,
  setOpenSB,
  token,
  executeRecaptcha,
  event
}) {
  const handleCloseFunc = () => {
    setOpen("");
  };

   const [statusNew, setStatus] = useState(event.status)
  const handleSubmit = async () => {
    let reCaptchaToken = "";
    if (!executeRecaptcha) {
    } else {
      reCaptchaToken = await executeRecaptcha("yourAction");
    }
    const body = {
       status : statusNew.value,
    }

    const eventId = event._id
    api(setOpenSB, token, body, reCaptchaToken, eventId);
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
            Modify Match Status :
          </DialogContentText>
        </DialogContent>


        <div style={{ padding: "0px 50px" }}>
          <StatusMenu status={statusNew} setStatus={setStatus} />
          <br />
        </div>


        <DialogActions>
          <Button
            onClick={handleSubmit}
            style={{ textAlign: "center", fontFamily: "Poppins" ,  marginTop:'100px'}}
          >
            Submit!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const StatusMenu = ({ status, setStatus }) => {

  const statusData = [  { value: 'UPCOMMING', label: 'UPCOMMING' },  { value: 'BETTING', label: 'BETTING' },  { value: 'LIVE', label: 'LIVE' },  { value: 'PAST', label: 'PAST' }]

  return (
    
      <Select
      value={status}
      onChange={setStatus}
      options={statusData}
    />
    
  );
};
