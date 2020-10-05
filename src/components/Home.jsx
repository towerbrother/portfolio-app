import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className="content_wrapper">
    <div className="home">
      <h1 className="home__greetings">Hi, I'm Tower!</h1>
      <h2 className="home__statement">
        I build{" "}
        <NavLink className="home__statement__navlink" to="/projects">
          web applications
        </NavLink>{" "}
        that people need.
      </h2>
      <p className="home__description">
        Front End Developer - currently looking for a full-time role.
      </p>
      <div className="home__buttons">
        <button target="_blank">GitHub</button>
        <button target="_blank">LinkedIn</button>
        <button>
          <NavLink className="home__buttons__navlink" to="/contact">
            Contact Me
          </NavLink>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
