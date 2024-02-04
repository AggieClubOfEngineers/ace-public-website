import React from "react";
import { BrandLinkedin } from "tabler-icons-react";

import "../../styles/membership.css";

import Grant_Schoettlekotte from "../../assets/img/2022Headshots/grantShuttle.jpg";
import Joey_Kacer from "../../assets/img/2022Headshots/joeyKacer.jpg";
import Lucas_Giammona from "../../assets/img/2022Headshots/lucasGiammona.jpg";
import Luke_Smith from "../../assets/img/2022Headshots/lukeSmith.jpg";
import Matthew_Oakland from "../../assets/img/2022Headshots/mattOakland.jpg";
import Nate_Mathews from "../../assets/img/2022Headshots/nateMatthew.jpg";
import Tyler_Powell from "../../assets/img/2022Headshots/tylerPowell.jpg";
import Nick_Dittemore from "../../assets/img/2023Headshots/Nick_Dittemore.jpg";
import Brandon_Turnage from "../../assets/img/2023Headshots/Brandon_Turnage.JPG";
import Connor_Gilliland from "../../assets/img/2023Headshots/Connor_Gilliland.JPG";
import Jonathan_Kutsch from "../../assets/img/2023Headshots/Jon_Kutsch.JPG";
import Drew_Remington from "../../assets/img/2023Headshots/Drew_Remington.JPG";
import Amrit_Nanda from "../../assets/img/2023Headshots/Amrit_Nanda.JPG";
import Andrew_Lin from "../../assets/img/2023Headshots/Andrew_Lin.JPG";
import Jacob_Technik from "../../assets/img/2023Headshots/Jacob_Technik.JPG";
import Jess_Holbert from "../../assets/img/2023Headshots/Jess_Holbert.JPG";
import Joseph_Valenta from "../../assets/img/2023Headshots/Joseph_Valenta.JPG";
import Joshua_Mayhugh from "../../assets/img/2023Headshots/Joshua_Mayhugh.JPG";
import Nathan_Casazza from "../../assets/img/2023Headshots/Nathan_Casazza.JPG";
import Preston_Greenwood from "../../assets/img/2023Headshots/Preston_Greenwood.JPG";
import Sid_Venkatraman from "../../assets/img/2023Headshots/Sid_Venkatraman.jpeg";
import Andrew_Marshall from "../../assets/img/2023Headshots/Andrew_Marshall.JPG";
import Hudson_Hurtig from "../../assets/img/2023Headshots/Hudson_Hurtig.JPG";
import Nils_Ljung from "../../assets/img/2023Headshots/Nils_Ljung.JPG";
import Peyton_Woytek from "../../assets/img/2023Headshots/Peyton_Woytek.JPG";
import Ryan_Riddle from "../../assets/img/2023Headshots/Ryan_Riddle.JPG";
import Van_Wilcox from "../../assets/img/2023Headshots/Van_Wilcox.JPG";
import Vinny_LoBello from "../../assets/img/2023Headshots/Vinny_LoBello.JPG";
import Juan_Nerio from "../../assets/img/2023Headshots/Juan_Nerio.JPG";
import Whitten_Bowles from "../../assets/img/2023Headshots/Whitten_Bowles.JPG";
import Scott_Trouy from "../../assets/img/2023Headshots/Scott_Trouy.JPG";
import Eddie_Villegas from "../../assets/img/2023Headshots/Eddie_Villegas.JPG";

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
              <a href={person.linkedin} className="linkedin-link">
                <BrandLinkedin
                  className="person-linkedin"
                  size={50}
                  strokeWidth={1.5}
                  color="white"
                />
              </a>
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
                <h3 className="person-major">{person.major}</h3>
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
        name: "Nick Dittemore",
        position: "President",
        linkedin: "https://www.linkedin.com/in/nicholas-dittemore-7875901a6/",
        major: "Industrial Distribution '23",
        image: Nick_Dittemore,
      },

      {
        name: "Hudson Hurtig",
        position: "Internal VP",
        linkedin: "https://www.linkedin.com/in/hudson-hurtig-2143a51ab/",
        major: "Computer Science '26",
        image: Hudson_Hurtig,
      },
      {
        name: "Brandon Turnage",
        position: "External VP",
        linkedin: "https://www.linkedin.com/in/brandon-turnage-a5ab8222b/",
        major: "Civil Engineering '25",
        image: Brandon_Turnage,
      },
      {
        name: "Connor Gilliland",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/connor-g-ab42b1210/",
        major: "Mechanical Engineering '24",
        image: Connor_Gilliland,
      },
      {
        name: "Jonathan Kutsch",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/jonathan-kutsch/",
        major: "Computer Science '24 & MS Finance '24",
        image: Jonathan_Kutsch,
      },
      {
        name: "Drew Remington",
        position: "Member at Large",
        linkedin: "https://www.linkedin.com/in/drewremington/",
        major: "Mechanical Engineering '24",
        image: Drew_Remington,
      },
    ],
  },
  {
    title: "Internal Cabinet",
    people: [
      {
        name: "Amrit Nanda",
        position: "Academic Chair",
        linkedin: "https://www.linkedin.com/in/amrit-nanda/",
        major: "Electrical Engineering '24",
        image: Amrit_Nanda,
      },
      {
        name: "Eddie Villegas",
        position: "Corporate Chair",
        linkedin: "https://www.linkedin.com/in/eddie-villegas-29431b253/",
        major: "Electrical Engineering '25",
        image: Eddie_Villegas,
      },
      {
        name: "Andrew Lin",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/andrewlin27/",
        major: "Computer Science '25",
        image: Andrew_Lin,
      },
      {
        name: "Grant Schoettlekotte",
        position: "Recruitment Chair",
        linkedin: "",
        major: "Industrial Distribution '22",
        image: Grant_Schoettlekotte,
      },
      {
        name: "Jacob Technik",
        position: "Quartermaster",
        linkedin: "https://www.linkedin.com/in/jacob-technik-565a18239/",
        major: "Industrial & Systems '26",
        image: Jacob_Technik,
      },
      {
        name: "Joey Kacer",
        position: "Family Chair",
        linkedin: "https://www.linkedin.com/in/anton-kacer-2386701b6/",
        major: "Electrical & Electronics Engineering '24",
        image: Joey_Kacer,
      },
      {
        name: "Jess Holbert",
        position: "Judicial Chair",
        linkedin: "https://www.linkedin.com/in/jess-holbert-071b19161/",
        major: "Mechanical Engineering '24",
        image: Jess_Holbert,
      },
      {
        name: "Joseph Valenta",
        position: "Philanthropy Chair",
        linkedin: "",
        major: "Mechanical Engineering '25",
        image: Joseph_Valenta,
      },
      {
        name: "Joshua Mayhugh",
        position: "Webmaster",
        linkedin: "https://www.linkedin.com/in/joshua-mayhugh-36a764210/",
        major: "Computer Science '25",
        image: Joshua_Mayhugh,
      },
      {
        name: "Preston Greenwood",
        position: "Athletics Chair",
        linkedin: "https://www.linkedin.com/in/preston-j-greenwood/",
        major: "Multidisciplinary Engineering '25",
        image: Preston_Greenwood,
      },
      {
        name: "Sid Venkatraman",
        position: "Service Chair",
        linkedin:
          "https://www.linkedin.com/in/siddharth-venkatraman-b8582a1b4/",
        major: "Computer Science '24",
        image: Sid_Venkatraman,
      },
    ],
  },
  {
    title: "External Cabinet",
    people: [
      {
        name: "Andrew Marshall",
        position: "Songfest Chair",
        linkedin: "https://www.linkedin.com/in/andrew-marshall-559566256/",
        major: "Aerospace Engineering '26",
        image: Andrew_Marshall,
      },

      {
        name: "Lucas Giammona",
        position: "Tailgate Chair",
        linkedin: "https://www.linkedin.com/in/lucas-giammona-340457230/",
        major: "Mechanical Engineering '25",
        image: Lucas_Giammona,
      },
      {
        name: "Nils Ljung",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/nils-ljung-909771196/",
        major: "Industrial Distribution '23",
        image: Nils_Ljung,
      },
      {
        name: "Peyton Woytek",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/peyton-woytek-938ba91b9/",
        major: "Aerospace Engineering '24",
        image: Peyton_Woytek,
      },
      {
        name: "Ryan Riddle",
        position: "Alumni Chair",
        linkedin: "https://www.linkedin.com/in/ryan-riddle/",
        major: "Civil Engineering '23 & MS Finance '24",
        image: Ryan_Riddle,
      },
      {
        name: "Van Wilcox",
        position: "Special Events Chair",
        linkedin: "",
        major: "Industrial Distribution '26",
        image: Van_Wilcox,
      },
    ],
  },
  {
    title: "Godfathers",
    people: [
      {
        name: "Vinny LoBello",
        position: "Zapdos Godfather",
        linkedin: "https://www.linkedin.com/in/vincent-lobello-13345b21b/",
        major: "Computer Science '24",
        image: Vinny_LoBello,
      },
      {
        name: "Luke Smith",
        position: "Zapdos Godfather",
        linkedin: "https://www.linkedin.com/in/luke-smith-516527178/",
        major: "Electrical Engineering '23",
        image: Luke_Smith,
      },
      {
        name: "Nate Mathews",
        position: "ISEN Godfather",
        linkedin: "https://www.linkedin.com/in/nathanielmathews/",
        major: "Industrial & Systems Engineering '24",
        image: Nate_Mathews,
      },
      {
        name: "Matthew Oakland",
        position: "ISEN Godfather",
        linkedin: "",
        major: "Industrial and Systems Engineering '25",
        image: Matthew_Oakland,
      },
      {
        name: "Tyler Powell",
        position: "MEEN Godfather",
        linkedin: "",
        major: "Architectural Engineering '24",
        image: Tyler_Powell,
      },
      {
        name: "Juan Nerio",
        position: "MEEN Godfather",
        linkedin: "https://www.linkedin.com/in/juan-nerio-iii-a62440205/",
        major: "Civil Engineering '23",
        image: Juan_Nerio,
      },
      {
        name: "Whitten Bowles",
        position: "PETE Godfather",
        linkedin: "https://www.linkedin.com/in/whitten-bowles-1231821b1/",
        major: "Petroleum Engineering '25",
        image: Whitten_Bowles,
      },
      {
        name: "Scott Trouy",
        position: "PETE Godfather",
        linkedin: "https://www.linkedin.com/in/scott-trouy/",
        major: "Nuclear Engineering '23",
        image: Scott_Trouy,
      },
    ],
  },
];

// const peopleByCategory = [
//   {
//     title: "Executive Staff",
//     people: [
//       {
//         name: "Glory Oluwole",
//         position: "President",
//         linkedin: "https://www.linkedin.com/in/glory-oluwole-385459192/",
//         major: "Aerospace Engineering '23",
//         image: glory,
//       },

//       {
//         name: "Nick Dittemore",
//         position: "Internal VP",
//         linkedin: "https://www.linkedin.com/in/nicholas-dittemore-7875901a6/",
//         major: "Industrial Distribution '23",
//         image: nickDitt,
//       },

//       {
//         name: "Brandon Turnage",
//         position: "External VP",
//         linkedin: "https://www.linkedin.com/in/brandon-turnage-a5ab8222b/",
//         major: "Civil Engineering '25",
//         image: brandonTurnage,
//       },
//       {
//         name: "Connor Gilliland",
//         position: "Secretary",
//         linkedin: "https://www.linkedin.com/in/connor-g-ab42b1210/",
//         major: "Mechanical Engineering '24",
//         image: connorGilliland,
//       },
//       {
//         name: "Jonathan Kutsch",
//         position: "Treasurer",
//         linkedin: "https://www.linkedin.com/in/jonathan-kutsch/",
//         major: "Computer Science '24 & MS Finance '24",
//         image: JonathanKutsch,
//       },
//       {
//         name: "Drew Remington",
//         position: "Member at Large",
//         linkedin: "https://www.linkedin.com/in/drewremington/",
//         major: "Mechanical Engineering '24",
//         image: drewRemington,
//       },
//     ],
//   },
//   {
//     title: "Internal Cabinet",
//     people: [
//       {
//         name: "Amrit Nanda",
//         position: "Academic Chair",
//         linkedin: "https://www.linkedin.com/in/amrit-nanda/",
//         major: "Electrical Engineering '24",
//         image: amritNanda,
//       },
//       {
//         name: "Andrew Lin",
//         position: "Recruitment Chair",
//         linkedin: "https://www.linkedin.com/in/andrewlin27/",
//         major: "Computer Science '25",
//         image: andrewLin,
//       },
//       {
//         name: "Grant Schoettlekotte",
//         position: "Recruitment Chair",
//         linkedin: "",
//         major: "",
//         image: grantShuttle,
//       },
//       {
//         name: "Jacob Technik",
//         position: "Quartermaster",
//         linkedin: "https://www.linkedin.com/in/jacob-technik-565a18239/",
//         major: "Industrial & Systems '26",
//         image: jacobTech,
//       },
//       {
//         name: "Joey Kacer",
//         position: "Family Chair",
//         linkedin: "https://www.linkedin.com/in/anton-kacer-2386701b6/",
//         major: "Electrical & Electronics Engineering '24",
//         image: joeyKacer,
//       },
//       {
//         name: "Jess Holbert",
//         position: "Judicial Chair",
//         linkedin: "https://www.linkedin.com/in/jess-holbert-071b19161/",
//         major: "Mechanical Engineering '24",
//         image: jessHolbert,
//       },
//       {
//         name: "Joseph Valenta",
//         position: "Philanthropy Chair",
//         linkedin: "",
//         major: "",
//         image: josephValenta,
//       },
//       {
//         name: "Nathan Casazza",
//         position: "Webmaster",
//         linkedin: "https://www.linkedin.com/in/nathancasazza/",
//         major: "Computer Science '24",
//         image: nathanCasazza,
//       },
//       {
//         name: "Preston Greenwood",
//         position: "Athletics Chair",
//         linkedin: "https://www.linkedin.com/in/preston-j-greenwood/",
//         major: "Multidisciplinary Engineering '25",
//         image: prestonGreenwood,
//       },
//       {
//         name: "Sid Venkatraman",
//         position: "Service Chair",
//         linkedin:
//           "https://www.linkedin.com/in/siddharth-venkatraman-b8582a1b4/",
//         major: "Computer science '24",
//         image: sidVenk,
//       },
//     ],
//   },
//   {
//     title: "External Cabinet",
//     people: [
//       {
//         name: "Andrew Marshall",
//         position: "Songfest Chair",
//         linkedin: "https://www.linkedin.com/in/andrew-marshall-559566256/",
//         major: "Aerospace Engineering '26",
//         image: andrewMarshall,
//       },

//       {
//         name: "Hudson Hurtig",
//         position: "Corporate Chair",
//         linkedin: "https://www.linkedin.com/in/hudson-hurtig-2143a51ab/",
//         major: "Computer Science '26",
//         image: hudsonHurtig,
//       },
//       {
//         name: "Lucas Giammona",
//         position: "Tailgate Chair",
//         linkedin: "https://www.linkedin.com/in/lucas-giammona-340457230/",
//         major: "Mechanical Engineering '25",
//         image: lucasGiammona,
//       },
//       {
//         name: "Nils Ljung",
//         position: "Social Chair",
//         linkedin: "https://www.linkedin.com/in/nils-ljung-909771196/",
//         major: "Industrial Distribution '23",
//         image: nils,
//       },
//       {
//         name: "Peyton Woytek",
//         position: "Public Relations Chair",
//         linkedin: "https://www.linkedin.com/in/peyton-woytek-938ba91b9/",
//         major: "Aerospace Engineering '24",
//         image: peytonW,
//       },
//       {
//         name: "Ryan Riddle",
//         position: "Alumni Chair",
//         linkedin: "https://www.linkedin.com/in/ryan-riddle/",
//         major: "Civil Engineering '23 & MS Finance '24",
//         image: RyanRiddle,
//       },
//       {
//         name: "Van Wilcox",
//         position: "Special Events Chair",
//         linkedin: "",
//         major: "Industrial Distribution '26",
//         image: vanWilcox,
//       },
//     ],
//   },
//   {
//     title: "Godfathers",
//     people: [
//       {
//         name: "Vinny LoBello",
//         position: "Zapdos Godfather",
//         linkedin: "https://www.linkedin.com/in/vincent-lobello-13345b21b/",
//         major: "Computer Science '24",
//         image: vinnyLoBello,
//       },
//       {
//         name: "Luke Smith",
//         position: "Zapdos Godfather",
//         linkedin: "https://www.linkedin.com/in/luke-smith-516527178/",
//         major: "Electrical Engineering '23",
//         image: lukeSmith,
//       },
//       {
//         name: "Nate Mathews",
//         position: "ISEN Godfather",
//         linkedin: "https://www.linkedin.com/in/nathanielmathews/",
//         major: "Industrial & Systems Engineering '24",
//         image: nateMatthew,
//       },
//       {
//         name: "Matthew Oakland",
//         position: "ISEN Godfather",
//         linkedin: "",
//         major: "Industrial and Systems Engineering '25",
//         image: mattOakland,
//       },
//       {
//         name: "Tyler Powell",
//         position: "MEEN Godfather",
//         linkedin: "",
//         major: "Architectural Engineering '24",
//         image: tylerPowell,
//       },
//       {
//         name: "Juan Nerio",
//         position: "MEEN Godfather",
//         linkedin: "https://www.linkedin.com/in/juan-nerio-iii-a62440205/",
//         major: "Civil Engineering '23",
//         image: juanNerio,
//       },
//       {
//         name: "Whitten Bowles",
//         position: "PETE Godfather",
//         linkedin: "https://www.linkedin.com/in/whitten-bowles-1231821b1/",
//         major: "Petroleum Engineering '25",
//         image: whittenBowles,
//       },
//       {
//         name: "Scott Trouy",
//         position: "PETE Godfather",
//         linkedin: "https://www.linkedin.com/in/scott-trouy/",
//         major: "Nuclear Engineering '23",
//         image: scottTrouy,
//       },
//     ],
//   },
//   // {
//   //   title: "Active Members",
//   //   people: [
//   //     {
//   //       name: "Aidan Pena",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/aidan-pe%C3%B1a-b0b1051ba/",
//   //       major: "Industrial & Systems Engineering '24",
//   //       image: aidenPena,
//   //     },
//   //     {
//   //       name: "Ben Brod",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/ben-brod-7b0433202/",
//   //       major: "Aerospace Engineering '23",
//   //       image: benBrod,
//   //     },
//   //     {
//   //       name: "Benjamin White",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "",
//   //       image: benWhite,
//   //     },
//   //     {
//   //       name: "Blaze Montagne",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/blaze-montagne-93251a27a/",
//   //       major: "Industrial Distribution '23",
//   //       image: blazeMon,
//   //     },
//   //     {
//   //       name: "Braden Loeffler",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/braden-loeffler-902533233/",
//   //       major: "Mechanical Engineering '23",
//   //       image: bradenHeadshot,
//   //     },
//   //     {
//   //       name: "Chase Albright",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/chase-albright-b82b92202/",
//   //       major: "Computer Engineering '24",
//   //       image: chaseAlbright,
//   //     },
//   //     {
//   //       name: "Clement Ong",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/clement-ong-ba830a24b/",
//   //       major: "Electrical Engineering '23",
//   //       image: clement,
//   //     },
//   //     {
//   //       name: "Dakota Fathke",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/dakota-fathke/",
//   //       major: "Mechanical Engineering '25",
//   //       image: dakotaFaethke,
//   //     },
//   //     {
//   //       name: "Daniel Garcia",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/daniel-garcia-jr-182905175/",
//   //       major: "Petroleum Engineering '23",
//   //       image: danielGarcia,
//   //     },
//   //     {
//   //       name: "Dohoon Kim",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/dohoonk/",
//   //       major: "Electrical Engineering '23",
//   //       image: dohoonKim,
//   //     },
//   //     {
//   //       name: "Dylan Bell",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "Architectural Engineering '25",
//   //       image: dylanBell,
//   //     },
//   //     {
//   //       name: "Eric McGonagle",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/eric-mcgonagle/",
//   //       major: "Computer Science '25",
//   //       image: ericMcGon,
//   //     },
//   //     {
//   //       name: "Erick Lemus",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/erick-lemus1/",
//   //       major: "Industrial & Systems Engineering '24",
//   //       image: erickLemus,
//   //     },
//   //     {
//   //       name: "Ethan Birdsall",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/ethan-birdsall/",
//   //       major: "Mechanical Engineering '23",
//   //       image: ethanBirdsall,
//   //     },
//   //     {
//   //       name: "Gerardo Ruiz",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "",
//   //       image: gerryRuiz,
//   //     },
//   //     {
//   //       name: "Hunter Aschen",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/hunteraschen/",
//   //       major: "Mechanical Engineering '24",
//   //       image: hunterAschen,
//   //     },
//   //     {
//   //       name: "Irving Salinas",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/irving-salinas/",
//   //       major: "Computer Science '23",
//   //       image: irvingSalinas,
//   //     },
//   //     {
//   //       name: "Jackson Norfolk",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/jackson-norfolk-4aa725196/",
//   //       major: "Civil Engineering '23",
//   //       image: JacksonNorfolk,
//   //     },
//   //     // {
//   //     //   name: "Jake Flores",
//   //     //   position: "",
//   //     //   linkedin: "https://www.linkedin.com/in/jacob-flores-73b1911b1/",
//   //     //   major: "Electrical Engineering '23",
//   //     //   image: "",
//   //     // },
//   //     {
//   //       name: "Jon Vanwagenen",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/jonvanwagenen/",
//   //       major: "Architectural Engineering '23",
//   //       image: JonVanwagenen,
//   //     },
//   //     {
//   //       name: "Justen Pearl",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/justen-pearl-2b9706263/",
//   //       major: "Mechatronics Engineering '25",
//   //       image: justenPearl,
//   //     },
//   //     {
//   //       name: "Kyle Dessens",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "Mechanical Engineering '25",
//   //       image: kyleDessens,
//   //     },
//   //     {
//   //       name: "Lance Torno",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/lancetorno/",
//   //       major: "Industrial & Systems Engineering '23",
//   //       image: lanceTorno,
//   //     },
//   //     {
//   //       name: "Lane Thomae",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/lane-thomae-26145a192/",
//   //       major: "Industrial Distribution '23",
//   //       image: laneT,
//   //     },
//   //     {
//   //       name: "Lucas Swoyer",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/lucas-swoyer-b36242220/",
//   //       major: "Industrial Engineering '23",
//   //       image: lucasSwoyer,
//   //     },
//   //     {
//   //       name: "Luke Sciba",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "",
//   //       image: lukeSciba,
//   //     },
//   //     {
//   //       name: "Mateo Cerna",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/mateocerna/",
//   //       major: "Industrial & Systems Engineering '23",
//   //       image: matteoCerna,
//   //     },
//   //     {
//   //       name: "Matthew Graham",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/matthew-graham-990219233/",
//   //       major: "Industrial Distribution '24",
//   //       image: matthewGraham,
//   //     },
//   //     {
//   //       name: "Moses Monty",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/moses-monty-4bb200175/",
//   //       major: "Petroleum Engineering '22",
//   //       image: MosesMonty,
//   //     },
//   //     {
//   //       name: "Nick Bodenheimer",
//   //       position: "",
//   //       linkedin: "",
//   //       major: "",
//   //       image: nickBod,
//   //     },
//   //     {
//   //       name: "Nick Moreno",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/nicholas-moreno-156239202/",
//   //       major: "Electrical Engineering '23",
//   //       image: morenoheadshot,
//   //     },
//   //     {
//   //       name: "Nicolas Rogstad",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/nicolas-rogstad-2023/",
//   //       major: "Petroleum Engineering '23",
//   //       image: rogstadhedshot,
//   //     },
//   //     {
//   //       name: "Patrick Martin",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/patrick-martin-a6088916a/",
//   //       major: "Electrical Engineering '23",
//   //       image: patrick,
//   //     },
//   //     {
//   //       name: "Sebastian Coronado",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/sebastiancoronado/",
//   //       major: "Industrial Distribution '23",
//   //       image: sebastianCoronado,
//   //     },
//   //     {
//   //       name: "Tyler Woods",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/tywoods505/",
//   //       major: "Industrial Distribution '23",
//   //       image: TylerWoods,
//   //     },
//   //     {
//   //       name: "Zach Podraza",
//   //       position: "",
//   //       linkedin: "https://www.linkedin.com/in/zachary-podraza-9b318620b/",
//   //       major: "Industrial Distribution '24",
//   //       image: podrazaheadshot,
//   //     },
//   //   ],
//   // },
// ];

export default Membership;
