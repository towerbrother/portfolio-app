import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => (
  <div className="content_wrapper">
    <div className="home">
      <h1 className="home__greetings">Hi!</h1>
      <h1 className="home__greetings__name">
        I'm <label className="is_colored">Giorgio</label>!
      </h1>
      <h2 className="home__statement">
        I build{' '}
        <NavLink className="home__statement__navlink" to="/projects">
          web applications
        </NavLink>{' '}
        that people need.
      </h2>
      <p className="home__description">
        Junior Software Developer @ stellenanzeigen.de GmbH & Co. KG
      </p>
      <div className="buttons">
        <button>
          <a
            className="button__link"
            href="https://github.com/towerbrother"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </button>
        <button>
          <a
            className="button__link"
            href="https://www.linkedin.com/in/giorgiotorre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
        <button className="button_alt">
          <Link
            className="button_alt__link"
            to="/Giorgio_Torre_CV.pdf"
            target="_blank"
            download
          >
            Get my CV!
          </Link>
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

export default Home;
