import React from "react";

const EducationCard = ({ title, date, description }) => (
  <div className="card">
    <p>
      <span className="card__title">{title}</span>
      <span className="card__subtitle">{date}</span>
    </p>
    <p className="card__description">{description}</p>
  </div>
);

export default EducationCard;
