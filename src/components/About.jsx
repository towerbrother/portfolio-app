import React from "react";
import { NavLink } from "react-router-dom";

const About = () => (
  <div className="content_wrapper">
    <div className="about__text">
      <p>
        I'm a{" "}
        <label className="is_colored">
          self-taught Software Developer
        </label>{" "}
        with a passion for solving problems using technology.
      </p>
      <p>
        For the past few years I've been using early mornings, late evenings and
        weekends to learn, collaborate and refine my skills. I love learning and
        I'm always hungry for new challenges.
      </p>
      <p>
        I’m a very organized, responsible and resilient individual. I bring
        broad commercial and management experience, well developed communication
        and teamworking skills as a key for personal and professional success.
      </p>
      <p>
        <label className="is_colored">
          Why did I transitioned into Software Development?
        </label>{" "}
        I want to design, build, and develop solutions to improve people's
        lives.
      </p>
      <div className="buttons">
        <button>
          <a
            className="button__link"
            href="mailto:giorgio.torre8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's chat!
          </a>
        </button>
        <button>
          <NavLink className="button__link" to="/projects">
            See what I can do!
          </NavLink>
        </button>
      </div>
    </div>
  </div>
);

export default About;
