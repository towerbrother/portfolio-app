import React from "react";

const ProjectCard = ({
  title,
  stack,
  description,
  imgSrc,
  gitHubUrl,
  demoUrl,
}) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img className="project-card__image" src={imgSrc} alt={title} />
        <div className="project-card__overlay">
          <div className="project-card__overlay__info">
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
      <div className="project-card__mobile">
        <div className="project-card__mobile__info">
          <div className="mobile_title">{title}</div>
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
};

export default ProjectCard;
