import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ToggleView = () => {
  return (
    <div className="toggle-view">
      <input type="checkbox" className="toggle-view__checkbox" id="checkbox" />
      <label className="toggle-view__label" htmlFor="checkbox">
        <FontAwesomeIcon icon={faMoon} className="toggle-view__icon" />
        <FontAwesomeIcon icon={faSun} className="toggle-view__icon" />
        <div className="toggle-view__ball"></div>
      </label>
    </div>
  );
};

export default ToggleView;
