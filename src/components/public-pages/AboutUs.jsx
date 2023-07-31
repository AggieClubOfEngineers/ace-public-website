import React from "react";

import presidentHeadshot from "../../assets/img/2021headshots/rogstadhedshot.jpg";
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
          &nbsp; &nbsp; The Aggie Club of Engineers started with a handful of
          guys, looking to start something bigger than themselves. They had
          worked through their first challenging years of engineering all while
          being involved in some of the best fraternities and professional
          organizations A&M has to offer. They were, by all stretches of the
          word, successful. But they had realized one thing. For all the
          prestige their organizations boasted, they just didn't bring engineers
          together inside and outside of the classroom. They needed something
          different.
          <br />
          <br />
          &nbsp; &nbsp; Nine years later, ACE stands as an homage to our
          founders' vision. We have joined the ranks of some of the premier
          men's organizations on campus, but with a flavor all our own. We have
          cultivated a culture that allows our members to develop in academics
          and leadership, while offering the highest caliber professional
          opportunities and social events. This is made possible by the amazing
          diversity in our organization. Our members represent over a dozen
          countries and come from every engineering discipline at Texas A&M. We
          have Student Senators, Fish Camp Counselors, Muster Committee members,
          Executives at fraternities and professional organizations, and members
          of the Student Engineering Council. Each one of us br/ings a unique
          experience and background and puts it toward one common goal: To
          create a place for leaders to thrive.
          <br />
          <br />
          &nbsp; &nbsp;Personally, I cannot overstate the impact ACE has had in
          developing me through college. It has given me friendships and
          memories that will last the rest of my time on this Earth. Every
          tailgate and every retreat, every formal and every meeting. Each one
          has made me better than the day before. To be chosen by my best
          friends to continue that mission for other young engineers is the
          single greatest honor of my life.
          <br />
          <br />
          &nbsp; &nbsp;To be the best, we have to take the best natural born
          leaders that Dwight Look has to offer. If you think you have what it
          takes, please check out our admissions tab above. We'd love to get to
          know you.
          <br />
          <br />
          For any questions regarding the organization or if you would like to
          come speak to our members, please contact me at
          tamuacepresident@gmail.com.
          <br />
          <br />
          Thanks and Gig 'em,
          <br />
          <br />
          <i>Nicolas Rogstad</i>
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
