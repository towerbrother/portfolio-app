import React from "react";

const ProjectCard = ({ title, description, imgSrc, gitHubUrl, demoUrl }) => (
  <div className="project_card">
    <img className="project_card__image" src={imgSrc} alt={title} />
    <div className="project_card__overlay">
      <div className="project_card__overlay__info">
        <h1 className="project_card__overlay__title">{title}</h1>
        <h3 className="project_card__overlay__description">{description}</h3>
        <div className="project_card__overlay__links">
          <a
            className="project_card__overlay__links__link"
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>

          <a
            className="project_card__overlay__links__link"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
