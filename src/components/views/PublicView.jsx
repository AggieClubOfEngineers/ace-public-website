import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../public-pages/Home";
import AboutUs from "../public-pages/AboutUs";
import Service from "../public-pages/Service";
import Membership from "../public-pages/Membership";
import Recruitment from "../public-pages/Recruitment";
import ContactUs from "../public-pages/ContactUs";

import "../../styles/public-view.css";

const PublicView = ({ switchView }) => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab"));

  useEffect(() => {
    // whenever activeTab changes, update it in local storage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const getBackgroundStyle = () => {
    switch (activeTab) {
      case "home":
        return "url('./src/assets/img/BackgroundImages/NightZach.jpg')";
      case "about-us":
        return "url('./src/assets/img/BackgroundImages/zeec.jpg')";
      case "service":
        return "url('./src/assets/img/BackgroundImages/Website4.JPG')";
      case "membership":
        return "url('./src/assets/img/BackgroundImages/Website3.JPG')";
      case "contact-us":
        return "url('./src/assets/img/BackgroundImages/BG4.JPG')";
      case "recruitment":
        return "url('./src/assets/img/BackgroundImages/Website2.JPG')";
      default:
        return "url('./src/assets/img/BackgroundImages/NightZach.jpg')";
    }
  };

  const backgroundStyle = {
    backgroundImage: getBackgroundStyle(),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div id="root" className="public" style={backgroundStyle} key={activeTab}>
      <Router>
        <Header setActiveTab={setActiveTab} switchView={switchView} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/service" component={Service} />
            <Route path="/membership" component={Membership} />
            <Route path="/recruitment" component={Recruitment} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default PublicView;
