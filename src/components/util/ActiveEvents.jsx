import React, { useContext } from "react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

import CodeEntry from "./CodeEntry";

import MemberContext from "../util/MemberContext";

const ActiveEvents = () => {
  const { data, updateData } = useContext(MemberContext);

  const currentTime = Timestamp.now();
  const activeEvents = data.events.filter(
    (event) =>
      event.start.toDate() <= currentTime.toDate() &&
      (event.pointType == "meeting"
        ? event.end.toDate() >= currentTime.toDate()
        : event.end.toDate() >= currentTime.toDate() - 24 * 60 * 60 * 1000) // 24 hours ago
  );

  return (
    <div>
      <h2>Active Events</h2>
      <div className="events-container">
        {activeEvents.map((event) => (
          <div className="event-container active" key={event.id}>
            <div className="event-name">
              <h4>{event.name}</h4>
            </div>
            <hr />
            <div className="event-description">
              <h4>{event.description}</h4>
              <p>
                <br />
                Location: {event.location}
                <br /> {event.pointType} Points: {event.points}
                <br />
                {moment(event.start.toDate()).format("MM/DD HH:mm")} -{" "}
                {moment(event.end.toDate()).format("MM/DD HH:mm")}
              </p>
            </div>
            {event.code && <CodeEntry event={event} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveEvents;
