import React from "react";
import { NavLink } from "react-router-dom";

const About = () => (
  <div className="content_wrapper">
    <div className="about__text">
      <p>Hi, I'm Giorgio (aka Tower)!</p>
      <p>
        I'm a{" "}
        <label className="is_red">
          self-taught JavaScript / React developer
        </label>{" "}
        with a passion for solving problems using technology.
      </p>
      <p>
        For the past 12 months I've been using early mornings and late evenings
        to learn and refine my skills. I love learning and I'm always hungry for
        new challenges.
      </p>
      <p>
        I’m a very organized, responsible and resilient individual. I bring
        broad commercial and management experience, well developed communication
        and teamworking skills as a key for personal and professional success.
      </p>
      <p>
        <label className="is_red">
          Why do I want to transition into programming?
        </label>{" "}
        I want to design, build, and develop solutions to improve people's
        lives.
      </p>
      <p>
        I'm currently looking for a full-time Front End Developer role.{" "}
        <NavLink className="about__text__navlink" to="/contact">
          Let's chat!
        </NavLink>
      </p>
    </div>
  </div>
);

export default About;
