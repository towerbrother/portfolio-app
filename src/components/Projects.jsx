import React from "react";
import ProjectCard from "./common/ProjectCard";
import weatherAppImg from "../images/weather-app.PNG";
import budgetAppImg from "../images/budget-app.PNG";
import indecisionAppImg from "../images/indecision-app.PNG";
import videoAppImg from "../images/video-app.PNG";
import calculatorImg from "../images/calculator.PNG";

const Projects = () => {
  const weatherApp = {
    title: "Weather App",
    stack: "React",
    description: "Check the weather before getting out of the house.",
    gitHubUrl: "https://github.com/towerbrother/weather-app",
    demoUrl: "https://towerbrother.github.io/weather-app",
  };

  const indecisionApp = {
    title: "Indecision App",
    stack: "React",
    description: "Blame fate when faced with a hard decision!?",
    gitHubUrl: "https://github.com/towerbrother/indecision-app",
    demoUrl: "https://towerbrother.github.io/indecision-app",
  };

  const budgetApp = {
    title: "Budget App",
    stack: "Firestore/React",
    description: "Keep track of your finances.",
    gitHubUrl: "https://github.com/towerbrother/budget-app",
    demoUrl: "",
  };

  const videoApp = {
    title: "Video App",
    stack: "Firestore/React",
    description: "Coming soon...",
    gitHubUrl: "",
    demoUrl: "",
  };

  const calculator = {
    title: "JS Calculator",
    stack: "Javascript",
    description: "Calculate your way to unbound wealth.",
    gitHubUrl: "https://github.com/towerbrother/JS-calculator",
    demoUrl: "https://towerbrother.github.io/JS-calculator/",
  };

  // const clock = {
  //   title: "JS Clock",
  //   stack: "Javascript",
  //   description: "What time is it?",
  //   gitHubUrl: "https://github.com/towerbrother/JS-clock",
  //   demoUrl: "https://towerbrother.github.io/JS-clock/",
  // };

  // const drumKit = {
  //   title: "JS DrumKit",
  //   stack: "Javascript",
  //   description: "Shall we play?",
  //   gitHubUrl: "https://github.com/towerbrother/JS-drumkit",
  //   demoUrl: "https://towerbrother.github.io/JS-drumkit/",
  // };

  // const snake = {
  //   title: "JS Snake",
  //   stack: "Javascript",
  //   description: "The good old days...",
  //   gitHubUrl: "https://github.com/towerbrother/JS-snake",
  //   demoUrl: "https://towerbrother.github.io/JS-snake/",
  // };

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
          title={indecisionApp.title}
          stack={indecisionApp.stack}
          description={indecisionApp.description}
          imgSrc={indecisionAppImg}
          gitHubUrl={indecisionApp.gitHubUrl}
          demoUrl={indecisionApp.demoUrl}
        />
        <ProjectCard
          title={calculator.title}
          stack={calculator.stack}
          description={calculator.description}
          imgSrc={calculatorImg}
          gitHubUrl={calculator.gitHubUrl}
          demoUrl={calculator.demoUrl}
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
