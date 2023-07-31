import React, { useState, useEffect } from "react";
import ActiveEvents from "../util/ActiveEvents";
import UpcomingEvents from "../util/UpcomingEvents";

import "../../styles/home-tab.css";

const HomeTab = ({ events }) => {
  return (
    <div>
      <ActiveEvents events={events} />
      <UpcomingEvents events={events} />
    </div>
  );
};

export default HomeTab;
