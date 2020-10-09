import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header_wrapper">
    <div className="header">
      <NavLink className="header__home" to="/">
        <div className="header__home__name">
          <h1 className="name">Giorgio Torre</h1>
          <h4 className="role">Front End Developer</h4>
        </div>
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
    </div>
  </div>
);

export default Header;
