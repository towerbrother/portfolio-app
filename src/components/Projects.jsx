import React from "react";
import ProjectCard from "./common/ProjectCard";
import weatherAppImg from "../images/weather-app.PNG";
import expensesAppImg from "../images/expenses-app.PNG";
import indecisionAppImg from "../images/indecision-app.PNG";
import musicAppImg from "../images/music-app.PNG";
import calculatorImg from "../images/calculator.PNG";
import clockImg from "../images/clock.PNG";
import drumkitImg from "../images/drumkit.PNG";

const Projects = () => {
  const musicApp = {
    title: "Music App",
    stack: "React",
    description: "Nothing better than relaxing music while coding.",
    gitHubUrl: "https://github.com/towerbrother/waves-music-app",
    demoUrl: "https://towerbrother.github.io/waves-music-app",
  };

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

  const expensesApp = {
    title: "Expenses App",
    stack: "Firestore/React",
    description: "Keep track of your finances.",
    gitHubUrl: "https://github.com/towerbrother/expenses-app",
    demoUrl: "https://towerbrother-expenses-app.herokuapp.com/",
  };

  const calculator = {
    title: "JS Calculator",
    stack: "Javascript",
    description: "Calculate your way to unbound wealth.",
    gitHubUrl: "https://github.com/towerbrother/JS-calculator",
    demoUrl: "https://towerbrother.github.io/JS-calculator/",
  };

  const clock = {
    title: "JS Clock",
    stack: "Javascript",
    description: "What time is it?",
    gitHubUrl: "https://github.com/towerbrother/JS-clock",
    demoUrl: "https://towerbrother.github.io/JS-clock/",
  };

  const drumkit = {
    title: "JS DrumKit",
    stack: "Javascript",
    description: "Shall we play?",
    gitHubUrl: "https://github.com/towerbrother/JS-drumkit",
    demoUrl: "https://towerbrother.github.io/JS-drumkit/",
  };

  return (
    <div className="content_wrapper">
      <div className="projects-container">
        <ProjectCard
          title={musicApp.title}
          stack={musicApp.stack}
          description={musicApp.description}
          imgSrc={musicAppImg}
          gitHubUrl={musicApp.gitHubUrl}
          demoUrl={musicApp.demoUrl}
        />
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
          title={expensesApp.title}
          stack={expensesApp.stack}
          description={expensesApp.description}
          imgSrc={expensesAppImg}
          gitHubUrl={expensesApp.gitHubUrl}
          demoUrl={expensesApp.demoUrl}
        />
        {/* <ProjectCard
          title={videoApp.title}
          stack={videoApp.stack}
          description={videoApp.description}
          imgSrc={videoAppImg}
          gitHubUrl={videoApp.gitHubUrl}
          demoUrl={videoApp.demoUrl}
        /> */}
        <ProjectCard
          title={drumkit.title}
          stack={drumkit.stack}
          description={drumkit.description}
          imgSrc={drumkitImg}
          gitHubUrl={drumkit.gitHubUrl}
          demoUrl={drumkit.demoUrl}
        />
        <ProjectCard
          title={clock.title}
          stack={clock.stack}
          description={clock.description}
          imgSrc={clockImg}
          gitHubUrl={clock.gitHubUrl}
          demoUrl={clock.demoUrl}
        />
      </div>
    </div>
  );
};

export default Projects;
