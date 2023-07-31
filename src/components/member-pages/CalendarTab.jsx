import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarTab = ({ events }) => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Convert Firebase Timestamps to Dates
  const eventsWithDates = events.map((event) => ({
    ...event,
    start: event.start.toDate(),
    end: event.end.toDate(),
    title: event.name,
  }));

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: 500, color: "#123456" }}>
      <Calendar
        localizer={localizer}
        events={eventsWithDates}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "70vw", margin: "auto" }}
        onSelectEvent={handleEventClick}
      />
      {selectedEvent && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedEvent.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Description: {selectedEvent.description} <br />
              Location: {selectedEvent.location} <br />
              Points: {selectedEvent.points} <br />
              Start: {moment(selectedEvent.start).format(
                "MMMM Do, h:mm A"
              )}{" "}
              <br />
              End: {moment(selectedEvent.end).format("MMMM Do, h:mm A")} <br />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CalendarTab;
