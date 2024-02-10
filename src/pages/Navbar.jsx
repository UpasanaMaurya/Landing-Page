import React from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
// import { ImAppleinc } from "react-icons/im";
import { SiApplenews } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <SiApplenews />
      </div>

      <div className="nav-links">
        {" "}
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Project</a>
          </li>
          <li>
            <a href="#contact">Experence</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="search-button">
        <button>
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
