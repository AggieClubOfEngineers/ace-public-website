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

import nightZachImg from "../../assets/img/BackgroundImages/NightZach.jpg";
import zeeImg from "../../assets/img/BackgroundImages/zeec.jpg";
import website4Img from "../../assets/img/BackgroundImages/Website4.png";
import website3Img from "../../assets/img/BackgroundImages/Website3.png";
import bg4Img from "../../assets/img/BackgroundImages/BG4.png";
import website2Img from "../../assets/img/BackgroundImages/Website2.png";

import "../../styles/public-view.css";

const PublicView = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab"));

  useEffect(() => {
    // whenever activeTab changes, update it in local storage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const getBackgroundStyle = () => {
    switch (activeTab) {
      case "home":
        return `url('${nightZachImg}')`;
      case "about-us":
        return `url('${zeeImg}')`;
      case "service":
        return `url('${website4Img}')`;
      case "membership":
        return `url('${website3Img}')`;
      case "contact-us":
        return `url('${bg4Img}')`;
      case "recruitment":
        return `url('${website2Img}')`;
      default:
        return `url('${nightZachImg}')`;
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
        <Header setActiveTab={setActiveTab} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/service" component={Service} />
            <Route path="/membership" component={Membership} />
            {/* <Route path="/recruitment" component={Recruitment} /> */}
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default PublicView;
