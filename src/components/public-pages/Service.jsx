import React from "react";
import CampHopeBanner from "../../assets/img/CampHopeLogo.png";
import S4HImage from "../../assets/img/swingingForHopeBoys.png";
import S4HLogo from "../../assets/img/swingingForHopeLogoSquare.png";
import BGCImage from "../../assets/img/BGCBV.jpg";
import BGCLogo from "../../assets/img/BGC.jpg";
import BSBImage from "../../assets/img/BSB2022.jpeg";
import BSBLogo from "../../assets/img/BSBBannerCrop.png";

import "../../styles/service.css";

import Carousel from "../util/Carousel";

import slide1 from "../../assets/img/2023Photos/bsb1.JPG";
import slide2 from "../../assets/img/2023Photos/service2.jpeg";
import slide3 from "../../assets/img/2023Photos/service1.jpeg";
import slide4 from "../../assets/img/2023Photos/bsb2.png";

function Service() {
  const images = [slide1, slide2, slide4, slide3];
  return (
    <div className="service-content">
      <div className="service-container philanthropy-container">
        <h2 className="service-title">Our Philanthropy</h2>
        <hr className="partial-divider" />
        <div>
          <img class="camphope-banner" src={CampHopeBanner} alt="Camp Hope" />
        </div>
        <p className="service-description camp-hope-content">
          From it's inception, ACE has been committed to giving back to its
          local community. Over the years, we have supported various charities
          in the Bryan/College Station area including Camp Kesem, Bryan's Food
          Bank, and most recently - <b>Camp Hope.</b>
        </p>
        <p>
          Camp Hope is a foundation which helps connect combat veterans to vital
          resources they need to deal with the transition back to civilian life.
          These resources include peer support and mentoring for those suffering
          from the effects of PTSD, interim housing, and above all, a support
          group of peers and professionals who understand the real impact combat
          can have on one person. If you would like to learn more about or get
          in contact with this excellent charity, please visit{" "}
          <a
            id="ptsd-link"
            href="https://ptsdusa.org/camp-hope/"
            target="_blank"
          >
            PTSD USA's website
          </a>
          .
        </p>
        <p>
          We are proud to say we raised over $10,000 for Camp Hope in the 22-23
          year!
        </p>
        <hr className="full-size-divider" />
      </div>
      <div className="service-container">
        <h2 className="service-title">Swinging For Hope</h2>
        <hr className="partial-divider" />
        <img
          className="service-logo"
          id="s4h-logo"
          src={S4HLogo}
          alt="Swinging For Hope Logo"
        />
        <p className="service-description">
          Our annual Swinging for Hope event is happening again at Big Shots
          Golf in Bryan, Texas! Come out for golfing, cornhole, a hot wing
          eating contest, and of course good food and drinks. All the proceeds
          go to Camp Hope and The PTSD Foundation of America. More details to
          come.
        </p>
        <div className="service-additional-content">
          <img id="s4h-img" src={S4HImage} />
        </div>
        <hr className="full-size-divider" />
      </div>
      <div className="service-container">
        <h2 className="service-title">Boot Scootin Boogie</h2>
        <hr className="partial-divider" />
        <img
          id="bsb-logo"
          className="service-logo"
          src={BSBLogo}
          alt="Swinging For Hope Logo"
        />
        <p className="service-description">
          Boot Scootin' Boogie is ACE's other annual philanthropy event hosted
          alongside Aggieland's finest, Aggie Sweethearts. Through this
          partnership, ACE & Sweethearts work to raise money through a charity
          concert hosted at the tap. With ticket and raffle sales directly
          benefiting ACE & Sweethearts charities of choice, this is a wonderful
          way to get involved and to give back.
        </p>
        <div className="service-additional-content">
          <img id="bsb-img" src={BSBImage} />
        </div>
        <hr className="full-size-divider" />
      </div>
      <div className="service-container">
        <h2 className="service-title">Boys and Girls Club</h2>
        <hr className="partial-divider" />
        <img
          id="bgc-logo"
          className="service-logo"
          src={BGCLogo}
          alt="Boys and Girls Club Logo"
        />
        <p className="service-description">
          ACE partners with the Boys & Girls Club of Brazos Valley through
          regular workshops. As engineers, we have the unique opportunity to
          expose the children of the Boys & Girls Club to STEM ideas and
          principles and a very young age - working to build the next generation
          of engineers, computer scientists, entrepreneurs, and much more.
          Through our work with the youth of Brazos Valley, we are hoping to
          make both a personal and educational impact.
        </p>
        <div className="service-additional-content">
          <img id="bgc-img" src={BGCImage} />
        </div>
        <hr className="full-size-divider" />
      </div>

      <div id="service-carousel-container">
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default Service;
