import React from "react";
import ProjectCard from "./common/ProjectCard";
import weatherAppImg from "../images/weather-app.PNG";
import budgetAppImg from "../images/budget-app.PNG";
import indecisionAppImg from "../images/indecision-app.PNG";
import videoAppImg from "../images/video-app.PNG";

const Projects = () => {
  const weatherApp = {
    title: "Weather App",
    stack: "React",
    description: "Check the weather before getting out of the house.",
    gitHubUrl: "https://github.com/towerbrother/weather-app",
    demoUrl: "https://tower-weather-app.herokuapp.com/",
  };

  const indecisionApp = {
    title: "Indecision App",
    stack: "React",
    description: "Blame fate when faced with a hard decision!?",
    gitHubUrl: "https://github.com/towerbrother/indecision-app",
    demoUrl: "https://tower-indecision-app.herokuapp.com/",
  };

  const budgetApp = {
    title: "Budget App",
    stack: "Firestore/React",
    description: "Keep track of your finances.",
    gitHubUrl: "https://github.com/towerbrother/budget-app",
    demoUrl: "https://tower-budget-app.herokuapp.com/",
  };

  const videoApp = {
    title: "Video App",
    stack: "Firestore/React",
    description: "Coming soon...",
    gitHubUrl: "",
    demoUrl: "",
  };

  // add Vanilla JS apps - calculator / snake / clock

  return (
    <div className="content_wrapper">
      <div className="projects-container">
        <ProjectCard
          title={weatherApp.title}
          stack={weatherApp.stack}
          description={weatherApp.description}
          imgSrc={weatherAppImg}
          gitHubUrl={weatherApp.gitHubUrl}
          demoUrl={weatherApp.demoUrl}
        />
        <ProjectCard
          title={budgetApp.title}
          stack={budgetApp.stack}
          description={budgetApp.description}
          imgSrc={budgetAppImg}
          gitHubUrl={budgetApp.gitHubUrl}
          demoUrl={budgetApp.demoUrl}
        />
        <ProjectCard
          title={indecisionApp.title}
          stack={indecisionApp.stack}
          description={indecisionApp.description}
          imgSrc={indecisionAppImg}
          gitHubUrl={indecisionApp.gitHubUrl}
          demoUrl={indecisionApp.demoUrl}
        />
        <ProjectCard
          title={videoApp.title}
          stack={videoApp.stack}
          description={videoApp.description}
          imgSrc={videoAppImg}
          gitHubUrl={videoApp.gitHubUrl}
          demoUrl={videoApp.demoUrl}
        />
      </div>
    </div>
  );
};

export default Projects;
