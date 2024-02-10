import React from "react";
import "./Support.css";
import { FaRocket } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const services = [
  {
    icon: <FaRocket />,
    title: "Rocket Service",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    href: "https://www.google.com",
  },
  {
    icon: <MdSupportAgent />,
    title: "Support Agent",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    href: "https://www.google.com",
  },
  {
    icon: <IoTimeOutline />,
    title: "Time Management",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    href: "https://www.google.com",
  },
];

const Support = () => {
  return (
    <div className="serviceContainer">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <div className="content">
            <div className="logo">
              <a href={service.href} target="_blank" rel="noopener noreferrer">
                <span>{service.icon}</span>
              </a>
            </div>
            <div className="title">
              <h3>{service.title}</h3>
            </div>
          </div>
          <div className="desc">
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
