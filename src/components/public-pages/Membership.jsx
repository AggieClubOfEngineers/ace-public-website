import React from "react";
import { BrandLinkedin } from "tabler-icons-react";

import "../../styles/membership.css";

import glory from "../../assets/img/2022Headshots/glory.jpg";
import nickDitt from "../../assets/img/2022Headshots/nickDitt.jpg";
import brandonTurnage from "../../assets/img/2022Headshots/brandonTurnage.jpg";
import connorGilliland from "../../assets/img/2022Headshots/connorGilliland.jpg";
import JonathanKutsch from "../../assets/img/HeadshotsFall2020Compressed/JonathanKutsch.jpg";
import drewRemington from "../../assets/img/2022Headshots/drewRemington.jpg";
import amritNanda from "../../assets/img/2022Headshots/amritNanda.jpg";
import andrewLin from "../../assets/img/2022Headshots/andrewLin.jpg";
import grantShuttle from "../../assets/img/2022Headshots/grantShuttle.jpg";
import jacobTech from "../../assets/img/2022Headshots/jacobTech.jpg";
import joeyKacer from "../../assets/img/2022Headshots/joeyKacer.jpg";
import jessHolbert from "../../assets/img/2022Headshots/jessHolbert.jpg";
import josephValenta from "../../assets/img/2022Headshots/josephValenta.jpg";
import nathanCasazza from "../../assets/img/2022Headshots/nathanCasazza.jpg";
import prestonGreenwood from "../../assets/img/2022Headshots/prestonGreenwood.jpg";
import sidVenk from "../../assets/img/2022Headshots/sidVenk.jpg";
import andrewMarshall from "../../assets/img/2022Headshots/andrewMarshall.jpg";
import hudsonHurtig from "../../assets/img/2022Headshots/hudsonHurtig.jpeg";
import lucasGiammona from "../../assets/img/2022Headshots/lucasGiammona.jpg";
import nils from "../../assets/img/2022Headshots/nils.jpg";
import peytonW from "../../assets/img/2022Headshots/peytonW.jpg";
import RyanRiddle from "../../assets/img/Additional_Headshots/RyanRiddle.jpg";
import vanWilcox from "../../assets/img/2022Headshots/vanWilcox.jpg";
import aidenPena from "../../assets/img/2022Headshots/aidenPena.jpg";
import benBrod from "../../assets/img/2022Headshots/benBrod.jpg";
import benWhite from "../../assets/img/2022Headshots/benWhite.jpg";
import blazeMon from "../../assets/img/2022Headshots/blazeMon.jpg";
import bradenHeadshot from "../../assets/img/2021Headshots/bradenHeadshot.jpg";
import braydenRosello from "../../assets/img/2022Headshots/braydenRosello.jpg";
import chaseAlbright from "../../assets/img/2022Headshots/chaseAlbright.jpg";
import clement from "../../assets/img/2021Headshots/clement.jpg";
import connorZuspan from "../../assets/img/2022Headshots/connorZuspan.jpg";
import dakotaFaethke from "../../assets/img/2022Headshots/dakotaFaethke.jpg";
import danielGarcia from "../../assets/img/2022Headshots/danielGarcia.jpg";
import dohoonKim from "../../assets/img/2022Headshots/dohoonKim.jpg";
import dylanBell from "../../assets/img/2022Headshots/dylanBell.jpg";
import ericMcGon from "../../assets/img/2022Headshots/ericMcGon.jpg";
import erickLemus from "../../assets/img/2022Headshots/erickLemus.jpg";
import ethanBirdsall from "../../assets/img/2022Headshots/ethanBirdsall.jpg";
import gerryRuiz from "../../assets/img/2022Headshots/gerryRuiz.jpg";
import hunterAschen from "../../assets/img/2022Headshots/hunterAschen.jpg";
import irvingSalinas from "../../assets/img/2022Headshots/irvingSalinas.jpg";
import JacksonNorfolk from "../../assets/img/HeadshotsFall2020Compressed/JacksonNorfolk.jpg";
import JonVanwagenen from "../../assets/img/2022Headshots/jonV.png";
import juanNerio from "../../assets/img/2022Headshots/juanNerio.jpg";
import justenPearl from "../../assets/img/2022Headshots/justenPearl.jpg";
import kyleDessens from "../../assets/img/2022Headshots/kyleDessens.jpg";
import lanceTorno from "../../assets/img/2022Headshots/lanceTorno.jpg";
import laneT from "../../assets/img/2022Headshots/laneT.jpg";
import lucasSwoyer from "../../assets/img/2022Headshots/lucasSwoyer.jpg";
import lukeSciba from "../../assets/img/2022Headshots/lukeSciba.jpg";
import lukeSmith from "../../assets/img/2022Headshots/lukeSmith.jpg";
import matteoCerna from "../../assets/img/2022Headshots/matteoCerna.jpg";
import matthewGraham from "../../assets/img/2022Headshots/matthewGraham.jpg";
import mattOakland from "../../assets/img/2022Headshots/mattOakland.jpg";
import MosesMonty from "../../assets/img/HeadshotsFall2020Compressed/MosesMonty.jpg";
import nateMatthew from "../../assets/img/2022Headshots/nateMatthew.jpg";
import nickBod from "../../assets/img/2022Headshots/nickBod.jpg";
import morenoheadshot from "../../assets/img/2021Headshots/morenoheadshot.jpg";
import rogstadhedshot from "../../assets/img/2021Headshots/rogstadhedshot.jpg";
import patrick from "../../assets/img/2021Headshots/patrick.jpg";
import scottTrouy from "../../assets/img/2022Headshots/scottTrouy.jpg";
import sebastianCoronado from "../../assets/img/2022Headshots/sebastianCoronado.jpg";
import tylerPowell from "../../assets/img/2022Headshots/tylerPowell.jpg";
import TylerWoods from "../../assets/img/HeadshotsFall2020Compressed/TylerWoods.jpg";
import vinnyLoBello from "../../assets/img/2022Headshots/vinnyLoBello.jpg";
import whittenBowles from "../../assets/img/2022Headshots/whittenBowles.jpg";
import podrazaheadshot from "../../assets/img/2021Headshots/podrazaheadshot.jpg";

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
        image: glory,
      },

      {
        name: "Nick Dittemore",
        position: "Internal VP",
        linkedin: "https://www.linkedin.com/in/nicholas-dittemore-7875901a6/",
        major: "Industrial Distribution '23",
        image: nickDitt,
      },

      {
        name: "Brandon Turnage",
        position: "External VP",
        linkedin: "https://www.linkedin.com/in/brandon-turnage-a5ab8222b/",
        major: "Civil Engineering '25",
        image: brandonTurnage,
      },
      {
        name: "Connor Gilliland",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/connor-g-ab42b1210/",
        major: "Mechanical Engineering '24",
        image: connorGilliland,
      },
      {
        name: "Jonathan Kutsch",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/jonathan-kutsch/",
        major: "Computer Science '24 & MS Finance '24",
        image: JonathanKutsch,
      },
      {
        name: "Drew Remington",
        position: "Member at Large",
        linkedin: "https://www.linkedin.com/in/drewremington/",
        major: "Mechanical Engineering '24",
        image: drewRemington,
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
        image: amritNanda,
      },
      {
        name: "Andrew Lin",
        position: "Recruitment Chair",
        linkedin: "https://www.linkedin.com/in/andrewlin27/",
        major: "Computer Science '25",
        image: andrewLin,
      },
      {
        name: "Grant Schoettlekotte",
        position: "Recruitment Chair",
        linkedin: "",
        major: "",
        image: grantShuttle,
      },
      {
        name: "Jacob Technik",
        position: "Quartermaster",
        linkedin: "https://www.linkedin.com/in/jacob-technik-565a18239/",
        major: "Industrial & Systems '26",
        image: jacobTech,
      },
      {
        name: "Joey Kacer",
        position: "Family Chair",
        linkedin: "https://www.linkedin.com/in/anton-kacer-2386701b6/",
        major: "Electrical & Electronics Engineering '24",
        image: joeyKacer,
      },
      {
        name: "Jess Holbert",
        position: "Judicial Chair",
        linkedin: "https://www.linkedin.com/in/jess-holbert-071b19161/",
        major: "Mechanical Engineering '24",
        image: jessHolbert,
      },
      {
        name: "Joseph Valenta",
        position: "Philanthropy Chair",
        linkedin: "",
        major: "",
        image: josephValenta,
      },
      {
        name: "Nathan Casazza",
        position: "Webmaster",
        linkedin: "https://www.linkedin.com/in/nathancasazza/",
        major: "Computer Science '24",
        image: nathanCasazza,
      },
      {
        name: "Preston Greenwood",
        position: "Athletics Chair",
        linkedin: "https://www.linkedin.com/in/preston-j-greenwood/",
        major: "Multidisciplinary Engineering '25",
        image: prestonGreenwood,
      },
      {
        name: "Sid Venkatraman",
        position: "Service Chair",
        linkedin:
          "https://www.linkedin.com/in/siddharth-venkatraman-b8582a1b4/",
        major: "Computer science '24",
        image: sidVenk,
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
        image: andrewMarshall,
      },

      {
        name: "Hudson Hurtig",
        position: "Corporate Chair",
        linkedin: "https://www.linkedin.com/in/hudson-hurtig-2143a51ab/",
        major: "Computer Science '26",
        image: hudsonHurtig,
      },
      {
        name: "Lucas Giammona",
        position: "Tailgate Chair",
        linkedin: "https://www.linkedin.com/in/lucas-giammona-340457230/",
        major: "Mechanical Engineering '25",
        image: lucasGiammona,
      },
      {
        name: "Nils Ljung",
        position: "Social Chair",
        linkedin: "https://www.linkedin.com/in/nils-ljung-909771196/",
        major: "Industrial Distribution '23",
        image: nils,
      },
      {
        name: "Peyton Woytek",
        position: "Public Relations Chair",
        linkedin: "https://www.linkedin.com/in/peyton-woytek-938ba91b9/",
        major: "Aerospace Engineering '24",
        image: peytonW,
      },
      {
        name: "Ryan Riddle",
        position: "Alumni Chair",
        linkedin: "https://www.linkedin.com/in/ryan-riddle/",
        major: "Civil Engineering '23 & MS Finance '24",
        image: RyanRiddle,
      },
      {
        name: "Van Wilcox",
        position: "Special Events Chair",
        linkedin: "",
        major: "Industrial Distribution '26",
        image: vanWilcox,
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
        image: aidenPena,
      },
      {
        name: "Ben Brod",
        position: "",
        linkedin: "https://www.linkedin.com/in/ben-brod-7b0433202/",
        major: "Aerospace Engineering '23",
        image: benBrod,
      },
      {
        name: "Benjamin White",
        position: "",
        linkedin: "",
        major: "",
        image: benWhite,
      },
      {
        name: "Blaze Montagne",
        position: "",
        linkedin: "https://www.linkedin.com/in/blaze-montagne-93251a27a/",
        major: "Industrial Distribution '23",
        image: blazeMon,
      },
      {
        name: "Braden Loeffler",
        position: "",
        linkedin: "https://www.linkedin.com/in/braden-loeffler-902533233/",
        major: "Mechanical Engineering '23",
        image: bradenHeadshot,
      },
      {
        name: "Brayden Rosello",
        position: "",
        linkedin: "https://www.linkedin.com/in/brayden-rosello-9759811b9/",
        major: "Mechanical Engineering '24",
        image: braydenRosello,
      },
      {
        name: "Chase Albright",
        position: "",
        linkedin: "https://www.linkedin.com/in/chase-albright-b82b92202/",
        major: "Computer Engineering '24",
        image: chaseAlbright,
      },
      {
        name: "Clement Ong",
        position: "",
        linkedin: "https://www.linkedin.com/in/clement-ong-ba830a24b/",
        major: "Electrical Engineering '23",
        image: clement,
      },
      {
        name: "Connor Zuspan",
        position: "",
        linkedin: "https://www.linkedin.com/in/connor-zuspan-90b9031b6/",
        major: "Engineering '24",
        image: connorZuspan,
      },
      {
        name: "Dakota Fathke",
        position: "",
        linkedin: "https://www.linkedin.com/in/dakota-fathke/",
        major: "Mechanical Engineering '25",
        image: dakotaFaethke,
      },
      {
        name: "Daniel Garcia",
        position: "",
        linkedin: "https://www.linkedin.com/in/daniel-garcia-jr-182905175/",
        major: "Petroleum Engineering '23",
        image: danielGarcia,
      },
      {
        name: "Dohoon Kim",
        position: "",
        linkedin: "https://www.linkedin.com/in/dohoonk/",
        major: "Electrical Engineering '23",
        image: dohoonKim,
      },
      {
        name: "Dylan Bell",
        position: "",
        linkedin: "",
        major: "",
        image: dylanBell,
      },
      {
        name: "Eric McGonagle",
        position: "",
        linkedin: "https://www.linkedin.com/in/eric-mcgonagle/",
        major: "Computer Science '25",
        image: ericMcGon,
      },
      {
        name: "Erick Lemus",
        position: "",
        linkedin: "https://www.linkedin.com/in/erick-lemus1/",
        major: "Industrial & Systems Engineering '24",
        image: erickLemus,
      },
      {
        name: "Ethan Birdsall",
        position: "",
        linkedin: "https://www.linkedin.com/in/ethan-birdsall/",
        major: "Mechanical Engineering '23",
        image: ethanBirdsall,
      },
      {
        name: "Gerardo Ruiz",
        position: "",
        linkedin: "",
        major: "",
        image: gerryRuiz,
      },
      {
        name: "Hunter Aschen",
        position: "",
        linkedin: "https://www.linkedin.com/in/hunteraschen/",
        major: "Mechanical Engineering '24",
        image: hunterAschen,
      },
      {
        name: "Irving Salinas",
        position: "",
        linkedin: "https://www.linkedin.com/in/irving-salinas/",
        major: "Computer Science '23",
        image: irvingSalinas,
      },
      {
        name: "Jackson Norfolk",
        position: "",
        linkedin: "https://www.linkedin.com/in/jackson-norfolk-4aa725196/",
        major: "Civil Engineering '23",
        image: JacksonNorfolk,
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
        image: JonVanwagenen,
      },
      {
        name: "Juan Nerio",
        position: "",
        linkedin: "https://www.linkedin.com/in/juan-nerio-iii-a62440205/",
        major: "Civil Engineering '23",
        image: juanNerio,
      },
      {
        name: "Justen Pearl",
        position: "",
        linkedin: "https://www.linkedin.com/in/justen-pearl-2b9706263/",
        major: "Mechatronics Engineering '25",
        image: justenPearl,
      },
      {
        name: "Kyle Dessens",
        position: "",
        linkedin: "",
        major: "Mechanical Engineering '25",
        image: kyleDessens,
      },
      {
        name: "Lance Torno",
        position: "",
        linkedin: "https://www.linkedin.com/in/lancetorno/",
        major: "Industrial & Systems Engineering '23",
        image: lanceTorno,
      },
      {
        name: "Lane Thomae",
        position: "",
        linkedin: "https://www.linkedin.com/in/lane-thomae-26145a192/",
        major: "Industrial Distribution '23",
        image: laneT,
      },
      {
        name: "Lucas Swoyer",
        position: "",
        linkedin: "https://www.linkedin.com/in/lucas-swoyer-b36242220/",
        major: "Industrial Engineering '23",
        image: lucasSwoyer,
      },
      {
        name: "Luke Sciba",
        position: "",
        linkedin: "",
        major: "",
        image: lukeSciba,
      },
      {
        name: "Luke Smith",
        position: "",
        linkedin: "https://www.linkedin.com/in/luke-smith-516527178/",
        major: "Electrical Engineering '23",
        image: lukeSmith,
      },
      {
        name: "Mateo Cerna",
        position: "",
        linkedin: "https://www.linkedin.com/in/mateocerna/",
        major: "Industrial & Systems Engineering '23",
        image: matteoCerna,
      },
      {
        name: "Matthew Graham",
        position: "",
        linkedin: "https://www.linkedin.com/in/matthew-graham-990219233/",
        major: "Industrial Distribution '24",
        image: matthewGraham,
      },
      {
        name: "Matthew Oakland",
        position: "",
        linkedin: "",
        major: "",
        image: mattOakland,
      },
      {
        name: "Moses Monty",
        position: "",
        linkedin: "https://www.linkedin.com/in/moses-monty-4bb200175/",
        major: "Petroleum Engineering '22",
        image: MosesMonty,
      },
      {
        name: "Nate Mathews",
        position: "",
        linkedin: "https://www.linkedin.com/in/nathanielmathews/",
        major: "Industrial & Systems Engineering '24",
        image: nateMatthew,
      },
      {
        name: "Nick Bodenheimer",
        position: "",
        linkedin: "",
        major: "",
        image: nickBod,
      },
      {
        name: "Nick Moreno",
        position: "",
        linkedin: "https://www.linkedin.com/in/nicholas-moreno-156239202/",
        major: "Electrical Engineering '23",
        image: morenoheadshot,
      },
      {
        name: "Nicolas Rogstad",
        position: "",
        linkedin: "https://www.linkedin.com/in/nicolas-rogstad-2023/",
        major: "Petroleum Engineering '22",
        image: rogstadhedshot,
      },
      {
        name: "Patrick Martin",
        position: "",
        linkedin: "https://www.linkedin.com/in/patrick-martin-a6088916a/",
        major: "Electrical Engineering '23",
        image: patrick,
      },
      {
        name: "Scott Trouy",
        position: "",
        linkedin: "https://www.linkedin.com/in/scott-trouy/",
        major: "Nuclear Engineering '23",
        image: scottTrouy,
      },
      {
        name: "Sebastian Coronado",
        position: "",
        linkedin: "https://www.linkedin.com/in/sebastiancoronado/",
        major: "Industrial Distribution '23",
        image: sebastianCoronado,
      },
      {
        name: "Tyler Powell",
        position: "",
        linkedin: "",
        major: "",
        image: tylerPowell,
      },
      {
        name: "Tyler Woods",
        position: "",
        linkedin: "https://www.linkedin.com/in/tywoods505/",
        major: "Industrial Distribution '23",
        image: TylerWoods,
      },
      {
        name: "Vinny LoBello",
        position: "",
        linkedin: "https://www.linkedin.com/in/vincent-lobello-13345b21b/",
        major: "Computer Science '24",
        image: vinnyLoBello,
      },
      {
        name: "Whitten Bowles",
        position: "",
        linkedin: "https://www.linkedin.com/in/whitten-bowles-1231821b1/",
        major: "Petroleum Engineering '25",
        image: whittenBowles,
      },
      {
        name: "Zach Podraza",
        position: "",
        linkedin: "https://www.linkedin.com/in/zachary-podraza-9b318620b/",
        major: "Industrial Distribution '24",
        image: podrazaheadshot,
      },
    ],
  },
];

export default Membership;
