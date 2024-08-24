import React, { useState, useRef, useEffect } from "react";
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

export default function UpdateEvent({
  open,
  setOpen,
  api,
  setOpenSB,
  token,
  executeRecaptcha,
  event,
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
    const minBet = minBetRef.current.value > 0 ? Number(minBetRef.current.value) : null;
    const maxBet =  maxBetRef.current.value > 0 ? Number(maxBetRef.current.value) : null
    if (minBet && !(minBet <= 100 && minBet >= 1)) {
      // console.log("Caught error");
      setOpenSB({
        open: true,
        message: "Min bet not in range",
        severity: "error",
        loading: true,
      });
      return;
    }
    if (maxBet && !(maxBet <= 100 && maxBet >= 1)) {
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
      name: nameRef.current.value !== '' ? nameRef.current.value : null,
      venue: venueRef.current.value !== '' ? venueRef.current.value : null,
      image: imageRef.current.value !== '' ? imageRef.current.value : null,
      time: isoTime,
      dept_1_name: dept1.value,
      dept_2_name: dept2.value,
      minBet: minBetRef.current.value > 0 ? Number(minBetRef.current.value) : null,
      maxBet: maxBetRef.current.value > 0 ? Number(maxBetRef.current.value) : null,
      dept_1_score: dept1scoreRef.current.value > 0 ? Number(dept1scoreRef.current.value) : null,
      dept_2_score:dept2scoreRef.current.value > 0 ? Number(dept2scoreRef.current.value) : null,
      result: resultRef.current.value !== '' ? resultRef.current.value : null,
    };

    const eventId = event._id;
    api(setOpenSB, token, body, reCaptchaToken, eventId);
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
  const dept1scoreRef = useRef();
  const dept2scoreRef = useRef();
  const resultRef = useRef();

  useEffect(() => {
    setDept1(event.dept_1_name);
    setDept2(event.dept_2_name);
  }, []);

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

        <ModalItem
          name="Name"
          refElem={nameRef}
          type="string"
          // defaultVal={event.name}
        />
        <ModalItem
          name="Venue"
          refElem={venueRef}
          type="string"
          // defaultVal={event.venue}
        />
        <ModalItem
          name="Time"
          refElem={timeRef}
          type="datetime-local"
          // defaultVal={moment(event.time).format("DD-MM-YYYY HH:mm")}
        />
        <ModalItem
          name="Image"
          refElem={imageRef}
          type="string"
          // defaultVal={event.image}
        />

        <div style={{ padding: "10px 50px" }}>
          <label>Department 1 : </label>
          <DeptMenu dept={dept1} setDept={setDept1} />
          <br />
        </div>

        <div style={{ padding: "10px 50px" }}>
          <label>Department 2 : </label>
          <DeptMenu dept={dept2} setDept={setDept2} />
          <br />
        </div>

        <ModalItem
          name="Min Bet"
          refElem={minBetRef}
          type="number"
          // defaultVal={event.minBet}
        />
        <ModalItem
          name="Max Bet"
          refElem={maxBetRef}
          type="number"
          // defaultVal={event.maxBet}
        />
        <ModalItem
          name="Dept 1 score"
          refElem={dept1scoreRef}
          type="number"
          // defaultVal={event.dept_1_score}
        />
        <ModalItem
          name="Dept 2 score"
          refElem={dept2scoreRef}
          type="number"
          // defaultVal={event.dept_2_score}
        />
        <ModalItem name="result" refElem={resultRef} type="string" />

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

const ModalItem = ({ name, refElem, type, defaultVal }) => {
  return (
    <div
      style={{
        padding: "10px 50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <label>{name} : </label>
      <input
        type={type}
        style={{ width: "70%" }}
        ref={refElem}
        defaultValue={defaultVal}
      ></input>
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
