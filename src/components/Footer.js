import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

const socials = [
    {
      name: "GitHub",
      url: "https://github.com/ThomasCalle",
      icon: faGithub,
      color: "#5DE512",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@thoscalle4104",
      icon: faYoutube,
      color: "#FF0000",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thomas-calle/",
      icon: faLinkedin,
      color: "#2EACE8",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@thoscalle?lang=en",
      icon: faTiktok,
      color: "white",
    },
  ];