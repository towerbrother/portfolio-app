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
        <button>
          <a
            className="home__buttons__link"
            href="https://github.com/towerbrother"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </button>
        <button>
          <a
            className="home__buttons__link"
            href="https://www.linkedin.com/in/giorgiotorre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
        <button>
          <a
            className="home__buttons__link"
            href="mailto:giorgio.torre8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default Home;
