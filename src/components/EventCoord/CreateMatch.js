import React, { useState, useRef } from "react";
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
import moment from "moment";

import Select from "react-select";

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
    const momentTime = moment(timeRef.current.value, "YYYY-MM-DDTHH:mm", true);
    const isoTime = momentTime.toISOString();
    const minBet = Number(minBetRef.current.value);
    const maxBet = Number(maxBetRef.current.value);
    if (!(minBet <= 100 && minBet >= 1)) {
      // console.log("Caught error");
      setOpenSB({
        open: true,
        message: "Min bet not in range",
        severity: "error",
        loading: true,
      });
      return;
    }
    if (!(maxBet <= 100 && maxBet >= 1)) {
      // console.log("Caught error");
      setOpenSB({
        open: true,
        message: "Max bet not in range",
        severity: "error",
        loading: true,
      });
      return;
    }

    const body = {
      name: nameRef.current.value,
      venue: venueRef.current.value,
      image: imageRef.current.value,
      time: isoTime,
      dept_1_name: dept1.value,
      dept_2_name: dept2.value,
      minBet: Number(minBetRef.current.value),
      maxBet: Number(maxBetRef.current.value),
    };

    api(setOpenSB, token, body, reCaptchaToken);
    handleCloseFunc();
  };

  const [dept1, setDept1] = useState("");
  const [dept2, setDept2] = useState("");

  const nameRef = useRef();
  const venueRef = useRef();
  const timeRef = useRef();
  const imageRef = useRef();
  const minBetRef = useRef();
  const maxBetRef = useRef();

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
        <ModalItem name="Name" refElem={nameRef} type="string" />
        <ModalItem name="Venue" refElem={venueRef} type="string" />
        <ModalItem name="Time" refElem={timeRef} type="datetime-local" />
        <ModalItem name="Image" refElem={imageRef} type="string" />

        <div style={{ padding: "0px 50px" }}>
          <label>Department 1 : </label>
          <DeptMenu dept={dept1} setDept={setDept1} />
          <br />
        </div>

        <div style={{ padding: "0px 50px" }}>
          <label>Department 2 : </label>
          <DeptMenu dept={dept2} setDept={setDept2} />
          <br />
        </div>

        <ModalItem name="Min Bet" refElem={minBetRef} type="number" />
        <ModalItem name="Max Bet" refElem={maxBetRef} type="number" />

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

const DeptMenu = ({ dept, setDept }) => {
  const deptData = [
    { value: "ARCH", label: "ARCH" },
    { value: "CHEM", label: "CHEM" },
    { value: "CIVIL", label: "CIVIL" },
    { value: "CSE", label: "CSE" },
    { value: "ECE", label: "ECE" },
    { value: "EEE", label: "EEE" },
    { value: "ICE", label: "ICE" },
    { value: "MBA", label: "MBA" },
    { value: "MCA", label: "MCA" },
    { value: "MECH", label: "MECH" },
    { value: "MME", label: "MME" },
    { value: "MTECH", label: "MTECH" },
    { value: "PROD", label: "PROD" },
    { value: "RESEARCH", label: "RESEARCH" },
  ];

  return <Select value={dept} onChange={setDept} options={deptData} />;
};
