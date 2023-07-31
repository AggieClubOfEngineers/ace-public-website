import React from "react";

import "../../styles/recruitment.css";

const Recruitment = () => (
  <div className="recruitment-content">
    <h1 className="informationals-title">Informationals</h1>
    <hr className="under-title" />
    <div className="informationals-content">
      <div className="informational">
        <h5>August 22nd</h5>
        <p>7:00 - 8:00PM</p>
        <p>Rudder 601</p>
      </div>
      <div className="informational">
        <h5>August 23rd</h5>
        <p>7:00 - 8:00PM</p>
        <p>Rudder 301</p>
      </div>
      <div className="informational">
        <h5>August 24th</h5>
        <p>7:00 - 8:00PM</p>
        <p>Rudder 301</p>
      </div>
      <div className="informational">
        <h5>MSC Open House</h5>
        <p>August 27th, 1:00 - 5:00PM</p>
        <p>MSC</p>
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
          href="mailto:TamuAceRecruitment@gmail.com;Nickmoreno2012@yahoo.com;marshalperkins@gmail.com"
        >
          recruitment chairs.
        </a>
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
        <p>August 30th</p>
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
        <h5>Invite Only Social</h5>
        <p>September 11th-12th</p>
      </div>
    </div>
    <hr className="under-section" />

    <h1 className="recruitment-chair-title">Recruitment Chairs</h1>
    <hr className="under-title" />
    <div className="recruitment-chair-content">
      <Person
        name={"Andrew Lin"}
        image={"./src/assets/img/2022Headshots/andrewLin.jpg"}
      />
      <Person
        name={"Grant Schoettlekotte"}
        image={"./src/assets/img/2022Headshots/grantShuttle.jpg"}
      />
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
    image: "./src/assets/img/2022Headshots/glory.jpg",
  },
  {
    name: "Brandon Turnage",
    image: "./src/assets/img/2022Headshots/brandonTurnage.jpg",
  },
  {
    name: "Nick Dittermore",
    image: "./src/assets/img/2022Headshots/nickDitt.jpg",
  },
  {
    name: "Amrit Nanda",
    image: "./src/assets/img/2022Headshots/amritNanda.jpg",
  },
  {
    name: "Andrew Marshall",
    image: "./src/assets/img/2022Headshots/andrewMarshall.jpg",
  },
  {
    name: "Connor Gilliland",
    image: "./src/assets/img/2022Headshots/connorGilliland.jpg",
  },
  {
    name: "Drew Remington",
    image: "./src/assets/img/2022Headshots/drewRemington.jpg",
  },
  {
    name: "Hudson Hurtig",
    image: "./src/assets/img/2022Headshots/hudsonHurtig.jpeg",
  },
  {
    name: "Jacob Technik",
    image: "./src/assets/img/2022Headshots/jacobTech.jpg",
  },
  {
    name: "Joey Kacer",
    image: "./src/assets/img/2022Headshots/joeyKacer.jpg",
  },
  {
    name: "Jonathan Kutsch",
    image: "./src/assets/img/HeadshotsFall2020Compressed/JonathanKutsch.jpg",
  },
  {
    name: "Joseph Valenta",
    image: "./src/assets/img/2022Headshots/josephValenta.jpg",
  },
  {
    name: "Lucas Giammona",
    image: "./src/assets/img/2022Headshots/lucasGiammona.jpg",
  },
  {
    name: "Nathan Casazza",
    image: "./src/assets/img/2022Headshots/nathanCasazza.jpg",
  },
  {
    name: "Nils Ljung",
    image: "./src/assets/img/2022Headshots/nils.jpg",
  },
  {
    name: "Peyton Woytek",
    image: "./src/assets/img/2022Headshots/peytonW.jpg",
  },
  {
    name: "Preston Greenwood",
    image: "./src/assets/img/2022Headshots/prestonGreenwood.jpg",
  },
  // {
  //   name: "Ryan Riddle",
  //   image: "./src/assets/img/Additional_Headshots/RyanRiddle.jpg",
  // },
  {
    name: "Sid Venkatraman",
    image: "./src/assets/img/2022Headshots/sidVenk.jpg",
  },
];

export default Recruitment;
