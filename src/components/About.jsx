import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const About = () => (
  <div className="content_wrapper">
    <div className="about__text">
      <p>
        I'm a{' '}
        <label className="is_colored">self-taught Software Developer</label>{' '}
        with a passion for solving problems using technology.
      </p>
      <p>
        I am a <label className="is_colored">self-starter</label> who loves to
        learn new skills and improve existing ones. My professional and life
        experiences brought to me a solid blend of technical knowledge and
        project delivery awareness, a great combination in today's fast-paced
        work environment.
      </p>
      <p>
        I’m a very <label className="is_colored">organized</label>,{' '}
        <label className="is_colored">responsible</label> and{' '}
        <label className="is_colored">resilient</label> individual. I bring
        broad commercial and management experience, well developed{' '}
        <label className="is_colored">
          communication and teamworking skills
        </label>{' '}
        as a key for personal and professional success.
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
        <button className="button_alt">
          <Link
            className="button_alt__link"
            to="/CV.pdf"
            target="_blank"
            download
          >
            Get my CV!
          </Link>
        </button>
      </div>
    </div>
  </div>
);

export default About;
