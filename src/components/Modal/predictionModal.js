import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function AlertDialog({ open, setOpen }) {
  const navigate = useNavigate();

  const handleCloseFunc = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    handleCloseFunc();
    localStorage.removeItem("participantDetails");
    navigate("/");
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseFunc}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ fontFamily: "Poppins" }}>LOGOUT</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "Poppins" }}
          >
            You are currently trying to logout from the screen.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLogout}
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
