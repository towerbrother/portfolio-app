import React from "react";

const About = () => (
  <div className="content_wrapper">
    <div className="about__text">
      <p>
        I'm a{" "}
        <label className="is_colored">
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
        <label className="is_colored">
          Why do I want to transition into programming?
        </label>{" "}
        I want to design, build, and develop solutions to improve people's
        lives.
      </p>
      <p>I'm currently looking for a full-time Front End Developer role.</p>
      <div className="buttons">
        {/* <div className="about__button"> */}
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
        {/* </div> */}
      </div>
    </div>
  </div>
);

export default About;
