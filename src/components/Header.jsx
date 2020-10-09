import React from "react";
import { NavLink } from "react-router-dom";
// import logoDark from "../images/tower-logo-dark.png";
// import logoLight from "../images/tower-logo-light.png";

const Header = () => (
  <div className="header_wrapper">
    <div className="header">
      <NavLink className="header__home" to="/">
        {/* <img className="header__home__logo" src={logoDark} alt="logo dark theme"/>
         <img className="header__home__logo" src={logoLight} alt="logo dark theme"/> */}
        <div className="header__home__name">
          <h1 className="name">Giorgio Torre</h1>
          <h4 className="role">Front End Developer</h4>
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
