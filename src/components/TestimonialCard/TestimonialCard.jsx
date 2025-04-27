import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({ icon, name, img, desc }) => {
  return (
    <div className="testimonialContainer">
      <div className="card">
        <img src={icon} alt="icon" />
        <div className="nameStyle">{name}</div>
        <div>
          {" "}
          <img src={img} alt="img" />
        </div>
        <p className="testimonialTxtStyle">{desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
