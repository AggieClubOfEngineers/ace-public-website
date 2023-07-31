import React, { useContext } from "react";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

import MemberContext from "../util/MemberContext";

const UpcomingEvents = () => {
  const { data, updateData } = useContext(MemberContext);

  const currentTime = Timestamp.now();
  const upcomingEvents = data.events.filter(
    (event) => event.start.toDate() >= currentTime.toDate()
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {upcomingEvents.map((event) => (
          <div className="event-container" key={event.id}>
            <div className="event-name">
              <h4>{event.name}</h4>
            </div>
            <hr />
            <div className="event-description">
              <h4>{event.title}</h4>
              <p>
                Start: {moment(event.start.toDate()).format("MM/DD HH:mm")}
                <br />
                End: {moment(event.end.toDate()).format("MM/DD HH:mm")}
                <br />
                Location: {event.location}
                <br /> {event.pointType} Points: {event.points}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
