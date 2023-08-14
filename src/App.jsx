import React, { useState, useEffect } from "react";

import PublicView from "./components/views/PublicView";
import PrivateView from "./components/views/PrivateView";

const App = () => {
  const initialView = localStorage.getItem("activeView") || "public";
  const [activeView, setActiveView] = useState(initialView);

  useEffect(() => {
    // whenever activeView changes, update it in local storage
    localStorage.setItem("activeView", activeView);
  }, [activeView]);

  function switchView() {
    setActiveView((prevView) => (prevView === "public" ? "member" : "public"));
  }

  return activeView === "public" ? (
    <PublicView switchView={switchView} />
  ) : (
    <PrivateView switchView={switchView} />
  );
};

export default App;
