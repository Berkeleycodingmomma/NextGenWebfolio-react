import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Berkeleycodingmomma",
    icon: faGithub,
    color: "#5DE512",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@heberjonsey/videos",
    icon: faYoutube,
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amanda-gray-121a6a254/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
  {
    name: "Medium",
    url: "https://medium.com/@BerkeleyCodingMomma",
    icon: faMedium,
    color: "white",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        {/* Section: Social Icons */}
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {/* Map through socials array */}
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              {/* Link to social media */}
              <a href={url} className={`icon ${name}`} target="_blank" rel="noreferrer">
                {/* Social media icon */}
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size"
                  style={{ color: color }}
                />
              </a>
            </div>
          ))}
        </section>
        {/* Section: Footer information */}
        <section className="form-footer">
          {/* Designer information */}
          <h5 className="designer-text">Designed by Amanda Gray</h5>
          {/* Copyright */}
          <h6 className="copyright-text">
            &copy; {new Date().getFullYear()} All rights reserved.
          </h6>
        </section>
      </div>
    </footer>
  );
};

// Export Footer component
export default Footer;
