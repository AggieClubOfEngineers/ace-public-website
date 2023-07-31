import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import HomeTab from "./HomeTab";
import CalendarTab from "./CalendarTab";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../config";

import MemberContext from "../util/MemberContext";
import PointsTab from "./PointsTab";
import CalendarEdit from "../util/CalendarActions";
import AllPointsTab from "./AllPointsTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "87vh", overflowY: "auto" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OfficerPage = ({ memberId }) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async (memberId) => {
    const eventsRef = collection(db, "events");
    const eventsSnapshot = await getDocs(eventsRef);
    let eventsData = eventsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const pointsRef = collection(db, "points");
    const q = query(pointsRef, where("memberId", "==", memberId));
    const pointsSnapshot = await getDocs(q);
    let pointsData = pointsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const allPointsRef = collection(db, "points");
    const q2 = query(allPointsRef, where("memberId", "==", memberId));
    const allPointsSnapshot = await getDocs(q2);
    let allPointsData = allPointsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    let data = {
      events: eventsData,
      points: pointsData,
      allPoints: allPointsData,
    };
    setData(data);
  };

  if (!data.events) {
    fetchData(memberId);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <MemberContext.Provider value={{ data, updateData: setData }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "5vh",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Member Page Tabs"
            sx={{
              "& .MuiTab-root": { fontSize: "1.5rem", minWidth: "10vw" },
              "& .Mui-selected": {
                outline: "none",
              },

              "& .Mui-focusVisible": {
                outline: "none",
              },
            }}
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Calendar" {...a11yProps(1)} />
            <Tab label="Points" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", height: "90vh" }}>
          <CustomTabPanel value={value} index={0}>
            {<HomeTab />}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {
              <div>
                <CalendarTab events={data.events} />
                <CalendarEdit />
              </div>
            }
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {<AllPointsTab />}
          </CustomTabPanel>
        </Box>
      </Box>
    </MemberContext.Provider>
  );
};

export default OfficerPage;
