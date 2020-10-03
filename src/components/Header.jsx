import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo/tower-logo.png";

const Header = () => (
  <div className="container">
    <div className="header">
      <NavLink className="header__home" to="/">
        <img className="header__home__logo" src={logo} alt="logo" />
        <div className="header__home__name">
          <h1>Tower</h1>
          <h6>Front End Developer</h6>
        </div>
      </NavLink>
      <div className="header__routes">
        <NavLink className="header__routes__element" to="/about">
          About Me
        </NavLink>
        <NavLink className="header__routes__element" to="/skills">
          Skills
        </NavLink>
        <NavLink className="header__routes__element" to="/projects">
          Projects
        </NavLink>
        <NavLink className="header__routes__element" to="/contact">
          Contact Me
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
