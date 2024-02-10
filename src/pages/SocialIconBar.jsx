import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./SocialIconBar.css";
import Button from "../components/Button";



const SocialIconBar = () => {
  const socialMediaLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <AiFillInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  const ContactInfoItem = ({ icon, text }) => {
    return (
      <li>
        <span role="img" aria-label="icon">
          {icon}
        </span>{" "}
        {text}
      </li>
    );
  };

  return (
    <div className="Container">
      <div className="social-icon-bar">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="contact">
        <ContactInfoItem icon="📞" text="91-6387734861" />
        <ContactInfoItem icon="✉️" text="upasanamaurya01@gmail.com" />
      </div>
      <div className="request-btn">
        <Button label={'REQEST A CONSULT'} />
      </div>
    </div>
  );
};

export default SocialIconBar;

