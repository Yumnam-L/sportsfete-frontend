import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ modal, setModal }) {
  const handleClose = () => {
    setModal({ ...modal, open: false });
    modal.yesFunc();
  };
  return (
    <div>
      <Dialog
        open={modal.open}
        onClose={() => {
          setModal({ ...modal, open: false });
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ fontFamily: "Poppins" }}>{modal.title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "Poppins" }}
          >
            {modal.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setModal({ ...modal, open: false });
            }}
            style={{ textAlign: "center", fontFamily: "Poppins" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
