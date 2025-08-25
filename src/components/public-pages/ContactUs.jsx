import React from "react";
import "../../styles/contact.css";

function ContactUs() {
  return (
    <div className="contact-content">
      <h1 className="contact-title">Get In Touch</h1>
      <hr />
      <p className="contact-intro">
        Have a question? Interested in speaking at a general meeting? Just
        looking to drop a note? Click the appropriate officer's name below to
        draft an email, hover to reveal their email. Please direct all general
        inquiries to our secretary.
      </p>
      <br />
      <div className="contact-info-container">
        <div className="officers-column">
          <div className="position">
            <span className="position-title">President:</span>{" "}
            <a className="email" href="mailto:tamuacepresident@gmail.com">
              Jacob Technik
            </a>
          </div>
          <div className="position">
            <span className="position-title">External Vice President:</span>{" "}
            <a className="email" href="mailto:aceexternalvp@gmail.com">
              Manuel Pandavila
            </a>
          </div>
          <div className="position">
            <span className="position-title">Social:</span>{" "}
            <a className="email" href="mailto:alan.j.marini@tamu.edu">
              Alan Marini
            </a>
          </div>
          <div className="position">
            <span className="position-title">Webmaster:</span>{" "}
            <a className="email" href="mailto:acetamuwebmaster@gmail.com">
              Joshua Mayhugh
            </a>
          </div>
        </div>
        <div className="officers-column">
          <div className="position">
            <span className="position-title">Internal Vice President:</span>{" "}
            <a className="email" href="mailto:aceivp@gmail.com">
              Julian Pollina
            </a>
          </div>
          <div className="position">
            <span className="position-title">Secretary:</span>{" "}
            <a className="email" href="mailto:ace.secretary.tamu@gmail.com">
              Jacob Hargreaves
            </a>
          </div>
          <div className="position">
            <span className="position-title">Service:</span>{" "}
            <a className="email" href="mailto:tamuaceservice@gmail.com">
              Hudson Elbert
            </a>
          </div>
          <div className="position">
            <span className="position-title">Philanthropy:</span>{" "}
            <a className="email" href="mailto:acephilanthropy@gmail.com">
              Ridge Robinson
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
