import React, { useState, useEffect } from "react";

import PublicView from "./components/views/PublicView";
import PrivateView from "./components/views/PrivateView";

const App = () => {
  const [activeView, setActiveView] = useState(
    localStorage.getItem("activeView")
  );

  useEffect(() => {
    // whenever activeTab changes, update it in local storage
    localStorage.setItem("activeView", activeView);
  }, [activeView]);

  function switchView() {
    if (!activeView || activeView == "public") {
      setActiveView("member");
    } else {
      setActiveView("public");
    }
  }

  if (!activeView || activeView == "public")
    return <PublicView switchView={switchView} />;
  else return <PrivateView switchView={switchView} />;
};

export default App;
