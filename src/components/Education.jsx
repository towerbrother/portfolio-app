import React from "react";
import EducationCard from "./common/EducationCard";

const Education = () => {
  const online = {
    title: "Online tutorials",
    date: "Sept-2019 - Ongoing",
    description:
      "freeCodeCamp, Udemy, Code with Mosh, etc. to level up programming skills.",
  };
  const meetup = {
    title: "Codecademy Meetup",
    date: "Sept-2019 - Ongoing",
    description:
      "Tutoring, pair programming, problem solving and portfolio building.",
  };
  const pisa = {
    title: "Pisa University",
    date: "Sept-2010 - Aug-2014",
    description:
      "BSc / MSc in Industrial and Management Engineering with related internships.",
  };
  const cranfield = {
    title: "Cranfield University",
    date: "Sept-2014 - Aug-2015",
    description: "MSc in Engineering and Management of Manufacturing Systems",
  };

  return (
    <div className="content_wrapper">
      <h1 className="title">Education</h1>
      <div className="card-wrapper">
        <EducationCard
          title={online.title}
          date={online.date}
          description={online.description}
        />
        <EducationCard
          title={meetup.title}
          date={meetup.date}
          description={meetup.description}
        />
        <EducationCard
          title={pisa.title}
          date={pisa.date}
          description={pisa.description}
        />
        <EducationCard
          title={cranfield.title}
          date={cranfield.date}
          description={cranfield.description}
        />{" "}
      </div>
      <div className="skills-wrapper">
        <h1 className="title">Skills</h1>
        <div className="skills">
          <div className="skills__logo">
            <i id="logo" class="devicon-html5-plain-wordmark"></i>
            <i id="logo" class="devicon-css3-plain-wordmark"></i>
            <i id="logo" class="devicon-sass-original"></i>
            <i id="logo" class="devicon-javascript-plain"></i>
            <i id="logo" class="devicon-react-original-wordmark"></i>
            <i id="logo" class="devicon-git-plain-wordmark"></i>
            <i id="logo" class="devicon-github-plain-wordmark"></i>
            <i id="logo" class="devicon-heroku-plain-wordmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
