import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import MemberContext from "./MemberContext"; // Update this to your MemberContext path
import AddEventDialog from "./AddEventDialog"; // Update this to your AddEventDialog path
import "../../styles/calendar.css";
import { addEvent, deleteEvent } from "../../firebase";

const CalendarActions = () => {
  const { data, updateData } = useContext(MemberContext);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [open, setOpen] = useState(false);
  const [addEventDialogOpen, setAddEventDialogOpen] = useState(false);

  const handleAddEvent = () => {
    setAddEventDialogOpen(true);
  };

  const handleAddEventDialogClose = () => {
    setAddEventDialogOpen(false);
  };

  const handleAddEventSubmit = (newEvent) => {
    addEvent(newEvent);
    updateData({ ...data, events: [...data.events, newEvent] });
  };

  const handleDeleteEvent = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const confirmDeleteEvent = () => {
    const updatedEvents = data.events.filter(
      (event) => event.id !== selectedEventId
    );
    deleteEvent(selectedEventId);
    updateData({ ...data, events: updatedEvents });
    setOpen(false);
  };

  return (
    <div className="calendar-actions-container">
      <Button startIcon={<AddIcon />} onClick={handleAddEvent}>
        Add Event
      </Button>
      <AddEventDialog
        open={addEventDialogOpen}
        handleClose={handleAddEventDialogClose}
        handleAddEvent={handleAddEventSubmit}
      />
      <div className="delete-event">
        <Select
          value={selectedEventId}
          onChange={(e) => setSelectedEventId(e.target.value)}
        >
          {data.events.map((event) => (
            <MenuItem value={event.id}>{event.name}</MenuItem>
          ))}
        </Select>
        <Button startIcon={<DeleteIcon />} onClick={handleDeleteEvent}>
          Delete Event
        </Button>
        <Dialog
          open={open}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm Delete Event"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this event?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={confirmDeleteEvent} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default CalendarActions;
