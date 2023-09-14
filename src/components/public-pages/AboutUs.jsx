import React from "react";

import presidentHeadshot from "../../assets/img/2022Headshots/glory.jpg";
import Loyalty from "../../assets/img/Loyalty.png";
import Leadership from "../../assets/img/Leadership.png";
import Integrity from "../../assets/img/Integrity.png";
import Excellence from "../../assets/img/Excellence.png";
import Compassion from "../../assets/img/Compassion.png";
import Versatility from "../../assets/img/Versatility.png";

import "../../styles/about-us.css";

function AboutUs() {
  return (
    <div className="about-content">
      <h1 className="about-values-title">Our Core Values</h1>
      <hr />
      <section className="values-container">
        <div className="value-container">
          <h2 className="value-title">Loyalty</h2>
          <img className="value-image" src={Loyalty} alt="Loyalty" />
          <p>
            We commit to supporting and staying true to our community, the Aggie
            Family, and the brotherhood we share as members of ACE.
          </p>
        </div>
        <div className="value-container">
          <h2 className="value-title">Leadership</h2>
          <img className="value-image" src={Leadership} alt="Leadership" />
          <p>
            We work to develop our members organizational, management, and
            communication skills through a multitude of leadership opportunities
            to help them excel in their future endeavours.
          </p>
        </div>
        <div className="value-container">
          <h2 className="value-title">Integrity</h2>
          <img className="value-image" src={Integrity} alt="Integrity" />
          <p>
            We hold our members accountable to the highest level of character
            and moral standards while staying true to ourselves.
          </p>
        </div>
        <div className="value-container">
          <h2 className="value-title">Excellence</h2>
          <img className="value-image" src={Excellence} alt="Excellence" />
          <p>
            We strive for excellence in setting and attaining our goals through
            the holistic development of our members and organization.
          </p>
        </div>
        <div className="value-container">
          <h2 className="value-title">Compassion</h2>
          <img className="value-image" src={Compassion} alt="Compassion" />
          <p>
            We aim to show the utmost respect and compassion for the people that
            surround us on and off campus by displaying great dignity and
            nobility.
          </p>
        </div>
        <div className="value-container">
          <h2 className="value-title">Versatility</h2>
          <img className="value-image" src={Versatility} alt="Versatility" />
          <p>
            We are a diverse and adaptable organization that prides itself in
            developing our members strongly in academics, character, service,
            and countless other areas.
          </p>
        </div>
      </section>
      <section className="letter-container">
        <h2 id="letter-title">A Letter From Our President</h2>
        <img
          src={presidentHeadshot}
          alt="president"
          className="president-portrait"
        />
        <p className="letter-text">
          &nbsp; &nbsp; The Aggie Club of Engineers was created long ago with
          the vision of brotherhood, prestige, and all-around growth in mind.
          Founded by a group of high-achieving individuals that were involved in
          some of the most reputable organizations and fraternities here at A&M,
          ACE has grown to be the perfect melting pot of socially proficient,
          academically excellent, professionally distinguished and intentionally
          driven qualities that every single one of our members possess.
          However, it doesn't stop there.
          <br />
          <br />
          Year in and year out, members of ACE experience growth exponentially
          in every aspect of their lives which inevitably fosters progress in
          the right direction for the organization as a whole. Growth in their
          various fields of studies within the college of engineering, growth in
          their pursuit of character development and leadership, growth in their
          social prowess and abilities to connect with other people from
          different backgrounds, and growth in their professional potential as
          they gravitate on to the next chapter of their lives. This wide range
          of impact is what recognizes the Aggie Club of Engineers as premier
          along with the other juggernauts at Texas A&M University while still
          vividly setting ACE apart from any other organization on campus,
          perhaps in the nation. Additionally, every member is extremely
          committed to giving back in currencies of effort and dedication so
          that ACE continues to be the vehicle to success for the future
          generations of Aggie Engineers.
          <br />
          <br />
          In order for that to happen, we strive to be “elite” and not
          “elitists”, constantly reaching for the best engineers this great
          university has to offer yet keeping the pathway wide open for many to
          realize their full potential in the organization. If this remotely
          sounds like you, please check out our admissions tab above, we'd love
          to get to know you.
          <br />
          <br />
          For any questions regarding the organization or if you would like to
          come speak to our members, please contact me at
          tamuacepresident@gmail.com
          <br />
          <br />
          Thanks and Gig 'em,
          <br />
          <br />
          <i>Glory Oluwole</i>
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
