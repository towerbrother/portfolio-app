import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderRoutes from "./HeaderRoutes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header_wrapper">
      <div className="header">
        <NavLink className="header__home" to="/">
          <h1 className="name">Giorgio</h1>
          <h1 className="surname">Torre</h1>
        </NavLink>
        <HeaderRoutes displaySize={"header__routes__desktop"} />
        {isOpen ? (
          <div>
            <HeaderRoutes displaySize={"header__routes__mobile"} />
            <a href onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon
                icon={faTimes}
                className="header__icon"
                id="cross"
              />
            </a>
          </div>
        ) : (
          <a href onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faBars}
              className="header__icon"
              id="hamburger"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
