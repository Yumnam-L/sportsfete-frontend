import React, { useState, } from "react";
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

export default function Winner({
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

   const [winnerNew, setWinner] = useState(event.winner)
  const handleSubmit = async () => {
    let reCaptchaToken = "";
    if (!executeRecaptcha) {
    } else {
      reCaptchaToken = await executeRecaptcha("yourAction");
    }
    const eventId = event._id
    const body = {
        deptName : winnerNew.value,
        matchId : eventId
    }
   
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
            Add Match Winner :
          </DialogContentText>
        </DialogContent>


        <div style={{ padding: "10px 50px" }}>
          <WinnerMenu winner={winnerNew} setWinner={setWinner} dept1={event.dept_1_name} dept2={event.dept_2_name} />
          <br />
        </div>


        <DialogActions>
          <Button
            onClick={handleSubmit}
            style={{ textAlign: "center", fontFamily: "Poppins" , marginTop:'50px'}}
          >
            Submit!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const WinnerMenu = ({  winner, setWinner, dept1, dept2 }) => {

  const statusData = [  { value: dept1, label: dept1 },  { value: dept2, label: dept2 }]

  return (
    
    <Select
      value={winner}
      onChange={setWinner}
      options={statusData}
    />
    
  );
};
