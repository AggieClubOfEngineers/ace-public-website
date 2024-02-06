import React from "react";

import slide1 from "../../assets/img/2023Photos/misc4.jpeg";
import slide2 from "../../assets/img/2023Photos/bsb1.JPG";
import slide3 from "../../assets/img/2023Photos/songfest.jpg";
import slide4 from "../../assets/img/breck2021.png";
import slide5 from "../../assets/img/2023Photos/misc2.jpg";
import slide6 from "../../assets/img/cafexaceBoard.jpeg";

import logo from "../../assets/img/logo.png";
import nightBackground from "../../assets/img/BackgroundImages/NightZach.jpg";
import videoSrc from "../../assets/videos/ACE_video.mp4";
import spikeball from "../../assets/img/SpikeBall.png";
import parents from "../../assets/img/momsday_2019.jpg";
import poster from "../../assets/img/logo.jpg";
import Carousel from "../util/Carousel";

import "../../styles/home.css";

function Home() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <div>
      <img id="home-logo" src={logo} alt="logo" />
      <img id="wall-remap" src={nightBackground} alt="logo" />
      <span id="full-page-spacer" />
      <div className="home-content">
        <div className="text-pages">
          <div id="welcome-container">
            <div className="welcome-text">
              <h2 id="welcome-title">Who Are We?</h2>
              <hr />
              <div className="welcome-video">
                <video controls poster={poster}>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p>
                Aggie Club of Engineers is a social, service, and leadership
                organization strongly rooted in academics. ACE is based on the
                premise that bringing together student leaders from all levels
                and disciplines of Engineering will promote success. It is
                founded on the ideal that engineers should not only develop
                strongly in academics but also be of strong character. The
                purpose of Aggie Club of Engineers is to develop our members as
                successful Aggies and leaders through a primary emphasis on
                academic success and character development while also improving
                Aggieland through focuses on service
              </p>

              <Carousel images={images} />
            </div>
          </div>
          <h1 id="highlights-container-title">Highlights</h1>
          <div className="highlights-container">
            <div className="highlight">
              <h3>Recruitment</h3>
              <hr className="highlight-divider" />
              <p>
                ACE recruitment takes places once a year during the start of the
                fall semester. Application will go live near the start of the
                semester.
              </p>
              <img className="highlight-image" src={spikeball} />
            </div>
            <div className="highlight">
              <h3>Boot Scootin' Boogie</h3>
              <hr className="highlight-divider" />
              <p>
                Boot Scootin' Boogie is ACE's other annual philanthropy event
                hosted alongside Aggieland's finest, Aggie Sweethearts. We work
                to raise money through a charity concert hosted at the Tap. More
                details to come.
              </p>
              <img className="highlight-image" src={slide2} />
            </div>
            <div className="highlight">
              <h3>Parents Weekend</h3>
              <hr className="highlight-divider" />
              <p>
                Families of ACE: Bring your folks to experience a slice of our
                brotherhood during our annual Parents' Weekend; let them see why
                we are more than just an org, but a family.
              </p>
              <img className="highlight-image" src={parents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
