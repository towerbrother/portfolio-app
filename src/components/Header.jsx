import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header_wrapper">
      <ul className={isOpen ? "active header" : "header"}>
        <li className="header__home">
          <NavLink
            className="header__link"
            to="/"
            onClick={isOpen ? () => setIsOpen(!isOpen) : null}
          >
            Giorgio <label className="is_colored">Torre</label>
          </NavLink>
        </li>
        <li className="header__routes__element">
          <NavLink
            className="header__link"
            to="/home"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </NavLink>
        </li>
        <li className="header__routes__element">
          <NavLink
            className="header__link"
            to="/about"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </NavLink>
        </li>
        <li className="header__routes__element">
          <NavLink
            className="header__link"
            to="/skills"
            onClick={() => setIsOpen(!isOpen)}
          >
            Skills
          </NavLink>
        </li>
        <li className="header__routes__element">
          <NavLink
            className="header__link"
            to="/projects"
            onClick={() => setIsOpen(!isOpen)}
          >
            Projects
          </NavLink>
        </li>
        <li className="header__routes__element">
          <a
            className="header__link"
            href="mailto:giorgio.torre8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </a>
        </li>
        <li className="header__icon">
          {isOpen ? (
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          ) : (
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
