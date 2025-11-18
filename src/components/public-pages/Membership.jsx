import React from "react";
import { BrandLinkedin } from "tabler-icons-react";

import "../../styles/membership.css";
import Ben_Snavely from "../../assets/img/2023Headshots/Ben_Snavely.JPG";
import Jacob_Technik from "../../assets/img/2023Headshots/Jacob_Technik.JPG";
import Joshua_Mayhugh from "../../assets/img/2023Headshots/Joshua_Mayhugh.JPG";
import Manuel_Pandavila from "../../assets/img/2023Headshots/Manuel_PanDavila.JPG";
import Jacob_Hargreaves from "../../assets/img/2023Headshots/Jacob_Hargreaves.JPG";

// non-executive staff
import Quinn_Hamilton from "../../assets/img/2025_officers_headshots/Quinn_Hamilton.JPG";
import Sean_Dessens from "../../assets/img/2025_officers_headshots/Sean_Dessens.JPG";
import Jaime_Barrea from "../../assets/img/2025_officers_headshots/Jaime_Barrea.JPG";
import Grant_Ward from "../../assets/img/2025_officers_headshots/Grant_Ward.JPG";
import Logan_Knichel from "../../assets/img/2025_officers_headshots/Logan_Knichel.JPG";
import Dylan_Hebert from "../../assets/img/2025_officers_headshots/Dylan_Hebert.JPG";
import Taylor_Six from "../../assets/img/2025_officers_headshots/Taylor_Six.JPG";
import Justin_Choi from "../../assets/img/2025_officers_headshots/Justin_Choi.JPG";
import Kyle_Evans from "../../assets/img/2025_officers_headshots/Kyle_Evans.JPG";
import Hudson_Elbert from "../../assets/img/2025_officers_headshots/Hudson_Elbert.JPG";
import Ridge_Robinson from "../../assets/img/2025_officers_headshots/Ridge_Robinson.JPG";
import Cole_Garrett from "../../assets/img/2025_officers_headshots/Cole_Garrett.JPG";
import Alan_Marini from "../../assets/img/2023Headshots/Alan_Marini.JPG";
import Eric_McGonagle from "../../assets/img/2022Headshots/ericMcGon.jpg";
import Luis_Calvo_Gerstner from "../../assets/img/2025_officers_headshots/Luis_Calvo.JPG";
import Alejandro_Velasco from "../../assets/img/2023Headshots/Alejandro_Velasco.JPG";
import Julian_Pollina from "../../assets/img/2023Headshots/Julian_Pollina.JPG";
import John_Hayes from "../../assets/img/2023Headshots/John_Hayes.JPG";
import Nick_Bodenheimer from "../../assets/img/2022Headshots/nickBod.jpg";

const Membership = () => (
  <div className="membership-content">
    {peopleByCategory.map((category, index, array) => (
      <section
        key={category.title}
        className={`category-container ${
          index === array.length - 1
            ? "last-category "
            : "" + index == 0
            ? "first-category"
            : ""
        }`}
      >
        <h2>{category.title}</h2>
        <div className="people-container">
          {category.people.map((person) => (
            <div
              key={person.name}
              className={
                "person-container" + (person.position ? "" : " active")
              }
            >
              {person.linkedin && (
                <a href={person.linkedin} className="linkedin-link">
                  <BrandLinkedin
                    className="person-linkedin"
                    size={50}
                    strokeWidth={1.5}
                    color="white"
                  />
                </a>
              )}
              <div
                className={
                  "person-info-top" + (person.position ? "" : " active")
                }
              >
                {person.position && (
                  <h3 className="person-position">{person.position}</h3>
                )}
              </div>
              <img
                src={person.image}
                alt={person.name}
                className="person-image"
              />
              <div className="person-info-bottom">
                <h2 className="person-name">{person.name}</h2>
                {person.major && (
                  <h3 className="person-major">{person.major}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const peopleByCategory = [
  {
    title: "Executive Staff",
    people: [
      {
        name: "Jacob Technik",
        position: "President",
        linkedin: "https://www.linkedin.com/in/jacob-technik-565a18239/",
        major: "Industrial & Systems '26",
        image: Jacob_Technik,
      },

      {
        name: "Julian Pollina",
        position: "Internal VP",
        linkedin: "https://www.linkedin.com/in/julian-pollina-71b2902b1/",
        major: "Aerospace Engineering '26",
        image: Julian_Pollina,
      },
      {
        name: "Manuel Pandavila",
        position: "External VP",
        linkedin: "https://www.linkedin.com/in/manuel-j-pandavila/",
        major: "Materials Science and Engineering '26",
        image: Manuel_Pandavila,
      },
      {
        name: "Jacob Hargreaves",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/jacob-hargreaves-89035028a/",
        major: "Mechanical Engineering '26",
        image: Jacob_Hargreaves,
      },
      {
        name: "John Hayes",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/john-hayes-547403256/",
        major: "Industrial Engineering '26 & MS Finance '27",
        image: John_Hayes,
      },
      {
        name: "Ben Snavely",
        position: "Member at Large",
        linkedin: "https://www.linkedin.com/in/ben-snavely-92b64625b/",
        major: "Aerospace Engineering '26",
        image: Ben_Snavely,
      },
    ],
  },
  {
    title: "Internal Cabinet",
    people: [
      {
        name: "Luis Calvo Gerstner",
        position: "Academic Chair",
        linkedin: "https://www.linkedin.com/in/luiscalvog/",
        major: "Electrical Engineering '26",
        image: Luis_Calvo_Gerstner,
      },
      {
        name: "Kyle Evans",
        position: "Athletics Chair",
        linkedin: "https://www.linkedin.com/in/kyle-evans-b03894346/",
        major: "Aerospace Engineering '26",
        image: Kyle_Evans,
      },
      {
        name: "Justin Choi",
        position: "Family Chair",
        linkedin: "https://www.linkedin.com/in/justin-seungwoo-choi/",
        major: "Industrial Distribution '26",
        image: Justin_Choi,
      },
      {
        name: "Eric McGonagle",
        position: "Judicial Chair",
        linkedin: "https://www.linkedin.com/in/eric-mcgonagle/",
        major: "Computer Science '25",
        image: Eric_McGonagle,
      },
      {
        name: "Ridge Robinson",
        position: "Philanthropy Chair",
        linkedin: "",
        major: "Mechanical Engineering '27",
        image: Ridge_Robinson,
      },
      {
        name: "Alejandro Velasco",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/alejandro-velasco-861865239/",
        major: "Industrial Distribution '26 & MS Finance '27",
        image: Alejandro_Velasco,
      },
      {
        name: "Nick Bodenheimer",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/nick-bodenheimer-b542a2284/",
        major: "Petroleum Engineering '26",
        image: Nick_Bodenheimer,
      },
      {
        name: "Hudson Elbert",
        position: "Service Chair",
        linkedin: "https://www.linkedin.com/in/hudson-elbert-60ab7320b/",
        major: "Electrical Engineering '27",
        image: Hudson_Elbert,
      },
      {
        name: "Joshua Mayhugh",
        position: "Webmaster",
        linkedin: "https://www.linkedin.com/in/joshua-mayhugh-36a764210/",
        major: "Computer Science '25",
        image: Joshua_Mayhugh,
      },
    ],
  },
  {
    title: "External Cabinet",
    people: [
      {
        name: "Taylor Six",
        position: "Alumni Chair",
        linkedin: "https://www.linkedin.com/in/taylor-six-1b06332aa/",
        major: "Environmental Engineering '27",
        image: Taylor_Six,
      },
      {
        name: "Quinn Hamilton",
        position: "Corporate Chair",
        linkedin: "https://www.linkedin.com/in/quinnhamilton9/",
        major: "Industrial Engineering '26 & MS Finance '27",
        image: Quinn_Hamilton,
      },
      {
        name: "Dylan Hebert",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/dylhebert/",
        major: "Chemical Engineering '26",
        image: Dylan_Hebert,
      },
      {
        name: "Logan Knichel",
        position: "Quartermaster",
        linkedin: "https://www.linkedin.com/in/logan-knichel-22321528a/",
        major: "Chemical Engineering '25",
        image: Logan_Knichel,
      },
      {
        name: "Alan Marini",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/alan-marini-a42a6b283/",
        major: "Electrical Engineering '26",
        image: Alan_Marini,
      },
      {
        name: "Grant Ward",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/grantward124/",
        major: "Mechanical Engineering '26",
        image: Grant_Ward,
      },
      {
        name: "Jaime Barrea",
        position: "Social Media Chair",
        linkedin: "https://www.linkedin.com/in/jbarrera22/",
        major: "Industrual Distribution '26",
        image: Jaime_Barrea,
      },
      {
        name: "Sean Dessens",
        position: "Special Events Chair",
        linkedin: "https://www.linkedin.com/in/sean-dessens-15ab71316/",
        major: "Civil Engineering '28",
        image: Sean_Dessens,
      },
      {
        name: "Cole Garrett",
        position: "Tailgate Chair",
        linkedin: "https://www.linkedin.com/in/cole-garrett-64483a284/",
        major: "Mechanical Engineering '26",
        image: Cole_Garrett,
      },
    ],
  },
];

export default Membership;
