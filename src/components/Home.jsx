import React from "react";

const Home = () => (
  <div className="content_wrapper">
    <div className="home">
      <div className="home__title">
        <h1 className="home__title__greetings">Hello friend!</h1>
        <h1 className="home__title__name">I'm Giorgio (aka Tower)</h1>
      </div>
      <div className="home__subtitle">
        <h2>I build web applications that people need.</h2>
      </div>
      <div className="home__description">
        <p>Front End Developer - currently looking for a full-time role.</p>
      </div>
      <div className="home__buttons">
        <button>GitHub</button>
        <button>LinkedIn</button>
        <button>Contact Me</button>
      </div>
    </div>
  </div>
);

export default Home;
