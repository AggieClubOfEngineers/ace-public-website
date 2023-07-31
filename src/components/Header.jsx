import React, { useState, useRef, useEffect } from "react";
import { Menu as MenuIcon } from "tabler-icons-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/wolf_logo.svg";

const Header = ({ setActiveTab, switchView }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  const hamburger = useRef();

  const handleClick = (e) => {
    if (
      e.target === hamburger.current ||
      hamburger.current.contains(e.target)
    ) {
    } else if (!node.current.contains(e.target)) {
      // Outside click
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Adding the event listener on component mount
    document.addEventListener("mousedown", handleClick);

    // Cleaning up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <header
      id="header-container"
      className={`public ${isMenuOpen ? "open" : ""}`}
    >
      <Link to="/" className="nav-link">
        <img src={logo} id="wolf-logo" alt="logo" />
      </Link>
      <div
        ref={hamburger}
        className="hamburger-menu"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <MenuIcon size={32} />
      </div>
      <ul className="navbar-nav mx-auto text-center">
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/"
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/about-us"
              onClick={() => setActiveTab("about-us")}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/service"
              onClick={() => setActiveTab("service")}
            >
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/membership"
              onClick={() => setActiveTab("membership")}
            >
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/contact-us"
              onClick={() => setActiveTab("contact-us")}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link mx-2 nav-text"
              to="/recruitment"
              onClick={() => setActiveTab("recruitment")}
            >
              Recruitment
            </Link>
          </li>
        </ul>
      </ul>

      <div ref={node} className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul className="sidebar-navbar-nav">
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/"
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/about-us"
              onClick={() => setActiveTab("about-us")}
            >
              About Us
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/service"
              onClick={() => setActiveTab("service")}
            >
              Service
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/membership"
              onClick={() => setActiveTab("membership")}
            >
              Members
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/contact-us"
              onClick={() => setActiveTab("contact-us")}
            >
              Contact
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              className="sidebar-nav-link"
              to="/recruitment"
              onClick={() => setActiveTab("recruitment")}
            >
              Recruitment
            </Link>
          </li>
        </ul>
      </div>

      <button
        className="nav-text"
        id="member-portal-button"
        onClick={switchView}
      >
        MEMBER PORTAL
      </button>
    </header>
  );
};

export default Header;
