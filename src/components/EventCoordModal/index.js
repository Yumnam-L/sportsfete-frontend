import React from "react";
import {
  Backdrop,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ParticipantModal(props) {
  const { event, participants, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {event}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {participants && participants.length > 0 ? (
          participants.map((participant) => (
            <Box
              key={participant.rollno}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#f5f5f5"
              padding="10px"
              borderRadius="10px"
              marginBottom="10px"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  {participant.name ? participant.name : "No participant found"}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {" "}
                  (
                  {participant.rollno
                    ? participant.rollno
                    : "No participant found"}
                  )
                </Typography>
              </div>
            </Box>
          ))
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#f5f5f5"
            padding="10px"
            borderRadius="10px"
            marginBottom="10px"
          >
            <Typography>No participant found</Typography>
          </Box>
        )}
      </DialogContent>
      <Backdrop
        open={open}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box bgcolor="#fff" borderRadius="10px" padding="30px">
          <Typography variant="h6" align="center">
            Participants
          </Typography>
          {participants && participants.length > 0 ? (
            participants.map((participant) => (
              <Box
                key={participant.rollno}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#f5f5f5"
                padding="10px"
                borderRadius="10px"
                marginBottom="10px"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography>
                    {participant.name
                      ? participant.name
                      : "No participant found"}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {" "}
                    (
                    {participant.rollno
                      ? participant.rollno
                      : "No participant found"}
                    )
                  </Typography>
                </div>
              </Box>
            ))
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#f5f5f5"
              padding="10px"
              borderRadius="10px"
              marginBottom="10px"
            >
              <Typography>No participant found</Typography>
            </Box>
          )}
        </Box>
      </Backdrop>
    </Dialog>
  );
}

export default ParticipantModal;
