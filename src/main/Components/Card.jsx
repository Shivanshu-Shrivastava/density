import React from "react";

const Card = ({ bgcolor, title,tr, }) => {
  return (
    <div
      className="card"
      style={{ width: 18 + "rem", backgroundColor: `${bgcolor}`,transform:`rotate(${tr}deg)` }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga non
          vitae voluptates! Qui ducimus accusamus non deleniti optio. Nemo,
          assumenda.
        </p>
      </div>
    </div>
  );
};

export default Card;
