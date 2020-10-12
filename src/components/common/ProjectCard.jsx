import React from "react";

const ProjectCard = ({
  title,
  stack,
  description,
  imgSrc,
  gitHubUrl,
  demoUrl,
}) => (
  <div className="project_card">
    <img className="project_card__image" src={imgSrc} alt={title} />
    <div className="project_card__overlay">
      <div className="project_card__overlay__info">
        <h1>{stack}</h1>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div className="buttons">
          {gitHubUrl === "" ? (
            <button className="button__link" disabled>
              Source
            </button>
          ) : (
            <button>
              <a
                className="button__link"
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          )}
          {demoUrl === "" ? (
            <button className="button__link" disabled>
              Demo
            </button>
          ) : (
            <button>
              <a
                className="button__link"
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
