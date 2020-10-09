import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="header_wrapper">
    <div className="header">
      <NavLink className="header__home" to="/">
        <h1 className="name">Giorgio</h1>
        <h1 className="surname">Torre</h1>
      </NavLink>
      <div className="header__routes">
        <NavLink className="header__routes__element" to="/about">
          About
        </NavLink>
        <NavLink className="header__routes__element" to="/skills">
          Skills
        </NavLink>
        <NavLink className="header__routes__element" to="/projects">
          Projects
        </NavLink>
        <a
          className="header__routes__element"
          href="mailto:giorgio.torre8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
      <FontAwesomeIcon icon={faBars} className="header__icon" />
    </div>
  </div>
);

export default Header;
