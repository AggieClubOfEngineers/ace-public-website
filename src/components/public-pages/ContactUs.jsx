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
              Nick Dittemore
            </a>
          </div>
          <div className="position">
            <span className="position-title">External Vice President:</span>{" "}
            <a className="email" href="mailto:aceexternalvp@gmail.com">
              Brandon Turnage
            </a>
          </div>
          <div className="position">
            <span className="position-title">Social:</span>{" "}
            <a className="email" href="mailto:nils.ljung@tamu.edu">
              Nils Ljung
            </a>
          </div>
          <div className="position">
            <span className="position-title">Webmaster:</span>{" "}
            <a className="email" href="mailto:acetamuwebmaster@gmail.com">
              Nathan Casazza
            </a>
          </div>
        </div>
        <div className="officers-column">
          <div className="position">
            <span className="position-title">Internal Vice President:</span>{" "}
            <a className="email" href="mailto:aceivp@gmail.com">
              Hudson Hurtig
            </a>
          </div>
          <div className="position">
            <span className="position-title">Secretary:</span>{" "}
            <a className="email" href="mailto:ace.secretary.tamu@gmail.com">
              Connor Gilliland
            </a>
          </div>
          <div className="position">
            <span className="position-title">Service:</span>{" "}
            <a className="email" href="mailto:tamuaceservice@gmail.com">
              Sid Venkatraman
            </a>
          </div>
          <div className="position">
            <span className="position-title">Philanthropy:</span>{" "}
            <a className="email" href="mailto:acephilanthropy@gmail.com">
              Joseph Valenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
