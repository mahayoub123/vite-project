import React from "react";
import TestimonialCardData from "../../Data/TestimonialCardData";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./OurTestimonials.css";
const OurTestimonials = () => {
  return (
    <section>
      <div className="testimonialContainerStyling">
        {TestimonialCardData?.map((e, index) => {
          return (
            <TestimonialCard
              key={index}
              icon={e.icon}
              name={e.name}
              img={e.img}
              desc={e.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurTestimonials;
