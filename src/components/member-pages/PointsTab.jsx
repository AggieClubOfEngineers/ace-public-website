import React, { useContext } from "react";
const pointCategories = [
  "Social",
  "Service",
  "Family",
  "Committee",
  "Meeting",
  "Other",
];

import MemberContext from "../util/MemberContext";
import "../../styles/points-tab.css";
import PointsSummary from "../util/PointsSummary";

const PointsTab = () => {
  const { data, updateData } = useContext(MemberContext);

  const attendedEvents = data.points;
  const allEvents = data.events;

  // Group all events by category
  const eventsByCategory = pointCategories.map((category) => {
    const events = allEvents.filter((event) => event.pointType === category);
    const points = events.reduce((total, event) => total + event.points, 0);
    return {
      category,
      events,
      points,
    };
  });

  // Group all attendedEvents by category
  const attendedEventsByCategory = pointCategories.map((category) => {
    const events = attendedEvents.filter(
      (event) => event.pointType === category
    );
    const points = events.reduce((total, event) => total + event.points, 0);
    return {
      category,
      events,
      points,
    };
  });

  console.log(attendedEventsByCategory);

  // Create a map of attended events for easier lookup
  const attendedEventsMap = attendedEvents.reduce((map, event) => {
    map[event.eventId] = event.points;
    return map;
  }, {});

  return (
    <div className="points-container">
      <h2>Points Summary</h2>
      <hr />
      <PointsSummary
        pointCategories={pointCategories}
        attendedEventsByCategory={attendedEventsByCategory}
      />

      <h2>Details</h2>
      <hr />
      <div id="details-container">
        {eventsByCategory.map(({ category, events }) => (
          <div key={category} className="category-details">
            <h3>{category}</h3>
            <div className="row-container">
              {events.map((event) => (
                <div className="details-columns">
                  <span className="top-row" key={event.id}>
                    {event.name}
                  </span>
                  <span className="bottom-row" key={event.id}>
                    {attendedEventsMap[event.id] || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsTab;
