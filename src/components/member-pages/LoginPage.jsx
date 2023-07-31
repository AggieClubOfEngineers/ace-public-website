import React from "react";

import { LockSquare, SquareArrowRight } from "tabler-icons-react";

import "../../styles/login-page.css";
import bcrypt from "bcryptjs";

const names = [
  "Aidan Pena",
  "Amrit Nanda",
  "Andrew Lin",
  "Andrew Marshall",
  "Anton Kacer",
  "Ben Brod",
  "Benjamin White",
  "Blaze Montagne",
  "Braden Loeffler",
  "Brandon Turnage",
  "Brayden Rosello",
  "Chase Albright",
  "Clement Ong",
  "Connor Gilliland",
  "Connor Zuspan",
  "Dakota Fathke",
  "Daniel Garcia",
  "Dohoon Kim",
  "Drew Remington",
  "Dylan Bell",
  "Eric McGonagle",
  "Erick Lemus",
  "Ethan Birdsall",
  "Gerardo Ruiz",
  "Glory Oluwole",
  "Grant Schottlekotte",
  "Hudson Hurtig",
  "Hunter Aschen",
  "Irving Salinas",
  "Jackson Norfolk",
  "Jacob Technik",
  "Jake Flores",
  "Jess Holbert",
  "Jon Vanwagenen",
  "Jonathan Kutsch",
  "Joseph Valenta",
  "Juan Nerio",
  "Justen Pearl",
  "Kyle Dessens",
  "Lance Torno",
  "Lane Thomae",
  "Lucas Giammona",
  "Lucas Swoyer",
  "Luke Sciba",
  "Luke Smith",
  "Mateo Cerna",
  "Matthew Graham",
  "Matthew Oakland",
  "Moses Monty",
  "Nate Mathews",
  "Nathan Casazza",
  "Nick Bodenheimer",
  "Nick Dittemore",
  "Nick Moreno",
  "Nicolas Rogstad",
  "Nils Ljung",
  "Patrick Martin",
  "Peyton Woytek",
  "Preston Greenwood",
  "Ryan Riddle",
  "Scott Trouy",
  "Sebastian Coronado",
  "Sid Venkatraman",
  "Tyler Powell",
  "Tyler Woods",
  "Van Wilcox",
  "Vinny LoBello",
  "Whitten Bowles",
  "Zach Podraza",
];

import { useState } from "react";
import db from "../../config";

import { getDoc, doc } from "firebase/firestore";

function LoginPage({ setMember }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    const username = "john_doe";
    event.preventDefault();

    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // Use bcrypt's compare function to check if the provided password matches the stored hash
      if (await bcrypt.compare(password, data.hashedPassword)) {
        setMember({ memberId: username, role: data.role });
        setError(null);
      } else {
        setError("Incorrect Password");
      }
    } else {
      setError("User does not exist");
    }
  };

  return (
    <div className="login-container">
      <LockSquare className="login-icon" strokeWidth={0.5} color={"#123456"} />
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <select name="username">
          {names &&
            names.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
        </select>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <div className="error">Incorrect Password</div>}
        <div className="submit-button-container" onClick={handleLogin}>
          <SquareArrowRight
            className="login-button-icon"
            strokeWidth={2}
            color={"#123456"}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
