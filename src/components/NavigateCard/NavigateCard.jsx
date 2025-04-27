import React from "react";
import arrow from "../../assets/imges/arrowright.svg";
import "./NavigateCard.css";

const NavigateCard = ({ title, img, desc }) => {
  return (
    <div className="navigationCardContainer">
      <div className="cardTitleStyle">{title}</div>
      <div className="navigationimgStyle">
        <img src={img} alt="img" />
      </div>
      <p className="navigateTxtStyle">{desc}</p>
      <button className="navigateBtnStyle">
        Learn More <img src={arrow} alt="arrow" />{" "}
      </button>
    </div>
  );
};

export default NavigateCard;
