import React, { useState, useRef, useEffect } from "react";
import { Menu as MenuIcon } from "tabler-icons-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logos/wolf_logo.svg";
import "../styles/public-view.css";
const Header = ({ setActiveTab }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const node = useRef();
  const hamburger = useRef();

  const handleClick = (e) => {
    if (
      e.target === hamburger.current ||
      hamburger.current.contains(e.target)
    ) {
      // Do nothing if hamburger is clicked
    } else if (!node.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const closeModal = () => {
    setShowTicketModal(false);
  };

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
              Officers
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
        </ul>
      </div>

      {/* Changed from an <a> to a button that triggers the modal */}
      <button
        className="nav-text"
        id="application-button"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLScfp9az4PMCXRBxen2MW0yXOT0B8iSP7LXZyO4iItHfWsPN3g/viewform",
            "_blank"
          )
        }
      >
        New Member Application
      </button>
      {/* <button
        className="nav-text"
        id="member-portal-button"
        onClick={() => setShowTicketModal(true)}
      >
        Pickleball for Patriots
      </button> */}

      {/* Pickleball for Patriots popup */}
      {/* {showTicketModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select Ticket Type</h2>
            <div className="modal-buttons">
              <a
                className="modal-button"
                href="https://buy.stripe.com/6oEaGJ40N6K54Zq3cc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Tickets
              </a>
              <a
                className="modal-button"
                href="https://buy.stripe.com/aEUcOR1SFb0lgI8eUV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Non-Student Tickets
              </a>
              <a
                className="modal-button"
                href="https://buy.stripe.com/bIY9CF40N2tP4Zq7sx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Non-Shirt Tickets
              </a>
              <a
                className="modal-button"
                href="https://buy.stripe.com/8wM3eheFrb0lfE49AE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spectator Tickets
              </a>
            </div>
            <button onClick={closeModal} className="modal-close">
              Close
            </button>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
