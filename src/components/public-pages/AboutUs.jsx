import React from "react";

import presidentHeadshot from "../../assets/img/2023Headshots/Nick_Dittemore.jpg";
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
          Howdy!
          <br />
          <br />
          My name is Nick Dittemore and I am beyond honored to serve as
          President of the Aggie Club of Engineers (ACE) for the 2023-2024 year.
          ACE is comprised of the most talented and intelligent engineering
          students on campus and stands as a testament to the caliber of
          individuals who choose to be a part of the Aggie family. We take great
          pride in being a tight-knit community that not only excels
          academically but also possesses a unique blend of social and
          professional acumen. The Aggie Club of Engineers is not just an
          organization; it is a family that fosters growth, camaraderie,
          brotherhood, and a shared commitment to excellence.
          <br />
          <br />
          Representing this prestigious group of Aggies is both a privilege and
          a responsibility that I do not take lightly. It is truly an honor to
          lead such an exceptional group of individuals who embody the spirit,
          intellect, and ambition that define our beloved university. Each
          member of our organization contributes to a legacy of success that
          goes beyond the confines of our campus. The achievements of past and
          current members serve as a source of inspiration, and I am confident
          that the current generation of ACE members will continue to leave an
          indelible mark on the world.
          <br />
          <br />
          Our alumni have gone on to become industry leaders, innovators, and
          trailblazers in their respective fields. Whether it's in cutting-edge
          research, groundbreaking projects, or leadership roles within renowned
          organizations, the Aggie Club of Engineers has a track record of
          producing individuals who make a meaningful impact. It is this legacy
          of success that motivates us to strive for greatness in everything we
          do.
          <br />
          <br />
          If you are an engineering student with a passion for excellence and a
          drive to make a difference, we invite you to join our ranks. The Aggie
          Club of Engineers is more than just a student organization; it is a
          community that will support and empower you throughout your academic
          journey and beyond.
          <br />
          <br />
          Please reach out to us at{" "}
          <a
            href="mailto:tamuacepresident@gmail.com"
            style={{ color: "black", textDecoration: "underline" }}
          >
            tamuacepresident@gmail.com
          </a>{" "}
          with any questions regarding ACE or our application process.
          <br />
          <br />
          Thanks and Gig 'em,
          <br />
          <br />
          Nick Dittemore
          <br />
          President, Aggie Club of Engineers
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
