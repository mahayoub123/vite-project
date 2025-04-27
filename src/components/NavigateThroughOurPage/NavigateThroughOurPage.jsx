import React from "react";
import "./NavigateThroughOurPage.css";
import NavigateCardData from "../../Data/NavigateCardData";
import NavigateCard from "../NavigateCard/NavigateCard";

const NavigateThroughOurPage = () => {
  return (
    <>
      <section className="navigationContainer">
        {NavigateCardData?.map((e, index) => {
          console.log(e.img, "5555");
          return (
            <NavigateCard
              key={index}
              title={e.title}
              img={e.img}
              desc={e.desc}
            />
          );
        })}
      </section>
    </>
  );
};

export default NavigateThroughOurPage;
