import React, { useState } from "react";
import "./AskedQuestions.css";

const AskedQuestions = ({ question, answer, icon }) => {
  const [active, setActive] = useState(false);
  function toggleAccordion() {
    setActive(!active);
  }
  return (
    <div className="questionContainer">
      <div className="questionStyle" onClick={toggleAccordion}>
        <p>{question}</p>
        <img src={icon} alt="icon" className="iconContainer" />
      </div>
      {!active && (
        <div>
          <p className="answerStyle">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskedQuestions;
