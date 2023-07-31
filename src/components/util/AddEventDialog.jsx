import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@material-ui/core";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Timestamp } from "firebase/firestore";
import moment from "moment";

const pointTypes = [
  "Social",
  "Service",
  "Family",
  "Committee",
  "Meeting",
  "Other",
];

const AddEventDialog = ({ open, handleClose, handleAddEvent }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [pointType, setPointType] = useState("");
  const [points, setPoints] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    const event = {
      name,
      location,
      start: Timestamp.fromDate(start),
      end: Timestamp.fromDate(end),
      pointType,
      points: Number(points),
      description,
      code,
    };
    handleAddEvent(event);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Location"
          fullWidth
          onChange={(e) => setLocation(e.target.value)}
        />
        <Datetime
          inputProps={{ placeholder: "Start Time" }}
          onChange={(date) => setStart(moment(date).toDate())}
        />
        <Datetime
          inputProps={{ placeholder: "End Time" }}
          onChange={(date) => setEnd(moment(date).toDate())}
        />
        <TextField
          select
          label="Point Type"
          value={pointType}
          onChange={(e) => setPointType(e.target.value)}
          fullWidth
        >
          {pointTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Points"
          type="number"
          fullWidth
          onChange={(e) => setPoints(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Code"
          fullWidth
          onChange={(e) => setCode(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Event</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventDialog;
