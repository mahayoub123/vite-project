import React from "react";
import QuestionData from "../../Data/QuestionData";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import "./QuestionSection.css";
const QuestionSection = () => {
  return (
    <div className="questions">
      {QuestionData?.map((e, index) => {
        return (
          <AskedQuestions
            key={index}
            question={e.question}
            answer={e.answer}
            icon={e.icon}
          />
        );
      })}
    </div>
  );
};

export default QuestionSection;
