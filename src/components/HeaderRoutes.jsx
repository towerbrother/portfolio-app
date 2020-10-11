import React from "react";
import { NavLink } from "react-router-dom";

const HeaderRoutes = ({ displaySize }) => (
  <div className={displaySize}>
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
);

export default HeaderRoutes;
