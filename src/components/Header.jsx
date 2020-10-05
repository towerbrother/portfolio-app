import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/tower-logo.png";

const Header = () => (
  <div className="header_wrapper">
    <div className="header">
      <NavLink className="header__home" to="/">
        <img className="header__home__logo" src={logo} alt="logo" />
        <div className="header__home__name">
          <h1 className="name">Tower</h1>
          <h5 className="role">Front End Developer</h5>
        </div>
      </NavLink>
      <div className="header__routes">
        <NavLink className="header__routes__element" to="/about">
          About
        </NavLink>
        <NavLink className="header__routes__element" to="/education">
          Education
        </NavLink>
        <NavLink className="header__routes__element" to="/projects">
          Projects
        </NavLink>
        <NavLink className="header__routes__element" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
