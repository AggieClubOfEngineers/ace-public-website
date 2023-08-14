import React from "react";

import "../../styles/recruitment.css";

import glory from "../../assets/img/2022Headshots/glory.jpg";
import brandonTurnage from "../../assets/img/2022Headshots/brandonTurnage.jpg";
import nickDitt from "../../assets/img/2022Headshots/nickDitt.jpg";
import amritNanda from "../../assets/img/2022Headshots/amritNanda.jpg";
import andrewMarshall from "../../assets/img/2022Headshots/andrewMarshall.jpg";
import connorGilliland from "../../assets/img/2022Headshots/connorGilliland.jpg";
import drewRemington from "../../assets/img/2022Headshots/drewRemington.jpg";
import hudsonHurtig from "../../assets/img/2022Headshots/hudsonHurtig.jpeg";
import jacobTech from "../../assets/img/2022Headshots/jacobTech.jpg";
import joeyKacer from "../../assets/img/2022Headshots/joeyKacer.jpg";
import JonathanKutsch from "../../assets/img/HeadshotsFall2020Compressed/JonathanKutsch.jpg";
import josephValenta from "../../assets/img/2022Headshots/josephValenta.jpg";
import lucasGiammona from "../../assets/img/2022Headshots/lucasGiammona.jpg";
import nathanCasazza from "../../assets/img/2022Headshots/nathanCasazza.jpg";
import nils from "../../assets/img/2022Headshots/nils.jpg";
import peytonW from "../../assets/img/2022Headshots/peytonW.jpg";
import prestonGreenwood from "../../assets/img/2022Headshots/prestonGreenwood.jpg";
import RyanRiddle from "../../assets/img/Additional_Headshots/RyanRiddle.jpg";
import sidVenk from "../../assets/img/2022Headshots/sidVenk.jpg";
import andrewLin from "../../assets/img/2022Headshots/andrewLin.jpg";
import grantShuttle from "../../assets/img/2022Headshots/grantShuttle.jpg";

const Recruitment = () => (
  <div className="recruitment-content">
    <h1 className="informationals-title">Informationals</h1>
    <hr className="under-title" />
    <div className="informationals-content">
      <div className="informational">
        <h5>August 23rd</h5>
        <p>7:00 - 8:00PM</p>
        <p>Rudder 301</p>
      </div>
      <div className="informational">
        <h5>August 24th</h5>
        <p>8:30 - 9:30PM</p>
        <p>Rudder 301</p>
      </div>
      <div className="informational">
        <h5>MSC Open House</h5>
        <p>August 27th, 1:00 - 5:00PM</p>
        <p>MSC</p>
      </div>
      <div className="informational">
        <h5>August 28th</h5>
        <p>7:00 - 8:00PM</p>
        <p>TBD</p>
      </div>
    </div>
    <hr className="under-section" />

    <h1 className="application-title">Application</h1>
    <hr className="under-title" />
    <div className="application-content">
      <p>
        The ACE recruitment team encourages anyone with an interest in the
        organization to apply. The recruitment process is not just an
        opportunity for us to get to know you, but for you to learn more about
        ACE and its members. We encourage you to apply and to take this
        opportunity to get involved with ACE. Upon the review of your
        application, the recruitment team will contact you with more information
        regarding your recruitment status. We look forward to reading your
        application and getting to know you better!
      </p>
      <br />
      <p>
        If you have any questions about the recruitment process or ACE as an
        organization, please reach out to our{" "}
        <a
          id="recruitment-link"
          href="mailto:TamuAceRecruitment@gmail.com;wgs20@tamu.edu;andrew.mlin27@tamu.edu"
        >
          recruitment chairs.
        </a>
        Applications go live 8/21 and close 8/29 @ 5pm.
      </p>
      {/* <h4 className=" p-1 text-center">
        CLICK
        <Link to="/application"> HERE</Link>
        FOR APPLICATION.
      </h4> */}
    </div>
    <hr className="under-section" />

    <h1 className="events-title">Events</h1>
    <hr className="under-title" />
    <div className="events-content">
      <div className="event">
        <h5>Invite Only Social</h5>
        <p>August 31st</p>
      </div>
      <div className="event">
        <h5>Invite Only Social</h5>
        <p>September 1st</p>
      </div>
      <div className="event">
        <h5>Invite Only Social</h5>
        <p>September 7th</p>
      </div>
      <div className="event">
        <h5>Invite Only Interviews</h5>
        <p>September 11th-12th</p>
      </div>
      <div className="event">
        <h5>Final Decisions</h5>
        <p>September 14th</p>
      </div>
    </div>
    <hr className="under-section" />

    <h1 className="recruitment-chair-title">Recruitment Chairs</h1>
    <hr className="under-title" />
    <div className="recruitment-chair-content">
      <Person name={"Andrew Lin"} image={andrewLin} />
      <Person name={"Grant Schoettlekotte"} image={grantShuttle} />
    </div>

    <h1 className="recruitment-team-title">Recruitment Team</h1>
    <hr className="under-title" />
    <div className="recruitment-team-content">
      {people.map((person) => (
        <Person name={person.name} image={person.image} />
      ))}
    </div>
  </div>
);

function Person({ name, image }) {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <span className="name">{name}</span>
    </div>
  );
}

const people = [
  {
    name: "Glory Oluwole",
    image: glory,
  },
  {
    name: "Brandon Turnage",
    image: brandonTurnage,
  },
  {
    name: "Nick Dittermore",
    image: nickDitt,
  },
  {
    name: "Amrit Nanda",
    image: amritNanda,
  },
  {
    name: "Andrew Marshall",
    image: andrewMarshall,
  },
  {
    name: "Connor Gilliland",
    image: connorGilliland,
  },
  {
    name: "Drew Remington",
    image: drewRemington,
  },
  {
    name: "Hudson Hurtig",
    image: hudsonHurtig,
  },
  {
    name: "Jacob Technik",
    image: jacobTech,
  },
  {
    name: "Joey Kacer",
    image: joeyKacer,
  },
  {
    name: "Jonathan Kutsch",
    image: JonathanKutsch,
  },
  {
    name: "Joseph Valenta",
    image: josephValenta,
  },
  {
    name: "Lucas Giammona",
    image: lucasGiammona,
  },
  {
    name: "Nathan Casazza",
    image: nathanCasazza,
  },
  {
    name: "Nils Ljung",
    image: nils,
  },
  {
    name: "Peyton Woytek",
    image: peytonW,
  },
  {
    name: "Preston Greenwood",
    image: prestonGreenwood,
  },
  // {
  //   name: "Ryan Riddle",
  //   image: RyanRiddle,
  // },
  {
    name: "Sid Venkatraman",
    image: sidVenk,
  },
];

export default Recruitment;
