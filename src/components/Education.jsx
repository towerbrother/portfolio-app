import React from "react";
import Card from "./common/Card";

const Education = () => {
  const online = {
    title: "Online tutorials",
    date: "Sept-2019 - Ongoing",
    description:
      "freeCodeCamp, Udemy, Code with Mosh, etc. to level up programming skills.",
  };
  const meetup = {
    title: "Codecademy Meetup (London)",
    date: "Sept-2019 - Ongoing",
    description:
      "Getting together with like minded people is the best way to keep motivation up. The host of the Codecademy Meetup in London helped me push my skills to the next level and I'm very grateful for that.",
  };
  const pisa = {
    title: "Pisa University",
    date: "Sept-2010 - Aug-2014",
    description:
      "BSc and MSc in Industrial and Management Engineering with related internships.",
  };
  const cranfield = {
    title: "Cranfield University",
    date: "Sept-2014 - Aug-2015",
    description: "MSc in Engineering and Management of Manufacturing Systems",
  };

  return (
    <div className="content_wrapper">
      <Card
        title={online.title}
        date={online.date}
        description={online.description}
      />
      <Card
        title={meetup.title}
        date={meetup.date}
        description={meetup.description}
      />
      <Card
        title={pisa.title}
        date={pisa.date}
        description={pisa.description}
      />
      <Card
        title={cranfield.title}
        date={cranfield.date}
        description={cranfield.description}
      />
      <div className="skills">
        <h1>Skills:</h1>
        <ul>
          <li>
            <i class="devicon-html5-plain-wordmark"></i>
          </li>
          <li>
            <i class="devicon-css3-plain-wordmark"></i>
          </li>
          <li>
            <i class="devicon-sass-original"></i>
          </li>
          <li>
            <i class="devicon-javascript-plain"></i>
          </li>
          <li>
            <i class="devicon-react-original-wordmark"></i>
          </li>
          <li>
            <i class="devicon-git-plain-wordmark"></i>
          </li>
          <li>
            <i class="devicon-github-plain-wordmark"></i>
          </li>
          <li>
            <i class="devicon-heroku-plain-wordmark"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
