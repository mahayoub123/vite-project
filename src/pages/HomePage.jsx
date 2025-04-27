import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import BenfitsTitle from "../components/BenfitsTitle/BenfitsTitle";
import OurBenfits from "../components/OurBenfits/OurBenfits";
import Testimonial from "../components/Testimonial/Testimonial";
import OurTestimonials from "../components/OurTestimonials/OurTestimonials";
import Questions from "../components/Questions/Questions";
import QuestionSection from "../components/QuestionSection/QuestionSection";
import NavigateSection from "../components/NavigateSection/NavigateSection";
import NavigateThroughOurPage from "../components/NavigateThroughOurPage/NavigateThroughOurPage";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <BenfitsTitle />
      <OurBenfits />
      <Testimonial />
      <OurTestimonials />
      <Questions />
      <QuestionSection />
      <NavigateSection />
      <NavigateThroughOurPage />
      <Footer />
    </div>
  );
};

export default HomePage;
