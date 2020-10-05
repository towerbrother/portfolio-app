import React from "react";

const Card = ({ title, date, description }) => (
  <div className="card">
    <p>
      <span className="card__title">{title}</span>
      <span className="card__date">{date}</span>
    </p>
    <p className="card__description">{description}</p>
  </div>
);

export default Card;
