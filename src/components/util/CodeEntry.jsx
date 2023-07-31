import React, { useState } from "react";
import { SquareArrowRight } from "tabler-icons-react";
import { TextField } from "@mui/material";

import "../../firebase";
import db from "../../config";

import { doc, getDoc, writeBatch } from "firebase/firestore";

const updatePoints = async (userId, pointType, points, eventId) => {
  const attendanceRef = doc(db, "points", `${userId}_${eventId}`);

  // Check if the user has already been credited points for this event
  const attendanceSnap = await getDoc(attendanceRef);
  if (attendanceSnap.exists()) {
    throw new Error("User has already been credited points for this event.");
  }

  // Start a batch
  const batch = writeBatch(db);

  batch.set(attendanceRef, { userId, eventId, pointType, points });

  // Commit the batch
  await batch.commit();
};

const CodeEntry = ({ event }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const submitCode = async () => {
    if (code === event.code) {
      try {
        const userId = "john_doe";
        await updatePoints(userId, event.pointType, event.points, event.id);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to update points. Please try again.");
      }
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  return (
    <div>
      <div className="code-entry-container">
        <TextField
          id="outlined-helperText"
          label="Code"
          defaultValue=""
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="submit-button-container" onClick={submitCode}>
          <SquareArrowRight
            className="login-button-icon"
            strokeWidth={2}
            color={"black"}
            size={30}
          />
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CodeEntry;
