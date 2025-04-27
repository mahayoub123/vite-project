import React from "react";
import "./BenfitsCard.css";

const BenfitsCard = ({ title, img, desc }) => {
  return (
    <section className="CardContainer">
      <div>
        <div className="CardIcon">
          <img src={img} alt="img" />
        </div>
        <div className="cardTitleStyle">{title}</div>
        <p className="cardTxtStyle">{desc}</p>
      </div>
    </section>
  );
};

export default BenfitsCard;
