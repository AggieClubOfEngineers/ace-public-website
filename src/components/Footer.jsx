import React from "react";

import { BrandInstagram, BrandLinkedin, Mail } from "tabler-icons-react";

const Footer = () => {
  return (
    <footer id="footer-container" className="public">
      <div className="footer-content">
        <a
          className="footer__icon-link"
          href="https://www.instagram.com/aggieclubofengineers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandInstagram size={50} strokeWidth={1.5} color="white" />
        </a>
        <a
          className="footer__icon-link"
          href="https://www.linkedin.com/company/aggie-club-ace/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLinkedin size={50} strokeWidth={1.5} color="white" />
        </a>
        <a
          className="footer__icon-link"
          href="mailto:TamuAceRecruitment@gmail.com;Nickmoreno2012@yahoo.com;marshalperkins@gmail.com"
        >
          <Mail size={50} strokeWidth={1.5} color="white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
