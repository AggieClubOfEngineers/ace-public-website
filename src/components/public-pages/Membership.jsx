import React from "react";
import { BrandLinkedin } from "tabler-icons-react";

import "../../styles/membership.css";

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
        name: "Glory Oluwole",
        position: "President",
        linkedin: "https://www.linkedin.com/in/glory-oluwole-385459192/",
        major: "Aerospace Engineering '23",
        image: "./src/assets/img/2022Headshots/glory.jpg",
      },

      {
        name: "Nick Dittemore",
        position: "Internal VP",
        linkedin: "https://www.linkedin.com/in/nicholas-dittemore-7875901a6/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/2022Headshots/nickDitt.jpg",
      },

      {
        name: "Brandon Turnage",
        position: "External VP",
        linkedin: "https://www.linkedin.com/in/brandon-turnage-a5ab8222b/",
        major: "Civil Engineering '25",
        image: "./src/assets/img/2022Headshots/brandonTurnage.jpg",
      },
      {
        name: "Connor Gilliland",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/connor-g-ab42b1210/",
        major: "Mechanical Engineering '24",
        image: "./src/assets/img/2022Headshots/connorGilliland.jpg",
      },
      {
        name: "Jonathan Kutsch",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/jonathan-kutsch/",
        major: "Computer Science '23 & MS Finance '24",
        image:
          "./src/assets/img/HeadshotsFall2020Compressed/JonathanKutsch.jpg",
      },
      {
        name: "Drew Remington",
        position: "Member at Large",
        linkedin: "https://www.linkedin.com/in/drewremington/",
        major: "Mechanical Engineering '24",
        image: "./src/assets/img/2022Headshots/drewRemington.jpg",
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
        image: "./src/assets/img/2022Headshots/amritNanda.jpg",
      },
      {
        name: "Andrew Lin",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/andrewlin27/",
        major: "Computer Science '25",
        image: "./src/assets/img/2022Headshots/andrewLin.jpg",
      },
      {
        name: "Grant Schoettlekotte",
        position: "Recruitment Chair",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/grantShuttle.jpg",
      },
      {
        name: "Jacob Technik",
        position: "Quartermaster",
        linkedin: "https://www.linkedin.com/in/jacob-technik-565a18239/",
        major: "Industrial & Systems '26",
        image: "./src/assets/img/2022Headshots/jacobTech.jpg",
      },
      {
        name: "Joey Kacer",
        position: "Family Chair",
        linkedin: "https://www.linkedin.com/in/anton-kacer-2386701b6/",
        major: "Electrical & Electronics Engineering '24",
        image: "./src/assets/img/2022Headshots/joeyKacer.jpg",
      },
      {
        name: "Jess Holbert",
        position: "Judicial Chair",
        linkedin: "https://www.linkedin.com/in/jess-holbert-071b19161/",
        major: "Mechanical Engineering '24",
        image: "./src/assets/img/2022Headshots/jessHolbert.jpg",
      },
      {
        name: "Joseph Valenta",
        position: "Philanthropy Chair",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/josephValenta.jpg",
      },
      {
        name: "Nathan Casazza",
        position: "Webmaster",
        linkedin: "https://www.linkedin.com/in/nathancasazza/",
        major: "Computer Science '24",
        image: "./src/assets/img/2022Headshots/nathanCasazza.jpg",
      },
      {
        name: "Preston Greenwood",
        position: "Athletics Chair",
        linkedin: "https://www.linkedin.com/in/preston-j-greenwood/",
        major: "Multidisciplinary Engineering '25",
        image: "./src/assets/img/2022Headshots/prestonGreenwood.jpg",
      },
      {
        name: "Sid Venkatraman",
        position: "Service Chair",
        linkedin:
          "https://www.linkedin.com/in/siddharth-venkatraman-b8582a1b4/",
        major: "Computer science '24",
        image: "./src/assets/img/2022Headshots/sidVenk.jpg",
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
        image: "./src/assets/img/2022Headshots/andrewMarshall.jpg",
      },

      {
        name: "Hudson Hurtig",
        position: "Corporate Chair",
        linkedin: "https://www.linkedin.com/in/hudson-hurtig-2143a51ab/",
        major: "Computer Science '26",
        image: "./src/assets/img/2022Headshots/hudsonHurtig.jpeg",
      },
      {
        name: "Lucas Giammona",
        position: "Tailgate Chair",
        linkedin: "https://www.linkedin.com/in/lucas-giammona-340457230/",
        major: "Mechanical Engineering '25",
        image: "./src/assets/img/2022Headshots/lucasGiammona.jpg",
      },
      {
        name: "Nils Ljung",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/nils-ljung-909771196/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/2022Headshots/nils.jpg",
      },
      {
        name: "Peyton Woytek",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/peyton-woytek-938ba91b9/",
        major: "Aerospace Engineering '24",
        image: "./src/assets/img/2022Headshots/peytonW.jpg",
      },
      {
        name: "Ryan Riddle",
        position: "Alumni Chair",
        linkedin: "https://www.linkedin.com/in/ryan-riddle/",
        major: "Civil Engineering '23 & MS Finance '24",
        image: "./src/assets/img/Additional_Headshots/RyanRiddle.jpg",
      },
      {
        name: "Van Wilcox",
        position: "Special Events Chair",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/vanWilcox.jpg",
      },
    ],
  },
  {
    title: "Active Members",
    people: [
      {
        name: "Aidan Pena",
        position: "",
        linkedin: "https://www.linkedin.com/in/aidan-pe%C3%B1a-b0b1051ba/",
        major: "Industrial & Systems Engineering '24",
        image: "./src/assets/img/2022Headshots/aidenPena.jpg",
      },
      {
        name: "Ben Brod",
        position: "",
        linkedin: "https://www.linkedin.com/in/ben-brod-7b0433202/",
        major: "Aerospace Engineering '23",
        image: "./src/assets/img/2022Headshots/benBrod.jpg",
      },
      {
        name: "Benjamin White",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/benWhite.jpg",
      },
      {
        name: "Blaze Montagne",
        position: "",
        linkedin: "https://www.linkedin.com/in/blaze-montagne-93251a27a/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/2022Headshots/blazeMon.jpg",
      },
      {
        name: "Braden Loeffler",
        position: "",
        linkedin: "https://www.linkedin.com/in/braden-loeffler-902533233/",
        major: "Mechanical Engineering '23",
        image: "./src/assets/img/2021Headshots/bradenHeadshot.jpg",
      },
      {
        name: "Brayden Rosello",
        position: "",
        linkedin: "https://www.linkedin.com/in/brayden-rosello-9759811b9/",
        major: "Mechanical Engineering '24",
        image: "./src/assets/img/2022Headshots/braydenRosello.jpg",
      },
      {
        name: "Chase Albright",
        position: "",
        linkedin: "https://www.linkedin.com/in/chase-albright-b82b92202/",
        major: "Computer Engineering '24",
        image: "./src/assets/img/2022Headshots/chaseAlbright.jpg",
      },
      {
        name: "Clement Ong",
        position: "",
        linkedin: "https://www.linkedin.com/in/clement-ong-ba830a24b/",
        major: "Electrical Engineering '23",
        image: "./src/assets/img/2021Headshots/clement.jpg",
      },
      {
        name: "Connor Zuspan",
        position: "",
        linkedin: "https://www.linkedin.com/in/connor-zuspan-90b9031b6/",
        major: "Engineering '24",
        image: "./src/assets/img/2022Headshots/connorZuspan.jpg",
      },
      {
        name: "Dakota Fathke",
        position: "",
        linkedin: "https://www.linkedin.com/in/dakota-fathke/",
        major: "Mechanical Engineering '25",
        image: "./src/assets/img/2022Headshots/dakotaFaethke.jpg",
      },
      {
        name: "Daniel Garcia",
        position: "",
        linkedin: "https://www.linkedin.com/in/daniel-garcia-jr-182905175/",
        major: "Petroleum Engineering '23",
        image: "./src/assets/img/2022Headshots/danielGarcia.jpg",
      },
      {
        name: "Dohoon Kim",
        position: "",
        linkedin: "https://www.linkedin.com/in/dohoonk/",
        major: "Electrical Engineering '23",
        image: "./src/assets/img/2022Headshots/dohoonKim.jpg",
      },
      {
        name: "Dylan Bell",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/dylanBell.jpg",
      },
      {
        name: "Eric McGonagle",
        position: "",
        linkedin: "https://www.linkedin.com/in/eric-mcgonagle/",
        major: "Computer Science '25",
        image: "./src/assets/img/2022Headshots/ericMcGon.jpg",
      },
      {
        name: "Erick Lemus",
        position: "",
        linkedin: "https://www.linkedin.com/in/erick-lemus1/",
        major: "Industrial & Systems Engineering '24",
        image: "./src/assets/img/2022Headshots/erickLemus.jpg",
      },
      {
        name: "Ethan Birdsall",
        position: "",
        linkedin: "https://www.linkedin.com/in/ethan-birdsall/",
        major: "Mechanical Engineering '23",
        image: "./src/assets/img/2022Headshots/ethanBirdsall.jpg",
      },
      {
        name: "Gerardo Ruiz",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/gerryRuiz.jpg",
      },
      {
        name: "Hunter Aschen",
        position: "",
        linkedin: "https://www.linkedin.com/in/hunteraschen/",
        major: "Mechanical Engineering '24",
        image: "./src/assets/img/2022Headshots/hunterAschen.jpg",
      },
      {
        name: "Irving Salinas",
        position: "",
        linkedin: "https://www.linkedin.com/in/irving-salinas/",
        major: "Computer Science '23",
        image: "./src/assets/img/2022Headshots/irvingSalinas.jpg",
      },
      {
        name: "Jackson Norfolk",
        position: "",
        linkedin: "https://www.linkedin.com/in/jackson-norfolk-4aa725196/",
        major: "Civil Engineering '23",
        image:
          "./src/assets/img/HeadshotsFall2020Compressed/JacksonNorfolk.jpg",
      },
      // {
      //   name: "Jake Flores",
      //   position: "",
      //   linkedin: "https://www.linkedin.com/in/jacob-flores-73b1911b1/",
      //   major: "Electrical Engineering '23",
      //   image: "",
      // },
      {
        name: "Jon Vanwagenen",
        position: "",
        linkedin: "https://www.linkedin.com/in/jonvanwagenen/",
        major: "Architectural Engineering '23",
        image: "./src/assets/img/HeadshotsFall2020Compressed/JonVanwagenen.jpg",
      },
      {
        name: "Juan Nerio",
        position: "",
        linkedin: "https://www.linkedin.com/in/juan-nerio-iii-a62440205/",
        major: "Civil Engineering '23",
        image: "./src/assets/img/2022Headshots/juanNerio.jpg",
      },
      {
        name: "Justen Pearl",
        position: "",
        linkedin: "https://www.linkedin.com/in/justen-pearl-2b9706263/",
        major: "Mechatronics Engineering '25",
        image: "./src/assets/img/2022Headshots/justenPearl.jpg",
      },
      {
        name: "Kyle Dessens",
        position: "",
        linkedin: "",
        major: "Mechanical Engineering '25",
        image: "./src/assets/img/2022Headshots/kyleDessens.jpg",
      },
      {
        name: "Lance Torno",
        position: "",
        linkedin: "https://www.linkedin.com/in/lancetorno/",
        major: "Industrial & Systems Engineering '23",
        image: "./src/assets/img/2022Headshots/lanceTorno.jpg",
      },
      {
        name: "Lane Thomae",
        position: "",
        linkedin: "https://www.linkedin.com/in/lane-thomae-26145a192/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/2022Headshots/laneT.jpg",
      },
      {
        name: "Lucas Swoyer",
        position: "",
        linkedin: "https://www.linkedin.com/in/lucas-swoyer-b36242220/",
        major: "Industrial Engineering '23",
        image: "./src/assets/img/2022Headshots/lucasSwoyer.jpg",
      },
      {
        name: "Luke Sciba",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/lukeSciba.jpg",
      },
      {
        name: "Luke Smith",
        position: "",
        linkedin: "https://www.linkedin.com/in/luke-smith-516527178/",
        major: "Electrical Engineering '23",
        image: "./src/assets/img/2022Headshots/lukeSmith.jpg",
      },
      {
        name: "Mateo Cerna",
        position: "",
        linkedin: "https://www.linkedin.com/in/mateocerna/",
        major: "Industrial & Systems Engineering '23",
        image: "./src/assets/img/2022Headshots/matteoCerna.jpg",
      },
      {
        name: "Matthew Graham",
        position: "",
        linkedin: "https://www.linkedin.com/in/matthew-graham-990219233/",
        major: "Industrial Distribution '24",
        image: "./src/assets/img/2022Headshots/matthewGraham.jpg",
      },
      {
        name: "Matthew Oakland",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/mattOakland.jpg",
      },
      {
        name: "Moses Monty",
        position: "",
        linkedin: "https://www.linkedin.com/in/moses-monty-4bb200175/",
        major: "Petroleum Engineering '22",
        image: "./src/assets/img/HeadshotsFall2020Compressed/MosesMonty.jpg",
      },
      {
        name: "Nate Mathews",
        position: "",
        linkedin: "https://www.linkedin.com/in/nathanielmathews/",
        major: "Industrial & Systems Engineering '24",
        image: "./src/assets/img/2022Headshots/nateMatthew.jpg",
      },
      {
        name: "Nick Bodenheimer",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/nickBod.jpg",
      },
      {
        name: "Nick Moreno",
        position: "",
        linkedin: "https://www.linkedin.com/in/nicholas-moreno-156239202/",
        major: "Electrical Engineering '23",
        image: "./src/assets/img/2021Headshots/morenoheadshot.jpg",
      },
      {
        name: "Nicolas Rogstad",
        position: "",
        linkedin: "https://www.linkedin.com/in/nicolas-rogstad-2023/",
        major: "Petroleum Engineering '22",
        image: "./src/assets/img/2021Headshots/rogstadhedshot.jpg",
      },
      {
        name: "Patrick Martin",
        position: "",
        linkedin: "https://www.linkedin.com/in/patrick-martin-a6088916a/",
        major: "Electrical Engineering '23",
        image: "./src/assets/img/2021Headshots/patrick.jpg",
      },
      {
        name: "Scott Trouy",
        position: "",
        linkedin: "https://www.linkedin.com/in/scott-trouy/",
        major: "Nuclear Engineering '23",
        image: "./src/assets/img/2022Headshots/scottTrouy.jpg",
      },
      {
        name: "Sebastian Coronado",
        position: "",
        linkedin: "https://www.linkedin.com/in/sebastiancoronado/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/2022Headshots/sebastianCoronado.jpg",
      },
      {
        name: "Tyler Powell",
        position: "",
        linkedin: "",
        major: "",
        image: "./src/assets/img/2022Headshots/tylerPowell.jpg",
      },
      {
        name: "Tyler Woods",
        position: "",
        linkedin: "https://www.linkedin.com/in/tywoods505/",
        major: "Industrial Distribution '23",
        image: "./src/assets/img/HeadshotsFall2020Compressed/TylerWoods.jpg",
      },
      {
        name: "Vinny LoBello",
        position: "",
        linkedin: "https://www.linkedin.com/in/vincent-lobello-13345b21b/",
        major: "Computer Science '24",
        image: "./src/assets/img/2022Headshots/vinnyLoBello.jpg",
      },
      {
        name: "Whitten Bowles",
        position: "",
        linkedin: "https://www.linkedin.com/in/whitten-bowles-1231821b1/",
        major: "Petroleum Engineering '25",
        image: "./src/assets/img/2022Headshots/whittenBowles.jpg",
      },
      {
        name: "Zach Podraza",
        position: "",
        linkedin: "https://www.linkedin.com/in/zachary-podraza-9b318620b/",
        major: "Industrial Distribution '24",
        image: "./src/assets/img/2021Headshots/podrazaheadshot.jpg",
      },
    ],
  },
];

export default Membership;
