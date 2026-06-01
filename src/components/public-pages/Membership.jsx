import { BrandLinkedin } from "tabler-icons-react";

import "../../styles/membership.css";

import Alejandro_Velasco from "../../assets/img/2027Headshots/alejandro_velasco.JPG";
import Arman_Singh from "../../assets/img/2027Headshots/arman_singh.JPG";
import Blane_Weiblen from "../../assets/img/2027Headshots/blane_weiblen.JPG";
import Branson_Colianni from "../../assets/img/2027Headshots/branson_colianni.JPG";
import Brant_Decker from "../../assets/img/2027Headshots/brant_decker.JPG";
import Campbell_Dixon from "../../assets/img/2027Headshots/campbell_dixon.JPG";
import Carlos_Isava from "../../assets/img/2027Headshots/carlos_isava.jpg";
import Colton_Yanta from "../../assets/img/2027Headshots/colton_yanta.JPG";
import Daniel_Elbahri from "../../assets/img/2027Headshots/daniel_elbahri.JPG";
import Diego_PanDavila from "../../assets/img/2027Headshots/diego_pandivila.JPG";
import Grant_Eckenrode from "../../assets/img/2027Headshots/grant_eckenrode.JPG";
import Grant_Marvin from "../../assets/img/2027Headshots/grant_marvin.JPG";
import Hudson_Elbert from "../../assets/img/2027Headshots/hudson_elbert.JPG";
import Jaime_Barrera from "../../assets/img/2027Headshots/jaime_barrera.JPG";
import Julian_Pollina from "../../assets/img/2027Headshots/jullian_pollina.JPG";
import Manuel_PanDavila from "../../assets/img/2027Headshots/Manuel_PanDavila.JPG";
import Matthew_Chilek from "../../assets/img/2027Headshots/matthew_chilek.JPG";
import Nicolas_Gonzalez from "../../assets/img/2027Headshots/nicolas_gonzalez.JPG";
import Ridge_Robinson from "../../assets/img/2027Headshots/ridge_robinson.jpeg";
import Sean_Dessens from "../../assets/img/2027Headshots/sean_dessens.JPG";
import Taylor_Six from "../../assets/img/2027Headshots/taylor_six.JPG";
import Travis_Eggleston from "../../assets/img/2027Headshots/travis_eggleston.JPG";
import Tyler_Cernosek from "../../assets/img/2027Headshots/tyler_cernosek.JPG";
import Weston_Ruemmele from "../../assets/img/2027Headshots/weston_ruemmele.JPG";



const Membership = () => (
  <div className="membership-content">
    {peopleByCategory.map((category, index, array) => (
      <section
        key={category.title}
        className={`category-container
          ${index === 0 ? " first-category" : ""}
          ${index === array.length - 1 ? " last-category" : ""}
        `}
      >
        <h2>{category.title}</h2>
        <div className="people-container">
          {category.people.map((person) => (
            <div
              key={person.name}
              className={"person-container" + (person.position ? "" : " active")}
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
        name: "Sean Dessens",
        position: "President",
        linkedin: "https://www.linkedin.com/in/sean-dessens-15ab71316/",
        major: "Civil Engineering '28",
        image: Sean_Dessens,
      },

      {
        name: "Ridge Robinson",
        position: "Internal VP",
        linkedin: "https://www.linkedin.com/in/ridge-robinson-2963a935a/",
        major: "Civil Engineering '27",
        image: Ridge_Robinson,
      },
      {
        name: "Taylor Six",
        position: "External VP",
        linkedin: "https://www.linkedin.com/in/taylor-six-1b06332aa/",
        major: "Environmental Engineering '27",
        image: Taylor_Six,
      },
      {
        name: "Hudson Elbert",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/hudson-elbert-60ab7320b/",
        major: "Electrical Engineering '27",
        image: Hudson_Elbert,
      },
      {
        name: "Carlos Isava",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/carlos-luis-isava/",
        major: "Mechanical Engineering '27",
        image: Carlos_Isava,
      },
      {
        name: "Julian Pollina",
        position: "Member at Large",
        linkedin: "https://www.linkedin.com/in/julian-pollina-71b2902b1/",
        major: "Industrial Distribution '26",
        image: Julian_Pollina,
      },
    ],
  },
  {
    title: "Internal Cabinet",
    people: [
      {
        name: "Branson Colianni",
        position: "Academic Chair",
        linkedin: "",
        major: "Industrial Distribution '29",
        image: Branson_Colianni,
      },
      {
        name: "Travis Eggleston",
        position: "Athletics Chair",
        linkedin: "https://www.linkedin.com/in/travis-eggleston-236441405/",
        major: "Chemical Engineering '29",
        image: Travis_Eggleston,
      },
      {
        name: "Colton Yanta",
        position: "Family Chair",
        linkedin: "https://www.linkedin.com/in/colton-yanta-05b1613a6/",
        major: "Mechanical Engineering '29",
        image: Colton_Yanta,
      },
      {
        name: "Manuel PanDavila",
        position: "Judicial Chair",
        linkedin: "https://www.linkedin.com/in/manuel-j-pandavila/",
        major: "Material Science & Engineering '26",
        image: Manuel_PanDavila,
      },
      {
        name: "Grant Eckenrode",
        position: "Philanthropy Chair",
        linkedin: "https://www.linkedin.com/in/grant-eckenrode-9a2229336/",
        major: "Industrial Distribution '28",
        image: Grant_Eckenrode,
      },
      {
        name: "Alejandro Velasco",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/alejandro-velasco-861865239/",
        major: "Industrial Distribution '26 & MS Finance '27",
        image: Alejandro_Velasco,
      },
      {
        name: "Jaime Barrera",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/jbarrera22/",
        major: "Industrial Distribution '26",
        image: Jaime_Barrera,
      },
      {
        name: "Brant Decker",
        position: "Service Chair",
        linkedin: "https://www.linkedin.com/in/brant-christian-decker/",
        major: "Mechanical Engineering '28",
        image: Brant_Decker,
      },
      {
        name: "Arman Singh",
        position: "Webmaster",
        linkedin: "https://www.linkedin.com/in/arman-singh21/",
        major: "Computer Engineering '28",
        image: Arman_Singh,
      },
    ],
  },
  {
    title: "External Cabinet",
    people: [
      {
        name: "Diego PanDavila",
        position: "Alumni Chair",
        linkedin: "https://www.linkedin.com/in/diego-pandavila-3609b9366/",
        major: "Industrial & Systems Engineering '29",
        image: Diego_PanDavila,
      },
      {
        name: "Campbell Dixson",
        position: "Corporate Chair",
        linkedin: "https://www.linkedin.com/in/campbelldixson/",
        major: "Mechanical Engineering '28",
        image: Campbell_Dixon,
      },
      {
        name: "Nicolas Gonzalez",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/nicolas-gonzalez-218a49326/",
        major: "Industrial Distribution '27",
        image: Nicolas_Gonzalez,
      },
      {
        name: "Grant Marvin",
        position: "Quartermaster",
        linkedin: "https://www.linkedin.com/in/grantmarvin/",
        major: "Civil Engineering '29",
        image: Grant_Marvin,
      },
      {
        name: "Tyler Cernosek",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/tylercernosek2026/",
        major: "Industrial Distribution '26",
        image: Tyler_Cernosek,
      },
      {
        name: "Daniel Elbahri",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/danielelbahri/",
        major: "Electrical Engineering '28",
        image: Daniel_Elbahri,
      },
      {
        name: "Weston Ruemmele",
        position: "Social Media Chair",
        linkedin: "https://www.linkedin.com/in/weston-ruemmele-5b533729a/",
        major: "Nuclear Engineering '28",
        image: Weston_Ruemmele,
      },
      {
        name: "Blane Weiblen",
        position: "Special Events Chair",
        linkedin: "https://www.linkedin.com/in/blane-weiblen-a48a003b6/",
        major: "Mechanical Engineering '29",
        image: Blane_Weiblen,
      },
      {
        name: "Matthew Chilek",
        position: "Tailgate Chair",
        linkedin: "https://www.linkedin.com/in/matthewchilek/",
        major: "Chemical Engineering '29",
        image: Matthew_Chilek,
      },
    ],
  },
];

export default Membership;
