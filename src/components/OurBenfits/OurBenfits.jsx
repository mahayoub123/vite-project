import React from "react";
import "./OurBenfits.css";
import BenfitsCard from "../BenfitsCard/BenfitsCard";
import BenfitsCardData from "../../Data/BenfitsCardData";

const OurBenfits = () => {
  return (
    <section>
      <div className=" cardContainerStyling">
        {BenfitsCardData?.map((e, index) => {
          return (
            <BenfitsCard
              key={index}
              img={e.img}
              title={e.title}
              desc={e.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurBenfits;
