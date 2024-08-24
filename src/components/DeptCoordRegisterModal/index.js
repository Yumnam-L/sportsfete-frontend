import React, {useState, useEffect} from "react";
import {Button, TextField, Dialog, DialogActions, DialogContent,  DialogContentText, DialogTitle, Menu, MenuItem, Typography } from "@mui/material";
import GetLimits from "./getLimits"

import Select from "react-select"

export default function AlertDialog({ open, setOpen, api, setOpenSB, token, executeRecaptcha, setInvalidRolls }) {

  const handleCloseFunc = () => {
    setOpen('');
  };
  const handleSubmit = async () => {
    let reCaptchaToken = "";
    if (!executeRecaptcha) {
    } else {
        reCaptchaToken = await executeRecaptcha("yourAction");
    }

    const formData = new FormData();

    formData.append('file', file);
    formData.append('eventName', eventName.value);
    formData.append('register', open === 'Register' ? "true" : "false");

    api( setOpenSB, token, formData, reCaptchaToken, setInvalidRolls);
    handleCloseFunc();
  }

  const [file, setFile] = useState(null);


  const [eventName, setEventName] = useState("");

  const [limits, setLimits] = useState([]);

  useEffect(() => {
    GetLimits(setLimits, setOpenSB, token);
  }, []);

  const handleFileChange = (e) => {
    if (e.target && e.target.files) {
        setFile(e.target.files[0]);
      }
  }

  const eventData = [  { value: 'ATHLETICS', label: 'ATHLETICS' },  { value: 'BADMINTON', label: 'BADMINTON' },  { value: 'BASKETBALL', label: 'BASKETBALL' },  { value: 'CARROM', label: 'CARROM' },  { value: 'CHESS', label: 'CHESS' },  { value: 'CRICKET', label: 'CRICKET' },  { value: 'FOOTBALL', label: 'FOOTBALL' },  { value: 'HANDBALL', label: 'HANDBALL' },  { value: 'HOCKEY', label: 'HOCKEY' },  { value: 'KABADDI', label: 'KABADDI' },  { value: 'KHO-KHO', label: 'KHO-KHO' },  { value: 'MARATHON', label: 'MARATHON' },  { value: 'POWER LIFTING', label: 'POWER LIFTING' },  { value: 'SWIMMING', label: 'SWIMMING' },  { value: 'TABLE TENNIS', label: 'TABLE TENNIS' },  { value: 'TENNIS', label: 'TENNIS' },  { value: 'THROW BALL', label: 'THROW BALL' },  { value: 'VOLLEYBALL', label: 'VOLLEYBALL' },  { value: 'WEIGHT LIFTING', label: 'WEIGHT LIFTING' },  { value: 'YOGA', label: 'YOGA' }]


  return (
    <div>
      <Dialog
        open={Boolean(open)}
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
            Insert a CSV file with the required format!
          </DialogContentText>
        </DialogContent>
        <div style={{padding:'10px 50px'}}>
          <label>Event Name : </label>

          <Select
            value={eventName}
            onChange={setEventName}
            options={eventData}
          />

           <div
            style={{
              paddingTop: "20px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            {(eventName !== "" && limits[eventName] !== null) ? (
              <> Participants Limit : {limits[eventName]} </>
            ) : (
              <></>
            )}
          </div>

         <input type="file"  onChange={handleFileChange} style={{paddingTop:'10px'}} />
        </div>
   
         
  
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



const InvalidModal = ( { open, setOpen, invalidRolls }) => {
  const handleCloseFunc = () => {
    setOpen('');
  };

  return (
    <div>
    <Dialog
      open={Boolean(open)}
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
          Invalid Roll Numbers : 
        </DialogContentText>
      </DialogContent>
      <div style={{padding:'10px 50px'}}>
        {
          invalidRolls.map(rollno => (
            <Typography variant="subtitle1" color="textSecondary">
                {rollno}
            </Typography>
          ))
        }
     
      </div>
      <DialogActions>
          <Button
            onClick={handleCloseFunc}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            Close
          </Button>
        </DialogActions>
 
  
    </Dialog>
  </div>
  );
}

export {InvalidModal};