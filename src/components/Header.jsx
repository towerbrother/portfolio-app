import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo/tower-logo.png";

const Header = () => (
  <div>
    <NavLink className="home_nav" to="/">
      <div>
        <img src={logo} alt="logo" />
        <div>
          <h1>Tower</h1>
          <h6>Front End Developer</h6>
        </div>
      </div>
    </NavLink>
    <NavLink className="about_nav" to="/about">
      About Me
    </NavLink>
    <NavLink className="skills_nav" to="/skills">
      Skills
    </NavLink>
    <NavLink className="projects_nav" to="/projects">
      Projects
    </NavLink>
    <NavLink className="contact_nav" to="/contact">
      Contact Me
    </NavLink>
  </div>
);

export default Header;
